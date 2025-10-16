import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isSticky ? 'bg-white shadow-lg py-3' : 'bg-white/95 backdrop-blur-sm py-5'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">Геометрия Уюта</div>
          
          <nav className="hidden md:flex gap-6">
            <button onClick={() => scrollToSection('advantages')} className="text-sm hover:text-accent transition-colors">
              Преимущества
            </button>
            <button onClick={() => scrollToSection('process')} className="text-sm hover:text-accent transition-colors">
              Процесс
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="text-sm hover:text-accent transition-colors">
              Примеры
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-sm hover:text-accent transition-colors">
              Цены
            </button>
            <button onClick={() => scrollToSection('reviews')} className="text-sm hover:text-accent transition-colors">
              Отзывы
            </button>
          </nav>
          
          <div className="flex items-center gap-4">
            <a href="tel:+74232000000" className="hidden md:flex items-center gap-2 text-lg font-semibold text-primary">
              <Icon name="Phone" size={20} />
              +7 (423) 200-00-00
            </a>
            <Button onClick={() => scrollToSection('cta')} className="bg-accent hover:bg-accent/90 animate-pulse-slow">
              Заказать замер
            </Button>
          </div>
        </div>
      </header>

      <section 
        className="relative min-h-screen flex items-center pt-20"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.7), rgba(30, 58, 138, 0.85)), url('https://cdn.poehali.dev/projects/efbbbec9-9cfd-49b4-9ecb-fb6b9f63b213/files/6a717373-897f-411e-8eb8-9222ba76e0ac.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center text-white animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Окна Rehau для вашего дома мечты: тепло, тишина и уют на 50 лет
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Немецкое качество, безупречный монтаж по ГОСТу и честная цена. Более 500 загородных домов во Владивостоке доверили нам свой комфорт
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('cta')}
                className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 h-auto"
              >
                Вызвать замерщика бесплатно
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Icon name="CalendarCheck" size={32} className="text-accent" />
                <span className="text-left">Выезд в день обращения</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Icon name="Clock" size={32} className="text-accent" />
                <span className="text-left">Расчёт сметы за 15 минут</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Icon name="Shield" size={32} className="text-accent" />
                <span className="text-left">Гарантия 10 лет</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white" id="advantages">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Вы строите дом мечты... Но одна ошибка с окнами может всё испортить
              </h2>
              <p className="text-lg mb-4 text-muted-foreground">
                Вы вложили миллионы в фундамент, стены, крышу. Но большинство семей сталкивается с неприятным открытием: дешёвые или неправильно установленные окна превращают мечту в источник постоянного стресса — сквозняки, промерзание, высокие счета за отопление.
              </p>
              <p className="text-lg font-semibold text-primary">
                Вы создаёте дом на десятилетия. Каждое решение критически важно.
              </p>
              <div className="mt-6 p-4 bg-muted rounded-lg border-l-4 border-accent">
                <p className="text-sm italic">
                  «По данным экспертов, неправильный выбор или монтаж окон ведёт к 40% теплопотерь в доме»
                </p>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/efbbbec9-9cfd-49b4-9ecb-fb6b9f63b213/files/880f32ee-437e-48e6-9f54-4fe7c0736daf.jpg"
                alt="Установка окон" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/efbbbec9-9cfd-49b4-9ecb-fb6b9f63b213/files/19914709-a12e-40b8-aca4-0b73738fd355.jpg"
                alt="До и после" 
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div className="order-1 md:order-2 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Хорошая новость: правильные окна решают все эти проблемы навсегда
              </h2>
              <p className="text-lg mb-4 text-muted-foreground">
                Представьте абсолютную тишину и уют даже в приморский мороз — это реальность с окнами Rehau, установленными по ГОСТу.
              </p>
              <p className="text-lg mb-6 text-muted-foreground">
                Клиенты экономят до 30% на отоплении, получают безопасность для детей и стильный вид дома.
              </p>
              <div className="p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
                <p className="text-sm italic">
                  «Окна Rehau – лучшее вложение. Зимой тепло, счета ниже» — Михаил Соколов, Владивосток
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary to-primary/90 text-white" id="process">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            От звонка до новоселья: как проходит работа
          </h2>
          
          <div className="max-w-4xl mx-auto">
            {[
              { icon: 'Phone', title: 'Вы оставляете заявку', desc: 'Мы перезвоним за 5 минут' },
              { icon: 'Ruler', title: 'Бесплатный выезд замерщика', desc: 'На объект в удобное время' },
              { icon: 'FileCheck', title: 'Заключение договора', desc: 'С чёткими сроками и фиксированной ценой' },
              { icon: 'Factory', title: 'Изготовление на заводе Rehau', desc: 'Бесплатная доставка на объект' },
              { icon: 'Wrench', title: 'Монтаж под ключ', desc: 'Гарантия, послепродажная поддержка' },
            ].map((step, index) => (
              <div key={index} className="flex gap-6 mb-8 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Icon name={step.icon as any} size={24} className="text-accent" />
                    <h3 className="text-xl font-bold">{step.title}</h3>
                  </div>
                  <p className="text-white/80">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white" id="portfolio">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
            Более 500 домов во Владивостоке доверили нам свой комфорт
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card key={item} className="overflow-hidden hover:shadow-xl transition-shadow animate-scale-in">
                <img 
                  src="https://cdn.poehali.dev/projects/efbbbec9-9cfd-49b4-9ecb-fb6b9f63b213/files/6a717373-897f-411e-8eb8-9222ba76e0ac.jpg"
                  alt={`Проект ${item}`}
                  className="w-full h-64 object-cover"
                />
                <CardContent className="p-4">
                  <p className="font-semibold">Коттедж в {item % 2 === 0 ? 'Соловей-Ключ' : 'Штыково'}</p>
                  <p className="text-sm text-muted-foreground">Установлено {5 + item} окон Rehau</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted" id="pricing">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
            Честные цены без скрытых доплат
          </h2>
          
          <div className="max-w-5xl mx-auto mb-12">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Тип окна</th>
                      <th className="px-6 py-4 text-left">Профиль</th>
                      <th className="px-6 py-4 text-left">Размер</th>
                      <th className="px-6 py-4 text-right">Цена</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { type: 'Глухое окно', profile: 'Blitz 60', size: '1200×1400', price: '12 500' },
                      { type: 'Поворотно-откидное', profile: 'Blitz 60', size: '1200×1400', price: '18 900' },
                      { type: 'Двустворчатое', profile: 'Grazio 70', size: '1500×1400', price: '24 500' },
                      { type: 'Панорамное', profile: 'Delight 70', size: '2500×2200', price: '85 000' },
                    ].map((item, index) => (
                      <tr key={index} className="border-b hover:bg-muted/50 transition-colors">
                        <td className="px-6 py-4">{item.type}</td>
                        <td className="px-6 py-4 text-muted-foreground">{item.profile}</td>
                        <td className="px-6 py-4 text-muted-foreground">{item.size} мм</td>
                        <td className="px-6 py-4 text-right font-bold text-primary">{item.price} ₽</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-primary text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">В стоимость включено:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    'Профиль Rehau (оригинал)',
                    'Фурнитура Siegenia',
                    'Энергосберегающий стеклопакет',
                    'Доставка на объект',
                    'Монтаж по ГОСТу',
                    'Откосы и отливы',
                    'Вывоз мусора',
                    'Гарантия 10 лет'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Icon name="Check" size={20} className="text-accent flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-accent rounded-lg">
                  <p className="text-lg font-bold">🎁 Специальное предложение до 31.10.2025:</p>
                  <p>Остекление всего дома — скидка 15%. Заказ от 10 окон — москитные сетки в подарок!</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white" id="reviews">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
            Что говорят о нас владельцы загородных домов
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { name: 'Анна и Дмитрий Ковалёвы', area: 'Трудовое', text: 'Договор, фиксированная цена, быстрая установка. Зимой при -18°C дома тепло и тихо. Рекомендуем!' },
              { name: 'Сергей Михайлов', area: 'Штыково', text: 'Заказывали окна для нового дома. Замерщик приехал в тот же день, всё объяснил. Монтаж выполнили за 2 дня.' },
              { name: 'Елена Волкова', area: 'Соловей-Ключ', text: 'Счета за отопление снизились на треть! Окна не потеют, фурнитура работает идеально. Спасибо!' }
            ].map((review, index) => (
              <Card key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="mb-4 text-muted-foreground">{review.text}</p>
                  <div className="font-semibold">{review.name}</div>
                  <div className="text-sm text-muted-foreground">{review.area}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center gap-8 mt-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">4.9</div>
              <div className="text-sm text-muted-foreground">2GIS</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">4.8</div>
              <div className="text-sm text-muted-foreground">Google</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Ответы на частые вопросы
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              {[
                { q: 'Можно ли устанавливать окна Rehau зимой?', a: 'Да, мы используем специальную монтажную пену и оборудование для зимнего монтажа. Установка возможна при температуре до -15°C.' },
                { q: 'Сколько времени занимает изготовление?', a: 'От момента заключения договора до готовности окон проходит 7-10 рабочих дней. Установка занимает 1-3 дня в зависимости от объёма.' },
                { q: 'Что делать, если дом ещё не достроен?', a: 'Мы можем провести предварительные замеры и установить окна в удобное для вас время на любом этапе строительства.' },
                { q: 'Какой профиль выбрать для загородного дома?', a: 'Рекомендуем минимум 5-камерный профиль Grazio 70 или Delight 70 для максимальной теплоизоляции и звукоизоляции.' },
                { q: 'Входит ли демонтаж старых окон в стоимость?', a: 'Да, для замены окон демонтаж входит в стоимость. Для новостроек демонтаж не требуется.' }
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-semibold">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-accent to-accent/90 text-white" id="cta">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Закажите бесплатный замер — и получите честный расчёт за 15 минут
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Специалист приедет, проведёт замеры, рассчитает стоимость и ответит на вопросы. Никаких обязательств.
            </p>
            
            <Card className="bg-white text-foreground">
              <CardContent className="p-8">
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="name">Имя</Label>
                    <Input id="name" placeholder="Как к вам обращаться?" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Телефон</Label>
                    <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="address">Адрес объекта</Label>
                    <Input id="address" placeholder="Где находится ваш дом?" className="mt-1" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="bonus" />
                    <label htmlFor="bonus" className="text-sm">
                      Получить дизайн-проект в подарок
                    </label>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Checkbox id="privacy" />
                    <label htmlFor="privacy" className="text-xs text-muted-foreground">
                      Я принимаю условия политики конфиденциальности
                    </label>
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-white text-lg py-6 h-auto">
                    Заказать бесплатный замер
                  </Button>
                </form>
                
                <div className="mt-6 space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center justify-center gap-2">
                    <Icon name="Clock" size={16} />
                    <span>Ответим в течение 5 минут</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Icon name="Car" size={16} />
                    <span>Выезд в день обращения</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Icon name="Wallet" size={16} />
                    <span>Расчёт стоимости бесплатно</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Контакты</h3>
              <div className="space-y-2 text-white/80">
                <p className="font-semibold text-white">Геометрия Уюта</p>
                <p>г. Владивосток</p>
                <p>Тел.: +7 (423) 200-00-00</p>
                <p>Email: info@geometriya-uyuta.ru</p>
                <p>Режим работы: Пн-Вс 9:00-20:00</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Быстрые ссылки</h3>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('advantages')} className="block text-white/80 hover:text-white transition-colors">
                  О компании
                </button>
                <button onClick={() => scrollToSection('portfolio')} className="block text-white/80 hover:text-white transition-colors">
                  Наши работы
                </button>
                <button onClick={() => scrollToSection('pricing')} className="block text-white/80 hover:text-white transition-colors">
                  Цены
                </button>
                <button onClick={() => scrollToSection('reviews')} className="block text-white/80 hover:text-white transition-colors">
                  Отзывы
                </button>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Социальные сети</h3>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                  <Icon name="MessageCircle" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                  <Icon name="Send" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                  <Icon name="Phone" size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8 text-center text-white/60">
            <p>© 2025 «Геометрия Уюта». Все права защищены.</p>
          </div>
        </div>
      </footer>

      <button
        onClick={() => scrollToSection('cta')}
        className="fixed bottom-6 right-6 bg-accent hover:bg-accent/90 text-white rounded-full p-4 shadow-2xl z-40 animate-pulse-slow md:hidden"
      >
        <Icon name="Phone" size={24} />
      </button>
    </div>
  );
}
