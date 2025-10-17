import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
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
    phone: '',
    city: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Форма отправлена:', formData);
    setIsSubmitting(false);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const isDark = variant === 'dark';

  if (compact) {
    return (
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full">
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
        <select
          value={formData.city}
          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          className={`h-14 text-base rounded-md border px-4 ${isDark ? 'bg-white/10 border-white/20 text-white' : 'border-input bg-background'}`}
          required
        >
          <option value="">Ваш город</option>
          {cities.map(city => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>
        <Button
          type="submit"
          size="lg"
          className="bg-accent hover:bg-accent/90 h-14 px-8 rounded-full font-semibold whitespace-nowrap transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
          disabled={submitted || isSubmitting}
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
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
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

          <div>
            <Label htmlFor="city" className={isDark ? 'text-white' : ''}>Ваш город</Label>
            <select
              id="city"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              className={`h-12 w-full rounded-md border px-3 ${isDark ? 'bg-white/10 border-white/20 text-white' : 'border-input bg-background'}`}
              required
            >
              <option value="">Выберите город</option>
              {cities.map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full bg-accent hover:bg-accent/90 h-12 rounded-full font-semibold transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            disabled={submitted || isSubmitting}
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

          <p className={`text-xs text-center ${isDark ? 'text-white/60' : 'text-muted-foreground'}`}>
            Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
          </p>
        </form>
      </CardContent>
    </Card>
  );
}