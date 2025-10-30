import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';

const RouteResults = () => {
  const transportOptions = [
    {
      type: 'Автотранспорт',
      icon: 'Truck',
      sum: '45 000 ₽',
      route: 'Москва → Тверь → Санкт-Петербург',
      deadline: '2-3 дня'
    },
    {
      type: 'Морская перевозка',
      icon: 'Ship',
      sum: '32 000 ₽',
      route: 'Москва → Санкт-Петербург (порт)',
      deadline: '7-10 дней'
    },
    {
      type: 'Ж/Д',
      icon: 'Train',
      sum: '38 000 ₽',
      route: 'Москва (ж/д) → Санкт-Петербург (ж/д)',
      deadline: '3-5 дней'
    },
    {
      type: 'Авиатранспорт',
      icon: 'Plane',
      sum: '85 000 ₽',
      route: 'Москва (аэропорт) → Санкт-Петербург (аэропорт)',
      deadline: '1 день'
    },
    {
      type: 'Комбинированный',
      icon: 'Package',
      variability: 'Авто + Ж/Д',
      sum: '40 000 ₽',
      route: 'Москва (авто) → Тверь (ж/д) → Санкт-Петербург',
      deadline: '3-4 дня'
    }
  ];

  return (
    <div className="min-h-screen bg-primary flex flex-col">
      <Header />
      <div className="flex-1 py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-8 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold text-white font-heading">
              Варианты перевозки
            </h1>
          </div>

          <div className="grid grid-cols-1 gap-6 animate-scale-in">
            {transportOptions.map((option, index) => (
              <Card key={index} className="shadow-xl border-0 hover:shadow-2xl transition-shadow">
                <CardHeader>
                  <CardTitle className="font-heading flex items-center text-2xl">
                    <Icon name={option.icon} size={28} className="mr-3 text-primary" />
                    {option.type}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {option.variability && (
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Вариативность</p>
                        <p className="font-semibold text-lg">{option.variability}</p>
                      </div>
                    )}
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Сумма</p>
                      <p className="font-semibold text-lg text-primary">{option.sum}</p>
                    </div>
                    <div className={option.variability ? 'md:col-span-2' : 'md:col-span-2'}>
                      <p className="text-sm text-muted-foreground mb-1">Маршрут</p>
                      <p className="font-semibold text-lg">{option.route}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Сроки</p>
                      <p className="font-semibold text-lg">{option.deadline}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RouteResults;
