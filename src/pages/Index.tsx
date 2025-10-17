import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';

export default function Index() {
  const [isSticky, setIsSticky] = useState(false);
  const [currentH1, setCurrentH1] = useState(0);

  const h1Variants = [
    "Окна Rehau для вашего дома мечты: тепло, тишина и уют на 50 лет",
    "Превратите стройку в дом: немецкие окна Rehau с установкой за 3 дня и гарантией 10 лет",
    "Строите дом во Владивостоке? Защитите семью от холода и ветра премиальными окнами Rehau"
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentH1((prev) => (prev + 1) % h1Variants.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isSticky ? 'bg-white shadow-lg py-2' : 'bg-white/98 backdrop-blur-sm py-4'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="https://cdn.poehali.dev/files/b9d273ab-2803-4c62-a0d2-833dde27ddb3.png" alt="Окна для Дома" className="h-16 w-16 opacity-80 blur-[0.5px]" />
            <span className="text-2xl font-bold text-primary">Окна для Дома</span>
          </div>
          
          <nav className="hidden md:flex gap-6">
            <button onClick={() => scrollToSection('advantages')} className="text-sm font-medium hover:text-accent transition-colors">
              Преимущества
            </button>
            <button onClick={() => scrollToSection('process')} className="text-sm font-medium hover:text-accent transition-colors">
              Процесс
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="text-sm font-medium hover:text-accent transition-colors">
              Примеры
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-sm font-medium hover:text-accent transition-colors">
              Цены
            </button>
            <button onClick={() => scrollToSection('reviews')} className="text-sm font-medium hover:text-accent transition-colors">
              Отзывы
            </button>
          </nav>
          
          <div className="flex items-center gap-4">
            <a href="tel:+74232000000" className="hidden lg:flex items-center gap-2 text-lg font-semibold text-primary">
              <Icon name="Phone" size={20} />
              +7 (423) 200-00-00
            </a>
            <Button onClick={() => scrollToSection('cta')} className="bg-accent hover:bg-accent/90 rounded-full px-6">
              Заказать замер
            </Button>
          </div>
        </div>
      </header>

      <section 
        className="relative min-h-screen flex items-center pt-20"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)), url('https://cdn.poehali.dev/projects/efbbbec9-9cfd-49b4-9ecb-fb6b9f63b213/files/6a717373-897f-411e-8eb8-9222ba76e0ac.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in" key={currentH1}>
              {h1Variants[currentH1]}
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-white/95 animate-fade-in">
              Немецкое качество, безупречный монтаж по ГОСТу и честная цена. Более 500 загородных домов во Владивостоке доверили нам свой комфорт
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-scale-in">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('cta')}
                className="bg-accent hover:bg-accent/90 text-white text-lg px-10 py-7 h-auto rounded-full shadow-2xl"
              >
                Вызвать замерщика бесплатно
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="flex items-center gap-3 bg-white/15 backdrop-blur-md rounded-2xl p-5 hover:bg-white/20 transition-all">
                <Icon name="CalendarCheck" size={32} className="text-accent" />
                <span className="text-left text-sm font-medium">Выезд в день обращения</span>
              </div>
              <div className="flex items-center gap-3 bg-white/15 backdrop-blur-md rounded-2xl p-5 hover:bg-white/20 transition-all">
                <Icon name="Clock" size={32} className="text-accent" />
                <span className="text-left text-sm font-medium">Расчёт сметы за 15 минут</span>
              </div>
              <div className="flex items-center gap-3 bg-white/15 backdrop-blur-md rounded-2xl p-5 hover:bg-white/20 transition-all">
                <Icon name="Shield" size={32} className="text-accent" />
                <span className="text-left text-sm font-medium">Гарантия 10 лет</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white" id="advantages">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-red-100 text-red-700 hover:bg-red-100">Проблема</Badge>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Вы строите дом мечты... Но одна ошибка с окнами может всё испортить
              </h2>
              <p className="text-lg mb-4 text-muted-foreground leading-relaxed">
                Вы вложили миллионы в фундамент, стены, крышу. Но большинство семей сталкивается с неприятным открытием: дешёвые или неправильно установленные окна превращают мечту в источник постоянного стресса — сквозняки, промерзание, высокие счета за отопление.
              </p>
              <p className="text-xl font-semibold text-primary mb-6">
                Вы создаёте дом на десятилетия. Каждое решение критически важно.
              </p>
              <div className="p-5 bg-red-50 rounded-xl border-l-4 border-red-500">
                <p className="text-sm italic text-red-900">
                  «По данным экспертов, неправильный выбор или монтаж окон ведёт к 40% теплопотерь в доме»
                </p>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/efbbbec9-9cfd-49b4-9ecb-fb6b9f63b213/files/880f32ee-437e-48e6-9f54-4fe7c0736daf.jpg"
                alt="Установка окон" 
                className="rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div className="order-2 md:order-1 animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/efbbbec9-9cfd-49b4-9ecb-fb6b9f63b213/files/19914709-a12e-40b8-aca4-0b73738fd355.jpg"
                alt="Последствия экономии" 
                className="rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="order-1 md:order-2 animate-fade-in">
              <Badge className="mb-4 bg-orange-100 text-orange-700 hover:bg-orange-100">Реальная история</Badge>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Сэкономили 100 000₽ на окнах? Приготовьтесь потерять в 5 раз больше
              </h2>
              <p className="text-lg mb-4 text-muted-foreground leading-relaxed">
                Семья из Артёма заказала окна у непроверенной компании, сэкономив 120 тыс руб. Через полгода — промерзание углов, ремонт, замена окон, перерасход <span className="font-bold text-red-600">580 тыс руб</span> и три месяца стресса.
              </p>
              <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
                Здоровье семьи под угрозой, счета за отопление растут на 15–25 тыс руб за сезон, нервы и время — потрачены впустую.
              </p>
              <div className="p-5 bg-orange-50 rounded-xl border-l-4 border-orange-500">
                <p className="text-sm italic text-orange-900">
                  «67% владельцев домов, выбравших бюджетные окна, меняют их в первые 5 лет эксплуатации»
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-green-100 text-green-700 hover:bg-green-100">Решение</Badge>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Хорошая новость: правильные окна решают все эти проблемы навсегда
              </h2>
              <p className="text-lg mb-4 text-muted-foreground leading-relaxed">
                Представьте абсолютную тишину и уют даже в приморский мороз — это реальность с окнами Rehau, установленными по ГОСТу.
              </p>
              <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
                Клиенты экономят до 30% на отоплении, получают безопасность для детей и стильный вид дома.
              </p>
              <div className="p-5 bg-green-50 rounded-xl border-l-4 border-green-500">
                <p className="text-sm italic text-green-900">
                  «Окна Rehau – лучшее вложение. Зимой тепло, счета ниже» — Михаил Соколов, Владивосток
                </p>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/efbbbec9-9cfd-49b4-9ecb-fb6b9f63b213/files/6a717373-897f-411e-8eb8-9222ba76e0ac.jpg"
                alt="Счастливая семья" 
                className="rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          <Card className="bg-gradient-to-br from-primary to-primary/90 text-white border-0 shadow-2xl">
            <CardContent className="p-10 md:p-16">
              <Badge className="mb-6 bg-premium text-premium-foreground hover:bg-premium text-lg px-4 py-1">Premium</Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                «Геометрия Уюта» + Rehau = формула идеального дома
              </h2>
              <p className="text-xl mb-6 text-white/95 leading-relaxed">
                Немецкий бренд с 70-летним опытом, монтаж по ГОСТу, собственная бригада, честный подход. Более 500 домов и 98% довольных клиентов.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-5xl font-bold text-accent mb-2">12</div>
                  <div className="text-white/80">лет работы</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-accent mb-2">500+</div>
                  <div className="text-white/80">объектов</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-accent mb-2">0</div>
                  <div className="text-white/80">судебных споров</div>
                </div>
              </div>
              <p className="text-lg text-white/90">
                Бесплатный выезд замерщика, честная смета, гарантия до 10 лет.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-primary via-primary/95 to-primary text-white" id="process">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-20">
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
              <div key={index} className="flex gap-8 mb-10 animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-xl">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-1 bg-white/15 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all">
                  <div className="flex items-center gap-4 mb-3">
                    <Icon name={step.icon as any} size={28} className="text-accent" />
                    <h3 className="text-2xl font-bold">{step.title}</h3>
                  </div>
                  <p className="text-white/85 text-lg">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white" id="portfolio">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
            Более 500 домов во Владивостоке доверили нам свой комфорт
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            Каждый проект — это история семьи, которая получила дом мечты
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card key={item} className="overflow-hidden hover:shadow-2xl transition-all duration-300 group border-0 animate-scale-in">
                <div className="relative overflow-hidden">
                  <img 
                    src="https://cdn.poehali.dev/projects/efbbbec9-9cfd-49b4-9ecb-fb6b9f63b213/files/6a717373-897f-411e-8eb8-9222ba76e0ac.jpg"
                    alt={`Проект ${item}`}
                    className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-accent text-white">Rehau</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="font-bold text-lg mb-1">Коттедж в {item % 2 === 0 ? 'Соловей-Ключ' : 'Штыково'}</p>
                  <p className="text-muted-foreground">Установлено {5 + item} окон Rehau</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted" id="pricing">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
            Честные цены без скрытых доплат
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-16">
            Все расчёты прозрачны — вы знаете, за что платите
          </p>
          
          <div className="max-w-5xl mx-auto mb-16">
            <Card className="shadow-2xl border-0 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="px-6 py-5 text-left font-bold">Тип окна</th>
                      <th className="px-6 py-5 text-left font-bold">Профиль</th>
                      <th className="px-6 py-5 text-left font-bold">Размер</th>
                      <th className="px-6 py-5 text-right font-bold">Цена</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {[
                      { type: 'Глухое окно', profile: 'Blitz 60', size: '1200×1400', price: '12 500' },
                      { type: 'Поворотно-откидное', profile: 'Blitz 60', size: '1200×1400', price: '18 900' },
                      { type: 'Двустворчатое', profile: 'Grazio 70', size: '1500×1400', price: '24 500' },
                      { type: 'Панорамное', profile: 'Delight 70', size: '2500×2200', price: '85 000' },
                    ].map((item, index) => (
                      <tr key={index} className="border-b hover:bg-muted/30 transition-colors">
                        <td className="px-6 py-5 font-medium">{item.type}</td>
                        <td className="px-6 py-5 text-muted-foreground">{item.profile}</td>
                        <td className="px-6 py-5 text-muted-foreground">{item.size} мм</td>
                        <td className="px-6 py-5 text-right font-bold text-primary text-lg">{item.price} ₽</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-primary text-white border-0 shadow-2xl">
              <CardContent className="p-10">
                <h3 className="text-3xl font-bold mb-6">В стоимость включено:</h3>
                <div className="grid md:grid-cols-2 gap-5 mb-8">
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
                    <div key={index} className="flex items-center gap-3">
                      <Icon name="Check" size={24} className="text-accent flex-shrink-0" />
                      <span className="text-lg">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="p-6 bg-accent rounded-2xl">
                  <p className="text-xl font-bold mb-2">🎁 Специальное предложение до 31.10.2025:</p>
                  <p className="text-lg">Остекление всего дома — скидка 15%. Заказ от 10 окон — москитные сетки в подарок!</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white" id="guarantees">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
            Ваша безопасность — наша репутация
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-16">
            Мы берём на себя все риски и гарантируем результат
          </p>

          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            {[
              { icon: 'FileText', title: 'Официальный договор', desc: 'Юридическая защита клиента' },
              { icon: 'ShieldCheck', title: 'Страхование ответственности', desc: 'До 5 млн рублей' },
              { icon: 'CalendarClock', title: 'Соблюдение сроков', desc: 'Штраф 1% в день за просрочку' },
              { icon: 'Wallet', title: 'Поэтапная оплата', desc: 'Без предоплаты за монтаж' },
              { icon: 'Wrench', title: 'Бесплатное обслуживание', desc: 'В первый год эксплуатации' },
              { icon: 'Headset', title: 'Техподдержка 24/7', desc: 'Ответ в течение часа' }
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-xl transition-all border-0 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={item.icon as any} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
            До и После: Результат наших работ
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-16">
            Смотрите разницу своими глазами
          </p>

          <BeforeAfterSlider />
        </div>
      </section>

      <section className="py-24 bg-white" id="reviews">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
            Что говорят о нас владельцы загородных домов
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-16">
            Реальные отзывы реальных людей
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {[
              { name: 'Анна и Дмитрий Ковалёвы', area: 'Трудовое', text: 'Договор, фиксированная цена, быстрая установка. Зимой при -18°C дома тепло и тихо. Рекомендуем!', photo: 'https://cdn.poehali.dev/projects/efbbbec9-9cfd-49b4-9ecb-fb6b9f63b213/files/65495790-fa30-4ea7-a2c2-baed5d509437.jpg' },
              { name: 'Сергей Михайлов', area: 'Штыково', text: 'Заказывали окна для нового дома. Замерщик приехал в тот же день, всё объяснил. Монтаж выполнили за 2 дня.', photo: 'https://cdn.poehali.dev/projects/efbbbec9-9cfd-49b4-9ecb-fb6b9f63b213/files/423c0a75-bfeb-43e8-8939-20e02e8a94ee.jpg' },
              { name: 'Елена Волкова', area: 'Соловей-Ключ', text: 'Счета за отопление снизились на треть! Окна не потеют, фурнитура работает идеально. Спасибо!', photo: 'https://cdn.poehali.dev/projects/efbbbec9-9cfd-49b4-9ecb-fb6b9f63b213/files/da3f41cf-5303-429f-9362-7c4bbd5ddbee.jpg' }
            ].map((review, index) => (
              <Card key={index} className="animate-fade-in border-0 shadow-lg hover:shadow-xl transition-all" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="mb-6 text-muted-foreground leading-relaxed">{review.text}</p>
                  <div className="flex items-center gap-4">
                    <img 
                      src={review.photo} 
                      alt={review.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-bold">{review.name}</div>
                      <div className="text-sm text-muted-foreground">{review.area}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center gap-12">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">4.9</div>
              <div className="flex gap-1 justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} name="Star" size={20} className="fill-accent text-accent" />
                ))}
              </div>
              <div className="text-muted-foreground">2GIS</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">4.8</div>
              <div className="flex gap-1 justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} name="Star" size={20} className="fill-accent text-accent" />
                ))}
              </div>
              <div className="text-muted-foreground">Google</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Ответы на частые вопросы
          </h2>
          <p className="text-lg text-center text-muted-foreground mb-12">
            Всё, что вы хотели знать об установке окон Rehau
          </p>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              {[
                { q: 'Можно ли устанавливать окна Rehau зимой?', a: 'Да, мы используем специальную монтажную пену и оборудование для зимнего монтажа. Установка возможна при температуре до -15°C.' },
                { q: 'Сколько времени занимает изготовление?', a: 'От момента заключения договора до готовности окон проходит 7-10 рабочих дней. Установка занимает 1-3 дня в зависимости от объёма.' },
                { q: 'Что делать, если дом ещё не достроен?', a: 'Мы можем провести предварительные замеры и установить окна в удобное для вас время на любом этапе строительства.' },
                { q: 'Какой профиль выбрать для загородного дома?', a: 'Рекомендуем минимум 5-камерный профиль Grazio 70 или Delight 70 для максимальной теплоизоляции и звукоизоляции.' },
                { q: 'Входит ли демонтаж старых окон в стоимость?', a: 'Да, для замены окон демонтаж входит в стоимость. Для новостроек демонтаж не требуется.' }
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-border">
                  <AccordionTrigger className="text-left font-semibold text-lg hover:text-primary py-6">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base pb-6">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-accent via-accent/95 to-accent/90 text-white" id="cta">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Закажите бесплатный замер — и получите честный расчёт за 15 минут
            </h2>
            <p className="text-xl mb-10 text-white/95">
              Специалист приедет, проведёт замеры, рассчитает стоимость и ответит на вопросы. Никаких обязательств.
            </p>
            
            <Card className="bg-white text-foreground border-0 shadow-2xl">
              <CardContent className="p-10">
                <form className="space-y-5">
                  <div className="text-left">
                    <Label htmlFor="name" className="text-base font-semibold">Имя</Label>
                    <Input id="name" placeholder="Как к вам обращаться?" className="mt-2 h-12 text-base" />
                  </div>
                  <div className="text-left">
                    <Label htmlFor="phone" className="text-base font-semibold">Телефон</Label>
                    <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" className="mt-2 h-12 text-base" />
                  </div>
                  <div className="text-left">
                    <Label htmlFor="address" className="text-base font-semibold">Адрес объекта</Label>
                    <Input id="address" placeholder="Где находится ваш дом?" className="mt-2 h-12 text-base" />
                  </div>
                  <div className="flex items-center space-x-3 text-left">
                    <Checkbox id="bonus" />
                    <label htmlFor="bonus" className="text-base font-medium cursor-pointer">
                      Получить дизайн-проект в подарок
                    </label>
                  </div>
                  <div className="flex items-start space-x-3 text-left">
                    <Checkbox id="privacy" />
                    <label htmlFor="privacy" className="text-sm text-muted-foreground cursor-pointer">
                      Я принимаю условия политики конфиденциальности
                    </label>
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-white text-lg py-7 h-auto rounded-full shadow-xl">
                    Заказать бесплатный замер
                  </Button>
                </form>
                
                <div className="mt-8 space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center justify-center gap-2">
                    <Icon name="Clock" size={18} />
                    <span>Ответим в течение 5 минут</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Icon name="Car" size={18} />
                    <span>Выезд в день обращения</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Icon name="Wallet" size={18} />
                    <span>Расчёт стоимости бесплатно</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Всё ещё сомневаетесь? Получите бесплатную консультацию эксперта
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Оставьте заявку — эксперт приедет, ответит на вопросы о профильных решениях и стоимости
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Input placeholder="Ваше имя" className="h-14 text-base bg-white/10 border-white/20 text-white placeholder:text-white/60" />
              <Input type="tel" placeholder="+7 (___) ___-__-__" className="h-14 text-base bg-white/10 border-white/20 text-white placeholder:text-white/60" />
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 h-14 px-8 rounded-full font-semibold">
                Получить консультацию
              </Button>
            </div>
            
            <p className="text-sm text-accent font-semibold animate-pulse-slow">
              ⏰ Осталось 3 места на бесплатный выезд на этой неделе
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-accent">Окна для Дома</h3>
              <p className="text-white/70 mb-4">
                Немецкое качество окон для вашего дома
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Контакты</h3>
              <div className="space-y-3 text-white/80 text-sm">
                <p>г. Владивосток</p>
                <p className="font-semibold text-white">+7 (423) 200-00-00</p>
                <p>info@geometriya-uyuta.ru</p>
                <p>Режим: Пн-Вс 9:00-20:00</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Навигация</h3>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('advantages')} className="block text-white/80 hover:text-white transition-colors text-sm">
                  О компании
                </button>
                <button onClick={() => scrollToSection('portfolio')} className="block text-white/80 hover:text-white transition-colors text-sm">
                  Наши работы
                </button>
                <button onClick={() => scrollToSection('pricing')} className="block text-white/80 hover:text-white transition-colors text-sm">
                  Цены
                </button>
                <button onClick={() => scrollToSection('reviews')} className="block text-white/80 hover:text-white transition-colors text-sm">
                  Отзывы
                </button>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Социальные сети</h3>
              <div className="flex gap-3 mb-6">
                <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                  <Icon name="MessageCircle" size={22} />
                </a>
                <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                  <Icon name="Send" size={22} />
                </a>
                <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                  <Icon name="Phone" size={22} />
                </a>
              </div>
              <div className="mt-4">
                <Label htmlFor="subscribe" className="text-sm mb-2 block">Подписка на новости</Label>
                <div className="flex gap-2">
                  <Input id="subscribe" type="email" placeholder="Email" className="h-10 bg-white/10 border-white/20 text-white placeholder:text-white/60 text-sm" />
                  <Button size="sm" className="bg-accent hover:bg-accent/90 h-10 px-4">
                    <Icon name="Send" size={16} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8 text-center text-white/60 text-sm">
            <p>© 2025 «Геометрия Уюта». Все права защищены.</p>
          </div>
        </div>
      </footer>

      <button
        onClick={() => scrollToSection('cta')}
        className="fixed bottom-6 right-6 bg-accent hover:bg-accent/90 text-white rounded-full p-5 shadow-2xl z-40 animate-pulse-slow md:hidden"
      >
        <Icon name="Phone" size={28} />
      </button>
    </div>
  );
}