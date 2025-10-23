import json
import os
import psycopg2
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from typing import Dict, Any

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Save lead contact data to database
    Args: event with httpMethod, body containing name and phone
          context with request_id
    Returns: HTTP response with success/error status
    '''
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'}),
            'isBase64Encoded': False
        }
    
    body_data = json.loads(event.get('body', '{}'))
    name = body_data.get('name', '').strip()
    phone = body_data.get('phone', '').strip()
    
    if not name or not phone:
        return {
            'statusCode': 400,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Name and phone are required'}),
            'isBase64Encoded': False
        }
    
    database_url = os.environ.get('DATABASE_URL')
    if not database_url:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Database not configured'}),
            'isBase64Encoded': False
        }
    
    conn = psycopg2.connect(database_url)
    cur = conn.cursor()
    
    cur.execute(
        "INSERT INTO leads (name, phone) VALUES (%s, %s) RETURNING id",
        (name, phone)
    )
    lead_id = cur.fetchone()[0]
    
    conn.commit()
    cur.close()
    conn.close()
    
    smtp_host = os.environ.get('SMTP_HOST')
    smtp_port = int(os.environ.get('SMTP_PORT', '587'))
    smtp_user = os.environ.get('SMTP_USER')
    smtp_password = os.environ.get('SMTP_PASSWORD')
    email_to = os.environ.get('EMAIL_TO')
    
    if all([smtp_host, smtp_user, smtp_password, email_to]):
        try:
            msg = MIMEMultipart('alternative')
            msg['Subject'] = f'Новая заявка на замер окон #{lead_id}'
            msg['From'] = smtp_user
            msg['To'] = email_to
            
            html_body = f'''
            <html>
              <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
                  <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">Новая заявка на замер окон</h2>
                  
                  <div style="background-color: #f8fafc; padding: 15px; border-radius: 5px; margin: 20px 0;">
                    <p style="margin: 10px 0;"><strong>Номер заявки:</strong> #{lead_id}</p>
                    <p style="margin: 10px 0;"><strong>Имя клиента:</strong> {name}</p>
                    <p style="margin: 10px 0;"><strong>Телефон:</strong> <a href="tel:{phone}" style="color: #2563eb; text-decoration: none;">{phone}</a></p>
                  </div>
                  
                  <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
                    <p>Это автоматическое уведомление с сайта Оконный Порт</p>
                  </div>
                </div>
              </body>
            </html>
            '''
            
            text_body = f'''
            Новая заявка на замер окон
            
            Номер заявки: #{lead_id}
            Имя клиента: {name}
            Телефон: {phone}
            
            ---
            Это автоматическое уведомление с сайта Оконный Порт
            '''
            
            msg.attach(MIMEText(text_body, 'plain'))
            msg.attach(MIMEText(html_body, 'html'))
            
            server = smtplib.SMTP(smtp_host, smtp_port)
            server.starttls()
            server.login(smtp_user, smtp_password)
            server.send_message(msg)
            server.quit()
        except Exception as e:
            print(f'Email send error: {e}')
    
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'body': json.dumps({
            'success': True,
            'lead_id': lead_id,
            'message': 'Заявка успешно сохранена'
        }),
        'isBase64Encoded': False
    }