import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import { useNavigate } from 'react-router-dom';

const Calculator = () => {
  const navigate = useNavigate();
  const [weight, setWeight] = useState('');
  const [volume, setVolume] = useState('');
  const [dimensions, setDimensions] = useState('');
  const [date, setDate] = useState('');
  const [departurePoint, setDeparturePoint] = useState('');
  const [deliveryPoint, setDeliveryPoint] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [budget, setBudget] = useState('');
  const [packagingType, setPackagingType] = useState('');

  return (
    <div className="min-h-screen bg-primary flex flex-col">
      <Header />
      <div className="flex-1 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-8 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold text-white font-heading">
              Калькулятор перевозки
            </h1>
          </div>

          <Card className="shadow-xl border-0 animate-scale-in">
            <CardHeader>
              <CardTitle className="font-heading flex items-center">
                <Icon name="MapPin" size={24} className="mr-3 text-primary" />
                Расчет маршрута
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Информация о грузе</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="weight">Вес (кг)</Label>
                    <Input
                      id="weight"
                      type="number"
                      placeholder="100"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      className="border-2 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="volume">Объем (м³)</Label>
                    <Input
                      id="volume"
                      type="number"
                      placeholder="5"
                      value={volume}
                      onChange={(e) => setVolume(e.target.value)}
                      className="border-2 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dimensions">Габариты (см)</Label>
                    <Input
                      id="dimensions"
                      placeholder="100x50x30"
                      value={dimensions}
                      onChange={(e) => setDimensions(e.target.value)}
                      className="border-2 focus:border-primary"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="date">Дата</Label>
                <Input
                  id="date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="border-2 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="departure">Пункт отправления</Label>
                <Input
                  id="departure"
                  placeholder="Москва"
                  value={departurePoint}
                  onChange={(e) => setDeparturePoint(e.target.value)}
                  className="border-2 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="delivery">Пункт доставки</Label>
                <Input
                  id="delivery"
                  placeholder="Санкт-Петербург"
                  value={deliveryPoint}
                  onChange={(e) => setDeliveryPoint(e.target.value)}
                  className="border-2 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="additional">Дополнительные сведения</Label>
                <Input
                  id="additional"
                  placeholder="Хрупкий груз, требуется особая упаковка"
                  value={additionalInfo}
                  onChange={(e) => setAdditionalInfo(e.target.value)}
                  className="border-2 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="budget">Бюджет (₽)</Label>
                <Input
                  id="budget"
                  type="number"
                  placeholder="50000"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="border-2 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="packaging">Тип упаковки</Label>
                <Select value={packagingType} onValueChange={setPackagingType}>
                  <SelectTrigger className="border-2 focus:border-primary">
                    <SelectValue placeholder="Выберите тип упаковки" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="standard">Стандартная</SelectItem>
                    <SelectItem value="wooden">Деревянная обрешетка</SelectItem>
                    <SelectItem value="cardboard">Картонная коробка</SelectItem>
                    <SelectItem value="pallet">Паллет</SelectItem>
                    <SelectItem value="custom">Индивидуальная</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                className="w-full font-heading font-semibold"
                size="lg"
                onClick={() => navigate('/route-results')}
              >
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать маршрут
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Calculator;