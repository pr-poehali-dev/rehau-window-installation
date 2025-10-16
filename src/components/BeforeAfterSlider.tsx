import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface BeforeAfterImage {
  before: string;
  after: string;
  title: string;
  location: string;
}

const images: BeforeAfterImage[] = [
  {
    before: 'https://cdn.poehali.dev/projects/efbbbec9-9cfd-49b4-9ecb-fb6b9f63b213/files/46e4bfb1-aada-4e3e-a632-df8e8ccf5405.jpg',
    after: 'https://cdn.poehali.dev/projects/efbbbec9-9cfd-49b4-9ecb-fb6b9f63b213/files/b324fbdd-1c33-4739-bd44-bd0b963f73d0.jpg',
    title: 'Замена старых окон',
    location: 'Частный дом, Трудовое'
  },
  {
    before: 'https://cdn.poehali.dev/projects/efbbbec9-9cfd-49b4-9ecb-fb6b9f63b213/files/d435ceed-6cf0-4739-a06d-b6a9cccfb42c.jpg',
    after: 'https://cdn.poehali.dev/projects/efbbbec9-9cfd-49b4-9ecb-fb6b9f63b213/files/69892f2f-db88-42db-b8b2-803fc5d1c0f8.jpg',
    title: 'Остекление балкона',
    location: 'Квартира, Владивосток'
  }
];

export default function BeforeAfterSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number, container: HTMLDivElement) => {
    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.min(Math.max(percentage, 0), 100));
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    handleMove(e.clientX, e.currentTarget);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX, e.currentTarget);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setSliderPosition(50);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setSliderPosition(50);
  };

  const current = images[currentIndex];

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="overflow-hidden border-0 shadow-2xl">
        <div className="relative aspect-[16/10] bg-muted">
          <div
            className="relative w-full h-full select-none cursor-ew-resize"
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
            onTouchMove={handleTouchMove}
          >
            <img
              src={current.after}
              alt="После"
              className="absolute inset-0 w-full h-full object-cover"
              draggable="false"
            />

            <div
              className="absolute inset-0 w-full h-full overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img
                src={current.before}
                alt="До"
                className="absolute inset-0 w-full h-full object-cover"
                draggable="false"
              />
            </div>

            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center">
                <Icon name="MoveHorizontal" size={24} className="text-primary" />
              </div>
            </div>

            <Badge className="absolute top-4 left-4 bg-red-500 hover:bg-red-600 text-white font-bold text-sm px-4 py-2">
              ДО
            </Badge>
            <Badge className="absolute top-4 right-4 bg-green-500 hover:bg-green-600 text-white font-bold text-sm px-4 py-2">
              ПОСЛЕ
            </Badge>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110"
            aria-label="Предыдущее фото"
          >
            <Icon name="ChevronLeft" size={24} className="text-primary" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110"
            aria-label="Следующее фото"
          >
            <Icon name="ChevronRight" size={24} className="text-primary" />
          </button>
        </div>

        <div className="p-6 bg-white">
          <h3 className="text-2xl font-bold mb-2">{current.title}</h3>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Icon name="MapPin" size={16} />
            <span>{current.location}</span>
          </div>

          <div className="flex gap-2 mt-4 justify-center">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setSliderPosition(50);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-primary w-8' : 'bg-muted-foreground/30'
                }`}
                aria-label={`Перейти к фото ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </Card>

      <p className="text-center text-muted-foreground mt-6 text-sm">
        💡 Потяните ползунок влево-вправо, чтобы сравнить результат
      </p>
    </div>
  );
}
