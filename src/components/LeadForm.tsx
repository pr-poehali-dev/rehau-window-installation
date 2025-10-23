import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import Icon from '@/components/ui/icon';

interface LeadFormProps {
  variant?: 'light' | 'dark';
  compact?: boolean;
}

const cities = [
  'Владивосток',
  'Артём',
  'Находка',
  'Уссурийск',
  'Большой Камень',
  'Партизанск',
  'Арсеньев'
];

export default function LeadForm({ variant = 'light', compact = false }: LeadFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://functions.poehali.dev/0769d889-b7a5-4f5b-bfa3-3638fd27d41c', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      const result = await response.json();
      
      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', phone: '' });
        setAgreedToTerms(false);
        setTimeout(() => setSubmitted(false), 3000);
      } else {
        console.error('Ошибка отправки:', result);
        alert('Ошибка отправки заявки. Попробуйте позже.');
      }
    } catch (error) {
      console.error('Ошибка:', error);
      alert('Ошибка отправки заявки. Попробуйте позже.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isDark = variant === 'dark';

  if (compact) {
    return (
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full">
        <div className="flex flex-col sm:flex-row gap-3">
          <Input
            placeholder="Ваше имя"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={`h-14 text-base input-focus ${isDark ? 'bg-white/10 border-white/20 text-white placeholder:text-white/60' : ''}`}
            required
          />
          <Input
            type="tel"
            placeholder="+7 (___) ___-__-__"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className={`h-14 text-base input-focus ${isDark ? 'bg-white/10 border-white/20 text-white placeholder:text-white/60' : ''}`}
            required
          />
        </div>

        <div className="flex items-start gap-2">
          <Checkbox 
            id="terms-compact"
            checked={agreedToTerms}
            onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
            className={isDark ? 'border-white/40' : ''}
          />
          <label 
            htmlFor="terms-compact" 
            className={`text-xs cursor-pointer ${isDark ? 'text-white/80' : 'text-muted-foreground'}`}
          >
            Я согласен с{' '}
            <a href="/privacy-policy.html" target="_blank" className="underline hover:text-accent">
              политикой конфиденциальности
            </a>
            {' '}и{' '}
            <a href="/terms-of-service.html" target="_blank" className="underline hover:text-accent">
              договором оферты
            </a>
          </label>
        </div>

        <Button
          type="submit"
          size="lg"
          className="bg-accent hover:bg-accent/90 h-14 px-8 rounded-full font-semibold whitespace-nowrap transform hover:scale-105 transition-all duration-300 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!agreedToTerms || submitted || isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Icon name="Loader2" size={20} className="animate-spin" />
              Отправка...
            </>
          ) : submitted ? (
            '✓ Отправлено!'
          ) : (
            <>
              <Icon name="Ruler" size={20} />
              Вызвать замерщика
            </>
          )}
        </Button>
      </form>
    );
  }

  return (
    <Card className={`${isDark ? 'bg-white/10 border-white/20 backdrop-blur-md' : ''}`}>
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-6 group">
          <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center transition-all duration-300 group-hover:rotate-20 group-hover:brightness-125">
            <Icon name="Phone" size={24} className="text-white" />
          </div>
          <div>
            <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-foreground'}`}>
              Бесплатный замер
            </h3>
            <p className={`text-sm ${isDark ? 'text-white/70' : 'text-muted-foreground'}`}>
              Выезд в день обращения
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name" className={isDark ? 'text-white' : ''}>Ваше имя</Label>
            <Input
              id="name"
              placeholder="Иван"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={`h-12 input-focus ${isDark ? 'bg-white/10 border-white/20 text-white placeholder:text-white/60' : ''}`}
              required
            />
          </div>

          <div>
            <Label htmlFor="phone" className={isDark ? 'text-white' : ''}>Телефон</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+7 (___) ___-__-__"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className={`h-12 input-focus ${isDark ? 'bg-white/10 border-white/20 text-white placeholder:text-white/60' : ''}`}
              required
            />
          </div>

          <div className="flex items-start gap-2">
            <Checkbox 
              id="terms"
              checked={agreedToTerms}
              onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
              className={isDark ? 'border-white/40' : ''}
            />
            <label 
              htmlFor="terms" 
              className={`text-xs cursor-pointer ${isDark ? 'text-white/80' : 'text-muted-foreground'}`}
            >
              Я согласен с{' '}
              <a href="/privacy-policy.html" target="_blank" className="underline hover:text-accent">
                политикой конфиденциальности
              </a>
              {' '}и{' '}
              <a href="/terms-of-service.html" target="_blank" className="underline hover:text-accent">
                договором оферты
              </a>
            </label>
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full bg-accent hover:bg-accent/90 h-12 rounded-full font-semibold transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!agreedToTerms || submitted || isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Icon name="Loader2" size={20} className="animate-spin" />
                Отправка...
              </>
            ) : submitted ? (
              '✓ Заявка отправлена!'
            ) : (
              <>
                <Icon name="Ruler" size={20} />
                Вызвать замерщика бесплатно
              </>
            )}
          </Button>


        </form>
      </CardContent>
    </Card>
  );
}