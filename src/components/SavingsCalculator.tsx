import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const cities = [
  'Владивосток',
  'Артём',
  'Находка',
  'Уссурийск',
  'Большой Камень',
  'Партизанск',
  'Арсеньев'
];

export default function SavingsCalculator() {
  const [area, setArea] = useState('');
  const [savings, setSavings] = useState<number | null>(null);

  const calculateSavings = () => {
    const areaNum = parseFloat(area);
    if (isNaN(areaNum) || areaNum <= 0) return;

    const savingsPerSqm = 180;
    const monthlySavings = Math.round(areaNum * savingsPerSqm);
    setSavings(monthlySavings);
  };

  return (
    <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
      <CardContent className="p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center">
            <Icon name="Calculator" size={28} className="text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-foreground">
              Калькулятор экономии
            </h3>
            <p className="text-sm text-muted-foreground">
              Узнайте, сколько сэкономите на отоплении
            </p>
          </div>
        </div>

        <div className="mb-6">
          <Label htmlFor="calc-area">Площадь остекления (м²)</Label>
          <Input
            id="calc-area"
            type="number"
            placeholder="Например, 15"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            className="h-12"
            min="1"
          />
        </div>

        <Button
          onClick={calculateSavings}
          disabled={!area}
          className="w-full bg-green-600 hover:bg-green-700 h-12 rounded-full font-semibold mb-6"
        >
          Рассчитать экономию
        </Button>

        {savings !== null && (
          <div className="bg-white rounded-xl p-6 shadow-lg animate-scale-in">
            <div className="text-center">
              <p className="text-muted-foreground mb-2">Ваша экономия составит:</p>
              <div className="text-5xl font-bold text-green-600 mb-2">
                {savings.toLocaleString()} ₽
              </div>
              <p className="text-lg text-muted-foreground mb-4">в месяц на отоплении</p>
              
              <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                <div>
                  <div className="text-2xl font-bold text-foreground">
                    {(savings * 12).toLocaleString()} ₽
                  </div>
                  <p className="text-sm text-muted-foreground">в год</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">
                    {(savings * 12 * 5).toLocaleString()} ₽
                  </div>
                  <p className="text-sm text-muted-foreground">за 5 лет</p>
                </div>
              </div>

              <p className="text-sm text-green-700 mt-4 font-medium">
                💡 Окна окупятся за 3-4 года экономии на отоплении!
              </p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}