import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const benefits = [
  {
    icon: 'Flame',
    title: 'Экономия на отоплении до 40%',
    description: 'Энергоэффективные окна Rehau снижают теплопотери и счета за отопление',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: 'Volume2',
    title: 'Звукоизоляция до 42 дБ',
    description: 'Многокамерный профиль блокирует шум улицы — тишина и покой в доме',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: 'Shield',
    title: 'Срок службы 50+ лет',
    description: 'Немецкое качество гарантирует долговечность без деформации и выцветания',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: 'Clock',
    title: 'Монтаж за 1-3 дня',
    description: 'Быстрая установка опытной бригадой без нарушения графика строительства',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: 'Droplets',
    title: 'Герметичность 100%',
    description: 'Монтаж по ГОСТу исключает продувание, промерзание и конденсат',
    color: 'from-indigo-500 to-blue-500'
  },
  {
    icon: 'Award',
    title: 'Гарантия 10 лет',
    description: 'Официальная гарантия производителя и сервисное обслуживание',
    color: 'from-yellow-500 to-orange-500'
  }
];

export default function WhyUs() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>(new Array(benefits.length).fill(false));
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = cardRefs.current.indexOf(entry.target as HTMLDivElement);
          if (index !== -1 && entry.isIntersecting) {
            setVisibleCards((prev) => {
              const newVisible = [...prev];
              newVisible[index] = true;
              return newVisible;
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
          Почему выбирают нас
        </h2>
        <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
          6 причин доверить остекление вашего дома профессионалам
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                visibleCards[index] ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-6 shadow-lg`}>
                  <Icon name={benefit.icon as any} size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}