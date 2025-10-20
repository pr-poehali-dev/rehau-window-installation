import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface Lead {
  id: number;
  name: string;
  phone: string;
  created_at: string;
}

export default function Leads() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://functions.poehali.dev/ca39b0f5-5f50-4367-b08d-d39275bbbc31');
      const data = await response.json();
      
      if (data.success) {
        setLeads(data.leads);
      } else {
        setError('Ошибка загрузки заявок');
      }
    } catch (err) {
      setError('Ошибка подключения к серверу');
    } finally {
      setLoading(false);
    }
  };

  const exportToCSV = () => {
    const headers = ['ID', 'Имя', 'Телефон', 'Дата'];
    const rows = leads.map(lead => [
      lead.id,
      lead.name,
      lead.phone,
      new Date(lead.created_at).toLocaleString('ru-RU')
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.join(','))
    ].join('\n');

    const blob = new Blob(['\uFEFF' + csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `заявки_${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-muted flex items-center justify-center">
        <div className="flex items-center gap-3">
          <Icon name="Loader2" size={32} className="animate-spin text-primary" />
          <span className="text-xl">Загрузка...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-muted flex items-center justify-center">
        <Card className="max-w-md">
          <CardContent className="p-6 text-center">
            <Icon name="AlertCircle" size={48} className="text-red-500 mx-auto mb-4" />
            <p className="text-lg text-red-600">{error}</p>
            <Button onClick={fetchLeads} className="mt-4">
              Попробовать снова
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted py-12">
      <div className="container mx-auto px-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-3xl font-bold">Заявки</CardTitle>
              <p className="text-muted-foreground mt-2">
                Всего заявок: {leads.length}
              </p>
            </div>
            <div className="flex gap-3">
              <Button onClick={fetchLeads} variant="outline">
                <Icon name="RefreshCw" size={18} className="mr-2" />
                Обновить
              </Button>
              <Button onClick={exportToCSV} className="bg-green-600 hover:bg-green-700">
                <Icon name="Download" size={18} className="mr-2" />
                Экспорт в Excel
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {leads.length === 0 ? (
              <div className="text-center py-12">
                <Icon name="Inbox" size={64} className="text-muted-foreground mx-auto mb-4" />
                <p className="text-xl text-muted-foreground">Пока нет заявок</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold">ID</th>
                      <th className="px-4 py-3 text-left font-semibold">Имя</th>
                      <th className="px-4 py-3 text-left font-semibold">Телефон</th>
                      <th className="px-4 py-3 text-left font-semibold">Дата</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leads.map((lead, index) => (
                      <tr 
                        key={lead.id} 
                        className={`border-b hover:bg-muted/50 transition-colors ${
                          index % 2 === 0 ? 'bg-white' : 'bg-muted/20'
                        }`}
                      >
                        <td className="px-4 py-4 font-mono text-sm">{lead.id}</td>
                        <td className="px-4 py-4 font-medium">{lead.name}</td>
                        <td className="px-4 py-4">
                          <a 
                            href={`tel:${lead.phone}`} 
                            className="text-primary hover:underline flex items-center gap-2"
                          >
                            <Icon name="Phone" size={16} />
                            {lead.phone}
                          </a>
                        </td>
                        <td className="px-4 py-4 text-muted-foreground">
                          {formatDate(lead.created_at)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
