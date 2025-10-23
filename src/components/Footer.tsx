import Icon from '@/components/ui/icon';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-primary to-primary/90 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="https://cdn.poehali.dev/files/9dca37a2-586a-4580-a488-216eafd269c0.jpeg" 
                alt="Оконный Порт" 
                className="h-12 w-12 rounded-lg"
              />
              <span className="text-xl font-bold">Оконный Порт</span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Качественные окна Rehau с монтажом по ГОСТу. Более 500 довольных клиентов во Владивостоке.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Контакты</h4>
            <div className="space-y-3">
              <a 
                href="tel:+79242348920" 
                className="group flex items-center gap-2 text-white/80 hover:text-white transition-colors"
              >
                <div className="transition-all duration-300 group-hover:rotate-20 group-hover:brightness-125">
                  <Icon name="Phone" size={18} />
                </div>
                8-924-234-89-20
              </a>
              <a 
                href="https://t.me/Keranos1st" 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-white/80 hover:text-white transition-colors"
              >
                <div className="transition-all duration-300 group-hover:rotate-20 group-hover:brightness-125">
                  <Icon name="Send" size={18} />
                </div>
                Telegram
              </a>
              <div className="flex items-start gap-2 text-white/80">
                <div className="mt-1">
                  <Icon name="MapPin" size={18} />
                </div>
                <span className="text-sm">г. Владивосток, Приморский край</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Услуги</h4>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>• Окна Rehau</li>
              <li>• Монтаж по ГОСТу</li>
              <li>• Бесплатный замер</li>
              <li>• Гарантия 10 лет</li>
              <li>• Остекление домов</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Документы</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="/privacy-policy.html" 
                  target="_blank"
                  className="text-white/80 hover:text-white transition-colors underline"
                >
                  Политика конфиденциальности
                </a>
              </li>
              <li>
                <a 
                  href="/terms-of-service.html" 
                  target="_blank"
                  className="text-white/80 hover:text-white transition-colors underline"
                >
                  Договор оферты
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>© {currentYear} Оконный Порт. Все права защищены.</p>
            <p>Окна Rehau — немецкое качество для вашего дома</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
