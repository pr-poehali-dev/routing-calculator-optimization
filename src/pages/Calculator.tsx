import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

const Calculator = () => {
  const navigate = useNavigate();
  const [routeFrom, setRouteFrom] = useState('');
  const [routeTo, setRouteTo] = useState('');
  const [distance, setDistance] = useState('');
  const [weight, setWeight] = useState('');
  const [cost, setCost] = useState<number | null>(null);
  const [trackingNumber, setTrackingNumber] = useState('');

  const calculateRoute = () => {
    if (routeFrom && routeTo) {
      const randomDistance = Math.floor(Math.random() * 2000) + 100;
      setDistance(`${randomDistance} км`);
    }
  };

  const calculateCost = () => {
    if (distance && weight) {
      const distanceNum = parseInt(distance);
      const weightNum = parseFloat(weight);
      const calculatedCost = (distanceNum * 2.5) + (weightNum * 15);
      setCost(Math.round(calculatedCost));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8 animate-fade-in">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="hover:bg-primary/10"
          >
            <Icon name="ArrowLeft" size={20} className="mr-2" />
            Назад
          </Button>
          <h1 className="text-3xl md:text-4xl font-bold text-secondary font-heading">
            Digital Manager
          </h1>
          <div className="w-24"></div>
        </div>

        <Tabs defaultValue="route" className="w-full animate-scale-in">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="route" className="font-heading">
              <Icon name="Route" size={18} className="mr-2" />
              Маршрутизация
            </TabsTrigger>
            <TabsTrigger value="cost" className="font-heading">
              <Icon name="Calculator" size={18} className="mr-2" />
              Стоимость
            </TabsTrigger>
            <TabsTrigger value="tracking" className="font-heading">
              <Icon name="Package" size={18} className="mr-2" />
              Отслеживание
            </TabsTrigger>
          </TabsList>

          <TabsContent value="route" className="animate-fade-in">
            <Card className="shadow-xl border-0">
              <CardHeader>
                <CardTitle className="font-heading flex items-center">
                  <Icon name="MapPin" size={24} className="mr-3 text-primary" />
                  Расчет маршрута
                </CardTitle>
                <CardDescription>Определите оптимальный маршрут для вашего груза</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="from">Откуда</Label>
                  <Input
                    id="from"
                    placeholder="Москва"
                    value={routeFrom}
                    onChange={(e) => setRouteFrom(e.target.value)}
                    className="border-2 focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="to">Куда</Label>
                  <Input
                    id="to"
                    placeholder="Санкт-Петербург"
                    value={routeTo}
                    onChange={(e) => setRouteTo(e.target.value)}
                    className="border-2 focus:border-primary"
                  />
                </div>
                <Button
                  onClick={calculateRoute}
                  className="w-full font-heading font-semibold"
                  size="lg"
                >
                  <Icon name="Navigation" size={20} className="mr-2" />
                  Рассчитать маршрут
                </Button>
                {distance && (
                  <div className="mt-6 p-6 bg-primary/5 rounded-lg border-2 border-primary/20 animate-scale-in">
                    <p className="text-sm text-muted-foreground mb-1">Расстояние</p>
                    <p className="text-3xl font-bold text-primary font-heading">{distance}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="cost" className="animate-fade-in">
            <Card className="shadow-xl border-0">
              <CardHeader>
                <CardTitle className="font-heading flex items-center">
                  <Icon name="DollarSign" size={24} className="mr-3 text-primary" />
                  Расчет стоимости
                </CardTitle>
                <CardDescription>Узнайте стоимость доставки вашего груза</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="distance">Расстояние (км)</Label>
                  <Input
                    id="distance"
                    type="number"
                    placeholder="500"
                    value={distance.replace(' км', '')}
                    onChange={(e) => setDistance(e.target.value)}
                    className="border-2 focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="weight">Вес груза (кг)</Label>
                  <Input
                    id="weight"
                    type="number"
                    placeholder="100"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="border-2 focus:border-primary"
                  />
                </div>
                <Button
                  onClick={calculateCost}
                  className="w-full font-heading font-semibold"
                  size="lg"
                >
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость
                </Button>
                {cost !== null && (
                  <div className="mt-6 p-6 bg-primary/5 rounded-lg border-2 border-primary/20 animate-scale-in">
                    <p className="text-sm text-muted-foreground mb-1">Стоимость доставки</p>
                    <p className="text-3xl font-bold text-primary font-heading">{cost.toLocaleString()} ₽</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tracking" className="animate-fade-in">
            <Card className="shadow-xl border-0">
              <CardHeader>
                <CardTitle className="font-heading flex items-center">
                  <Icon name="Truck" size={24} className="mr-3 text-primary" />
                  Отслеживание груза
                </CardTitle>
                <CardDescription>Отследите местоположение вашего груза</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="tracking">Номер отслеживания</Label>
                  <Input
                    id="tracking"
                    placeholder="Введите трек-номер"
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    className="border-2 focus:border-primary"
                  />
                </div>
                <Button
                  onClick={() => {}}
                  className="w-full font-heading font-semibold"
                  size="lg"
                >
                  <Icon name="Search" size={20} className="mr-2" />
                  Отследить груз
                </Button>
                {trackingNumber && (
                  <div className="mt-6 space-y-4 animate-scale-in">
                    <div className="flex items-start gap-4 p-4 bg-primary/5 rounded-lg">
                      <div className="w-3 h-3 rounded-full bg-primary mt-1.5"></div>
                      <div>
                        <p className="font-semibold">Груз отправлен</p>
                        <p className="text-sm text-muted-foreground">Москва, 28 окт 2024</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-primary/5 rounded-lg">
                      <div className="w-3 h-3 rounded-full bg-primary mt-1.5"></div>
                      <div>
                        <p className="font-semibold">В пути</p>
                        <p className="text-sm text-muted-foreground">Тверь, 29 окт 2024</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg">
                      <div className="w-3 h-3 rounded-full bg-muted-foreground mt-1.5"></div>
                      <div>
                        <p className="font-semibold text-muted-foreground">Ожидается доставка</p>
                        <p className="text-sm text-muted-foreground">Санкт-Петербург, 31 окт 2024</p>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Calculator;
