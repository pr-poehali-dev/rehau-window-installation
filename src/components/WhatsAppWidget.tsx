import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function TelegramWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const telegramUsername = 'Keranos1st';

  const handleClick = () => {
    const url = `https://t.me/${telegramUsername}`;
    window.open(url, '_blank');
  };

  return (
    <>
      <div className="fixed bottom-8 left-8 z-50">
        {isOpen && (
          <div className="mb-4 bg-white rounded-2xl shadow-2xl p-6 max-w-xs animate-scale-in">
            <div className="group flex items-start gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:rotate-20 group-hover:brightness-125">
                <Icon name="Send" size={24} className="text-white" />
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-1">Онлайн-консультант</h4>
                <p className="text-sm text-muted-foreground">
                  Обычно отвечаем в течение 5 минут
                </p>
              </div>
            </div>
            <Button
              onClick={handleClick}
              className="group w-full bg-blue-500 hover:bg-blue-600 rounded-full font-semibold"
            >
              <div className="inline-block transition-all duration-300 group-hover:rotate-20 group-hover:brightness-125 mr-2">
                <Icon name="Send" size={20} />
              </div>
              Написать в Telegram
            </Button>
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
            >
              ✕
            </button>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group w-16 h-16 bg-blue-500 hover:bg-blue-600 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 animate-shake-bell"
        >
          <div className="transition-all duration-300 group-hover:rotate-20 group-hover:brightness-125">
            <Icon name="Send" size={32} className="text-white" />
          </div>
        </button>
      </div>
    </>
  );
}