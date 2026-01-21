import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

import LeadForm from '@/components/LeadForm';
import CountdownTimer from '@/components/CountdownTimer';
import SavingsCalculator from '@/components/SavingsCalculator';
import WhyUs from '@/components/WhyUs';
import TelegramWidget from '@/components/WhatsAppWidget';

export default function Index() {
  const [isSticky, setIsSticky] = useState(false);
  const [currentH1, setCurrentH1] = useState(0);
  const [currentReview, setCurrentReview] = useState(0);
  const [currentPortfolio, setCurrentPortfolio] = useState(0);

  const h1Variants = [
    "Сохраняйте тепло и экономьте до 40% на отоплении",
    "Забудьте о сквозняках и промерзании окон навсегда",
    "Комфорт вашей семьи начинается с правильных окон"
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
    <div className="min-h-screen bg-background relative">
      {isSticky && (
        <Button
          size="lg"
          onClick={() => scrollToSection('cta')}
          className="group fixed bottom-8 right-8 z-50 bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 h-auto rounded-full shadow-2xl animate-bounce-slow transform hover:scale-105 transition-all duration-300 font-bold md:flex items-center gap-2 hidden"
        >
          <div className="transition-all duration-300 group-hover:rotate-20 group-hover:brightness-125">
            <Icon name="Ruler" size={20} />
          </div>
          Вызвать замерщика
        </Button>
      )}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isSticky ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer group">
            <img src="https://cdn.poehali.dev/files/9dca37a2-586a-4580-a488-216eafd269c0.jpeg" alt="Оконный Порт" className="h-12 w-12 md:h-16 md:w-16 transition-all duration-300 group-hover:scale-110" />
            <span className={`text-lg md:text-2xl font-bold transition-colors duration-300 group-hover:text-accent ${isSticky ? 'text-primary' : 'text-white'}`}>Оконный Порт</span>
          </div>
          
          <nav className="hidden md:flex gap-6">
            <button onClick={() => scrollToSection('advantages')} className={`text-sm font-medium hover:text-accent transition-colors ${isSticky ? 'text-foreground' : 'text-white'}`}>
              Преимущества
            </button>
            <button onClick={() => scrollToSection('process')} className={`text-sm font-medium hover:text-accent transition-colors ${isSticky ? 'text-foreground' : 'text-white'}`}>
              Процесс
            </button>
            <button onClick={() => scrollToSection('portfolio')} className={`text-sm font-medium hover:text-accent transition-colors ${isSticky ? 'text-foreground' : 'text-white'}`}>
              Примеры
            </button>
            <button onClick={() => scrollToSection('pricing')} className={`text-sm font-medium hover:text-accent transition-colors ${isSticky ? 'text-foreground' : 'text-white'}`}>
              Цены
            </button>
            <button onClick={() => scrollToSection('reviews')} className={`text-sm font-medium hover:text-accent transition-colors ${isSticky ? 'text-foreground' : 'text-white'}`}>
              Отзывы
            </button>
          </nav>
          
          <div className="flex items-center gap-2 md:gap-4">
            <a href="tel:+79242348920" className={`hidden lg:flex items-center gap-2 text-lg font-semibold transition-colors group ${isSticky ? 'text-primary' : 'text-white'}`}>
              <div className="transition-all duration-300 group-hover:rotate-20 group-hover:brightness-125">
                <Icon name="Phone" size={20} />
              </div>
              8-924-234-89-20
            </a>
            <a href="https://t.me/Keranos1st" target="_blank" rel="noopener noreferrer" className="md:hidden">
              <Button className="bg-blue-500 hover:bg-blue-600 rounded-full px-4 py-2 text-sm transform hover:scale-105 transition-all duration-300 flex items-center gap-2 group animate-shake-bell">
                <div className="transition-all duration-300 group-hover:rotate-20 group-hover:brightness-125">
                  <Icon name="Send" size={16} />
                </div>
                Telegram
              </Button>
            </a>
            <Button onClick={() => scrollToSection('cta')} className="hidden md:flex bg-accent hover:bg-accent/90 rounded-full px-4 py-2 md:px-6 text-sm md:text-base transform hover:scale-105 transition-all duration-300 items-center gap-2 group">
              <div className="transition-all duration-300 group-hover:rotate-20 group-hover:brightness-125">
                <Icon name="Ruler" size={18} />
              </div>
              <span>Заказать замер</span>
            </Button>
          </div>
        </div>
      </header>

      <section 
        className="relative min-h-screen flex items-center pt-20 pb-24 md:pb-20"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)), url('https://cdn.poehali.dev/projects/efbbbec9-9cfd-49b4-9ecb-fb6b9f63b213/files/6a717373-897f-411e-8eb8-9222ba76e0ac.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="bg-black/40 backdrop-blur-md rounded-2xl md:rounded-3xl p-6 md:p-12 mb-6 md:mb-8">
              <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold mb-4 md:mb-8 leading-tight animate-fade-in" key={currentH1}>
                {h1Variants[currentH1]}
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl mb-3 md:mb-4 text-accent font-semibold animate-fade-in">
                Герметичные окна премиум-класса с монтажом по ГОСТу
              </p>
              <p className="text-base sm:text-lg md:text-xl mb-0 text-white/90 animate-fade-in">
                Немецкие окна Rehau с гарантией 10 лет. Более 500 довольных семей во Владивостоке
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto">
              <div className="group flex items-center gap-3 bg-white/15 backdrop-blur-md rounded-xl md:rounded-2xl p-4 md:p-5 hover:bg-white/20 transition-all">
                <div className="transition-all duration-300 group-hover:rotate-20 group-hover:brightness-125 flex-shrink-0">
                  <Icon name="CalendarCheck" size={24} className="text-accent sm:w-8 sm:h-8" />
                </div>
                <span className="text-left text-sm font-medium">Выезд в день обращения</span>
              </div>
              <div className="group flex items-center gap-3 bg-white/15 backdrop-blur-md rounded-xl md:rounded-2xl p-4 md:p-5 hover:bg-white/20 transition-all">
                <div className="transition-all duration-300 group-hover:rotate-20 group-hover:brightness-125 flex-shrink-0">
                  <Icon name="Clock" size={24} className="text-accent sm:w-8 sm:h-8" />
                </div>
                <span className="text-left text-sm font-medium">Расчёт сметы за 15 минут</span>
              </div>
              <div className="group flex items-center gap-3 bg-white/15 backdrop-blur-md rounded-xl md:rounded-2xl p-4 md:p-5 hover:bg-white/20 transition-all">
                <div className="transition-all duration-300 group-hover:rotate-20 group-hover:brightness-125 flex-shrink-0">
                  <Icon name="Shield" size={24} className="text-accent sm:w-8 sm:h-8" />
                </div>
                <span className="text-left text-sm font-medium">Гарантия 10 лет</span>
              </div>
            </div>

            <div className="max-w-md mx-auto mt-8 md:mt-12">
              <LeadForm variant="dark" />
            </div>
          </div>
        </div>
      </section>

      <WhyUs />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <CountdownTimer />
        </div>
      </section>

      <section className="py-12 md:py-24 bg-white" id="advantages">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center mb-12 md:mb-24">
            <div className="animate-fade-in">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-4 md:mb-6 leading-tight">
                Вы строите дом мечты... Но одна ошибка с окнами может всё испортить
              </h2>
              <p className="text-base md:text-lg mb-4 text-muted-foreground leading-relaxed">
                Вы вложили миллионы в фундамент, стены, крышу. Но большинство семей сталкивается с неприятным открытием: дешёвые или неправильно установленные окна превращают мечту в источник постоянного стресса — сквозняки, промерзание, высокие счета за отопление.
              </p>
              <p className="text-lg md:text-xl font-semibold text-primary mb-4 md:mb-6">
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
                src="https://cdn.poehali.dev/files/0f201b1f-6e0d-4f01-afdd-c6f0282d9501.jpeg"
                alt="Сравнение теплопотерь обычных и энергоэффективных окон" 
                className="rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="order-1 md:order-2 animate-fade-in">
              <Badge className="mb-3 md:mb-4 bg-orange-100 text-orange-700 hover:bg-orange-100 text-xs md:text-sm">Реальная история</Badge>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-4 md:mb-6 leading-tight">
                Сэкономили 100 000₽ на окнах? Приготовьтесь потерять в 5 раз больше
              </h2>
              <p className="text-base md:text-lg mb-4 text-muted-foreground leading-relaxed">
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
                src="https://cdn.poehali.dev/files/9701cb84-1784-4f21-9fcd-47dabeef1eb5.jpeg"
                alt="Уютный интерьер с качественными окнами Rehau зимой" 
                className="rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>

          <Card className="bg-gradient-to-br from-primary to-primary/90 text-white border-0 shadow-2xl">
            <CardContent className="p-6 md:p-10 lg:p-16">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight">
                «Оконный Порт» + Rehau = формула идеального дома
              </h2>
              <p className="text-base md:text-xl mb-6 text-white/95 leading-relaxed">
                Немецкий бренд с 70-летним опытом, монтаж по ГОСТу, собственные бригады, честный подход. Более 500 домов и 98% довольных клиентов.
              </p>
              <div className="grid grid-cols-3 gap-4 md:gap-8 mb-6 md:mb-8">
                <div className="text-center">
                  <div className="text-3xl md:text-5xl font-bold text-accent mb-1 md:mb-2">12</div>
                  <div className="text-white/80 text-xs md:text-base">лет работы</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-5xl font-bold text-accent mb-1 md:mb-2">500+</div>
                  <div className="text-white/80 text-xs md:text-base">объектов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-5xl font-bold text-accent mb-1 md:mb-2">0</div>
                  <div className="text-white/80 text-xs md:text-base">судебных споров</div>
                </div>
              </div>
              <p className="text-sm md:text-lg text-white/90">
                Бесплатный выезд замерщика, честная смета, гарантия до 10 лет.
              </p>
            </CardContent>
          </Card>

          <div className="mt-8 md:mt-16">
            <LeadForm />
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <SavingsCalculator />
        </div>
      </section>

      <section className="py-12 md:py-24 bg-gradient-to-br from-primary via-primary/95 to-primary text-white" id="process">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center mb-10 md:mb-20">
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
              <div key={index} className="group flex gap-4 md:gap-8 mb-6 md:mb-10 animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 md:w-20 md:h-20 bg-accent rounded-full flex items-center justify-center text-white font-bold text-lg md:text-2xl shadow-xl">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-1 bg-white/15 backdrop-blur-md rounded-xl md:rounded-2xl p-4 md:p-8 hover:bg-white/20 transition-all">
                  <div className="flex items-center gap-3 md:gap-4 mb-2 md:mb-3">
                    <div className="transition-all duration-300 group-hover:rotate-20 group-hover:brightness-125">
                      <Icon name={step.icon as any} size={20} className="text-accent md:w-7 md:h-7" />
                    </div>
                    <h3 className="text-base md:text-2xl font-bold">{step.title}</h3>
                  </div>
                  <p className="text-white/85 text-sm md:text-lg">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-white" id="portfolio">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center mb-4 md:mb-6">
            Более 500 новых домов во Владивостоке выбрали наши окна
          </h2>
          <p className="text-base md:text-xl text-center text-muted-foreground mb-8 md:mb-16 max-w-3xl mx-auto">
            Остекление новостроек и коттеджей под ключ — комфорт с первого дня
          </p>
          
          {(() => {
            const portfolioItems = [
              { location: 'Соловей-Ключ', windows: 12, type: 'Коттедж 2 этажа', image: 'https://cdn.poehali.dev/projects/efbbbec9-9cfd-49b4-9ecb-fb6b9f63b213/files/9996f381-ce32-44da-9830-74cea7dedca9.jpg' },
              { location: '', windows: 8, type: 'Таунхаус', image: 'https://cdn.poehali.dev/files/89cca004-8168-4fe8-8bed-f1e54747080c.jpeg' },
              { location: 'Садгород', windows: 15, type: 'Загородный дом', image: 'https://cdn.poehali.dev/projects/efbbbec9-9cfd-49b4-9ecb-fb6b9f63b213/files/600fe4a1-ce17-4cfb-9e67-1e942137effe.jpg' },
              { location: 'Соловей ключ', windows: 10, type: 'Коттедж с мансардой', image: 'https://cdn.poehali.dev/files/44184ed6-d9fc-46d6-bbaf-3da645c3c881.jpeg' },
              { location: 'Щитовая', windows: 18, type: 'Особняк', image: 'https://cdn.poehali.dev/projects/efbbbec9-9cfd-49b4-9ecb-fb6b9f63b213/files/85888390-4e37-4ad6-961a-1543fdd47fc7.jpg' },
              { location: 'Трудовое', windows: 9, type: 'Дом с верандой', image: 'https://cdn.poehali.dev/files/99397859-3df3-4e42-af6b-83414f746fb5.jpeg' },
            ];

            const nextPortfolio = () => {
              setCurrentPortfolio((prev) => (prev + 1) % portfolioItems.length);
            };

            const prevPortfolio = () => {
              setCurrentPortfolio((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length);
            };

            return (
              <>
                {/* Desktop grid */}
                <div className="hidden md:grid md:grid-cols-3 gap-8 mb-12">
                  {portfolioItems.map((item, index) => (
                    <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 group border-0 animate-scale-in">
                      <div className="relative overflow-hidden">
                        <img 
                          src={item.image}
                          alt={`Остекление в ${item.location}`}
                          className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-accent text-white">Rehau</Badge>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <p className="font-bold text-lg mb-1">{item.type}</p>
                        <p className="text-muted-foreground mb-1">{item.location}</p>
                        <p className="text-sm text-primary font-medium">Установлено {item.windows} окон Rehau</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Mobile carousel */}
                <div className="md:hidden relative mb-12">
                  <Card className="overflow-hidden border-0 shadow-xl">
                    <div className="relative overflow-hidden">
                      <img 
                        src={portfolioItems[currentPortfolio].image}
                        alt={`Остекление в ${portfolioItems[currentPortfolio].location}`}
                        className="w-full h-80 object-cover"
                        loading="lazy"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-accent text-white">Rehau</Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <p className="font-bold text-lg mb-1">{portfolioItems[currentPortfolio].type}</p>
                      <p className="text-muted-foreground mb-1">{portfolioItems[currentPortfolio].location}</p>
                      <p className="text-sm text-primary font-medium">Установлено {portfolioItems[currentPortfolio].windows} окон Rehau</p>
                    </CardContent>
                  </Card>

                  <div className="flex justify-center items-center gap-4 mt-6">
                    <Button 
                      onClick={prevPortfolio}
                      variant="outline" 
                      size="icon"
                      className="rounded-full w-12 h-12 border-2 border-primary hover:bg-primary hover:text-white transition-all"
                    >
                      <Icon name="ChevronLeft" size={24} />
                    </Button>
                    <div className="flex gap-2">
                      {portfolioItems.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentPortfolio(index)}
                          className={`h-2 rounded-full transition-all ${
                            index === currentPortfolio ? 'w-8 bg-primary' : 'w-2 bg-muted-foreground/30'
                          }`}
                          aria-label={`Перейти к объекту ${index + 1}`}
                        />
                      ))}
                    </div>
                    <Button 
                      onClick={nextPortfolio}
                      variant="outline" 
                      size="icon"
                      className="rounded-full w-12 h-12 border-2 border-primary hover:bg-primary hover:text-white transition-all"
                    >
                      <Icon name="ChevronRight" size={24} />
                    </Button>
                  </div>
                </div>
              </>
            );
          })()}
        </div>
      </section>

      <section className="py-12 md:py-24 bg-muted" id="pricing">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center mb-4 md:mb-6">
            Честные цены без скрытых доплат
          </h2>
          <p className="text-base md:text-xl text-center text-muted-foreground mb-8 md:mb-16">
            Все расчёты прозрачны — вы знаете, за что платите
          </p>
          
          <div className="max-w-5xl mx-auto mb-8 md:mb-16">
            <Card className="shadow-2xl border-0 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="px-3 md:px-6 py-3 md:py-5 text-left font-bold text-sm md:text-base">Тип окна</th>
                      <th className="px-3 md:px-6 py-3 md:py-5 text-left font-bold text-sm md:text-base">Профиль</th>
                      <th className="px-3 md:px-6 py-3 md:py-5 text-left font-bold text-sm md:text-base hidden sm:table-cell">Размер</th>
                      <th className="px-3 md:px-6 py-3 md:py-5 text-right font-bold text-sm md:text-base">Цена</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {[
                      { type: 'Глухое окно', profile: 'Blitz 60', size: '1200×1400', price: '24 800' },
                      { type: 'Поворотно-откидное', profile: 'Blitz 60', size: '1200×1400', price: '30 800' },
                      { type: 'Двустворчатое', profile: 'Grazio 70', size: '1500×1400', price: '35 800' },
                      { type: 'Панорамное', profile: 'Grazio 70', size: '2500×2200', price: '85 000' },
                    ].map((item, index) => (
                      <tr key={index} className="border-b hover:bg-muted/30 transition-colors">
                        <td className="px-3 md:px-6 py-3 md:py-5 font-medium text-xs md:text-base">{item.type}</td>
                        <td className="px-3 md:px-6 py-3 md:py-5 text-muted-foreground text-xs md:text-base">{item.profile}</td>
                        <td className="px-3 md:px-6 py-3 md:py-5 text-muted-foreground text-xs md:text-base hidden sm:table-cell">{item.size} мм</td>
                        <td className="px-3 md:px-6 py-3 md:py-5 text-right font-bold text-primary text-sm md:text-lg whitespace-nowrap">от {item.price} ₽</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-primary text-white border-0 shadow-2xl">
              <CardContent className="p-6 md:p-10">
                <h3 className="text-xl md:text-3xl font-bold mb-4 md:mb-6">В стоимость включено:</h3>
                <div className="grid md:grid-cols-2 gap-4 md:gap-5 mb-6 md:mb-8">
                  {[
                    'Профиль Rehau (оригинал)',
                    'Европейская фурнитура',
                    'Энергосберегающий стеклопакет',
                    'Доставка на объект',
                    'Монтаж по ГОСТу',
                    'Вывоз мусора',
                    'Гарантия 10 лет'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 md:gap-3">
                      <Icon name="Check" size={20} className="text-accent flex-shrink-0 md:w-6 md:h-6" />
                      <span className="text-sm md:text-lg">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="p-4 md:p-6 bg-accent rounded-xl md:rounded-2xl">
                  <p className="text-base md:text-xl font-bold mb-2">🎁 Специальное предложение до 31.10.2025:</p>
                  <p className="text-sm md:text-lg">Остекление всего дома — скидка 15%. Заказ от 10 окон — москитные сетки в подарок!</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-white" id="guarantees">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center mb-4 md:mb-6">
            Ваша безопасность — наша репутация
          </h2>
          <p className="text-base md:text-xl text-center text-muted-foreground mb-8 md:mb-16">
            Мы берём на себя все риски и гарантируем результат
          </p>

          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              { icon: 'Award', title: '10 лет гарантии', desc: 'Официальная гарантия производителя' },
              { icon: 'ShieldCheck', title: 'Сертификаты государственного образца', desc: 'Полное соответствие стандартам' },
              { icon: 'Handshake', title: 'Партнёр Rehau', desc: 'Сертифицированная компания' }
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-xl transition-all border-2 border-accent/20 bg-gradient-to-br from-white to-accent/5 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 md:p-8 text-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-lg">
                    <Icon name={item.icon as any} size={28} className="text-white md:w-9 md:h-9" />
                  </div>
                  <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-3 text-primary">{item.title}</h3>
                  <p className="text-muted-foreground text-sm md:text-lg">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>



      <section className="py-12 md:py-24 bg-white" id="reviews">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center mb-4 md:mb-6">
            Что говорят о нас наши заказчики
          </h2>
          <p className="text-base md:text-xl text-center text-muted-foreground mb-8 md:mb-16">
            Реальные отзывы реальных людей
          </p>
          
          {(() => {
            const reviews = [
              { name: 'Александр', stars: 5, text: 'Ребята из «Оконный Порт» — настоящие профи. Всё сделали быстро и аккуратно, после себя убрали весь мусор. В помещении стало теплее и тише. Очень довольны результатом и обслуживанием!' },
              { name: 'Елена', stars: 5, text: 'Обратились в «Оконный Порт» по совету друзей. Замерщик приехал вовремя, всё подробно объяснил. Монтажники работали слаженно, поставили окна без единого дефекта. Рекомендую тем, кто ценит качество и чистоту.' },
              { name: 'Сергей', stars: 5, text: 'Отличная компания! Окна выглядят стильно, фурнитура ходит мягко. Менеджеры дружелюбные, цена прозрачная — без скрытых доплат. Если будете менять окна, смело выбирайте «Оконный Порт»!' },
              { name: 'Наталья', stars: 4, text: 'Работа выполнена добротно, окна герметичные. Мелкие нюансы решили сразу же, без лишней волокиты. Единственное — хотелось бы чуть больше вариантов цвета, но в целом очень даже хорошо.' },
              { name: 'Игорь', stars: 5, text: 'Порадовала скорость и внимание к деталям. Мастера тщательно измерили проём и аккуратно смонтировали окна. Теперь в доме не холодно и нет уличного шума. Спасибо «Оконный Порт» за отличную работу!' }
            ];

            const nextReview = () => {
              setCurrentReview((prev) => (prev + 1) % reviews.length);
            };

            const prevReview = () => {
              setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
            };

            return (
              <>
                <div className="hidden md:grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
                  {reviews.map((review, index) => (
                    <Card key={index} className="animate-fade-in border-0 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all" style={{ animationDelay: `${index * 0.1}s` }}>
                      <CardContent className="p-6">
                        <div className="flex gap-1 mb-3">
                          {[...Array(review.stars)].map((_, i) => (
                            <Icon key={i} name="Star" size={18} className="fill-accent text-accent" />
                          ))}
                          {[...Array(5 - review.stars)].map((_, i) => (
                            <Icon key={`empty-${i}`} name="Star" size={18} className="text-muted-foreground/30" />
                          ))}
                        </div>
                        <p className="mb-4 text-muted-foreground leading-relaxed italic">«{review.text}»</p>
                        <div className="pt-4 border-t border-muted">
                          <div className="font-bold text-foreground">— {review.name}</div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="md:hidden max-w-xl mx-auto mb-12 relative px-8">
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-5">
                      <div className="flex gap-1 mb-3">
                        {[...Array(reviews[currentReview].stars)].map((_, i) => (
                          <Icon key={i} name="Star" size={18} className="fill-accent text-accent" />
                        ))}
                        {[...Array(5 - reviews[currentReview].stars)].map((_, i) => (
                          <Icon key={`empty-${i}`} name="Star" size={18} className="text-muted-foreground/30" />
                        ))}
                      </div>
                      <p className="mb-4 text-muted-foreground leading-relaxed italic">«{reviews[currentReview].text}»</p>
                      <div className="pt-4 border-t border-muted">
                        <div className="font-bold text-foreground">— {reviews[currentReview].name}</div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={prevReview}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 rounded-full shadow-lg bg-white hover:bg-accent hover:text-white"
                  >
                    <Icon name="ChevronLeft" size={24} />
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={nextReview}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 rounded-full shadow-lg bg-white hover:bg-accent hover:text-white"
                  >
                    <Icon name="ChevronRight" size={24} />
                  </Button>

                  <div className="flex justify-center gap-2 mt-6">
                    {reviews.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentReview(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentReview ? 'bg-accent w-6' : 'bg-muted-foreground/30'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </>
            );
          })()}

          <div className="flex justify-center gap-8 md:gap-12 mt-8 md:mt-12">
            <div className="text-center">
              <div className="text-3xl md:text-5xl font-bold text-primary mb-1 md:mb-2">4.9</div>
              <div className="flex gap-1 justify-center mb-1 md:mb-2">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} name="Star" size={16} className="fill-accent text-accent md:w-5 md:h-5" />
                ))}
              </div>
              <div className="text-muted-foreground text-sm md:text-base">2GIS</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-5xl font-bold text-primary mb-1 md:mb-2">4.8</div>
              <div className="flex gap-1 justify-center mb-1 md:mb-2">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} name="Star" size={16} className="fill-accent text-accent md:w-5 md:h-5" />
                ))}
              </div>
              <div className="text-muted-foreground text-sm md:text-base">Яндекс</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 md:mb-4">
            Ответы на частые вопросы
          </h2>
          <p className="text-base md:text-lg text-center text-muted-foreground mb-8 md:mb-12">
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
                  <AccordionTrigger className="text-left font-semibold text-base md:text-lg hover:text-primary py-4 md:py-6">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm md:text-base pb-4 md:pb-6">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-gradient-to-br from-accent via-accent/95 to-accent/90 text-white" id="cta">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight">
              Закажите бесплатный замер — и получите честный расчёт за 15 минут
            </h2>
            <p className="text-base md:text-xl mb-6 md:mb-10 text-white/95">
              Специалист приедет, проведёт замеры, рассчитает стоимость и ответит на вопросы. Никаких обязательств.
            </p>
            
            <div className="max-w-lg mx-auto">
              <LeadForm variant="light" />
              
              <div className="mt-8 space-y-3 text-sm text-white/90">
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
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white" id="cta">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Всё ещё сомневаетесь? Получите бесплатную консультацию эксперта
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Оставьте заявку — эксперт приедет, ответит на вопросы о профильных решениях и стоимости
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <LeadForm variant="dark" compact />
          </div>

          <p className="text-center text-sm text-accent font-semibold animate-pulse-slow mt-6">
            ⏰ Осталось 3 места на бесплатный выезд на этой неделе
          </p>
        </div>
      </section>

      <footer className="bg-foreground text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src="https://cdn.poehali.dev/files/9dca37a2-586a-4580-a488-216eafd269c0.jpeg" alt="Оконный Порт" className="h-12 w-12" />
                <h3 className="text-2xl font-bold text-accent">Оконный Порт</h3>
              </div>
              <p className="text-white/70 mb-4">
                Немецкое качество окон для вашего дома
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Контакты</h3>
              <div className="space-y-3">
                <a 
                  href="tel:+79242348920" 
                  className="group flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                >
                  <div className="transition-all duration-300 group-hover:rotate-20 group-hover:brightness-125">
                    <Icon name="Phone" size={18} />
                  </div>
                  <span className="text-sm">8-924-234-89-20</span>
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
                  <span className="text-sm">Telegram</span>
                </a>
                <a 
                  href="mailto:windowport@mail.ru" 
                  className="group flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                >
                  <div className="transition-all duration-300 group-hover:rotate-20 group-hover:brightness-125">
                    <Icon name="Mail" size={18} />
                  </div>
                  <span className="text-sm">windowport@mail.ru</span>
                </a>
                <div className="group flex items-start gap-2 text-white/80">
                  <div className="mt-0.5 transition-all duration-300 group-hover:rotate-20 group-hover:brightness-125">
                    <Icon name="MapPin" size={18} />
                  </div>
                  <span className="text-sm">г. Владивосток, Приморский край</span>
                </div>
                <div className="group flex items-center gap-2 text-white/80">
                  <div className="transition-all duration-300 group-hover:rotate-20 group-hover:brightness-125">
                    <Icon name="Clock" size={18} />
                  </div>
                  <span className="text-sm">Пн-Пт 9:00-19:00</span>
                </div>
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
              <h3 className="text-lg font-bold mb-4">Документы</h3>
              <div className="space-y-2">
                <a href="/privacy-policy.html" target="_blank" className="block text-white/80 hover:text-white transition-colors text-sm underline">
                  Политика конфиденциальности
                </a>
                <a href="/terms-of-service.html" target="_blank" className="block text-white/80 hover:text-white transition-colors text-sm underline">
                  Договор оферты
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8 text-center text-white/60 text-sm">
            <p>© 2025 «Оконный Порт». Все права защищены.</p>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t-2 border-accent shadow-2xl p-4">
        <div className="flex gap-3">
          <a
            href="tel:+79242348920"
            className="flex-1 bg-primary hover:bg-primary/90 text-white rounded-full py-4 px-6 font-bold text-center flex items-center justify-center gap-2 transition-all active:scale-95"
          >
            <Icon name="Phone" size={20} />
            Позвонить
          </a>
          <button
            onClick={() => scrollToSection('cta')}
            className="flex-1 bg-accent hover:bg-accent/90 text-white rounded-full py-4 px-6 font-bold text-center flex items-center justify-center gap-2 transition-all active:scale-95"
          >
            <Icon name="Home" size={20} />
            Заявка на замер
          </button>
        </div>
      </div>

      <div className="hidden md:block">
        <TelegramWidget />
      </div>
    </div>
  );
}