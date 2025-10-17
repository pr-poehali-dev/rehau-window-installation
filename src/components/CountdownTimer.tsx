import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function CountdownTimer() {
  const calculateTimeLeft = () => {
    const now = new Date();
    const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59);
    const difference = endOfMonth.getTime() - now.getTime();

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeBlock = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="bg-white text-accent font-bold text-3xl md:text-5xl rounded-xl p-4 md:p-6 shadow-lg min-w-[70px] md:min-w-[100px]">
        {String(value).padStart(2, '0')}
      </div>
      <span className="text-white/90 text-sm md:text-base mt-2 font-medium">{label}</span>
    </div>
  );

  return (
    <Card className="bg-gradient-to-r from-red-600 to-red-500 border-0 shadow-2xl overflow-hidden">
      <div className="p-6 md:p-10 relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
        
        <div className="relative z-10">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Zap" size={32} className="text-yellow-300" />
            <h3 className="text-2xl md:text-4xl font-bold text-white text-center">
              Специальное предложение!
            </h3>
          </div>
          
          <p className="text-center text-white text-lg md:text-2xl mb-6 font-semibold">
            Скидка 15% на все окна до конца месяца
          </p>

          <div className="flex gap-3 md:gap-6 justify-center mb-6">
            <TimeBlock value={timeLeft.days} label="дней" />
            <TimeBlock value={timeLeft.hours} label="часов" />
            <TimeBlock value={timeLeft.minutes} label="минут" />
            <TimeBlock value={timeLeft.seconds} label="секунд" />
          </div>

          <p className="text-center text-white/80 text-sm md:text-base">
            ⚡ Успейте заказать замер по акционной цене
          </p>
        </div>
      </div>
    </Card>
  );
}
