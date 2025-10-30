import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';

const CombinedRoute = () => {
  const combinedOptions = [
    {
      combination: 'Автотранспорт + Ж/Д',
      icons: ['Truck', 'Train'],
      sum: '≈ 40 000 ₽',
      route: 'Москва (авто) → Тверь (ж/д) → Санкт-Петербург',
      deadline: '3-4 дня'
    },
    {
      combination: 'Автотранспорт + Морская перевозка',
      icons: ['Truck', 'Ship'],
      sum: '≈ 38 000 ₽',
      route: 'Москва (авто) → Порт (море) → Санкт-Петербург',
      deadline: '5-8 дней'
    },
    {
      combination: 'Ж/Д + Морская перевозка',
      icons: ['Train', 'Ship'],
      sum: '≈ 35 000 ₽',
      route: 'Москва (ж/д) → Порт (море) → Санкт-Петербург',
      deadline: '8-12 дней'
    },
    {
      combination: 'Авиатранспорт + Автотранспорт',
      icons: ['Plane', 'Truck'],
      sum: '≈ 65 000 ₽',
      route: 'Москва (авиа) → Промежуточный пункт (авто) → Санкт-Петербург',
      deadline: '1-2 дня'
    },
    {
      combination: 'Ж/Д + Автотранспорт',
      icons: ['Train', 'Truck'],
      sum: '≈ 42 000 ₽',
      route: 'Москва (ж/д) → Промежуточная станция (авто) → Санкт-Петербург',
      deadline: '3-5 дней'
    },
    {
      combination: 'Морская перевозка + Автотранспорт',
      icons: ['Ship', 'Truck'],
      sum: '≈ 36 000 ₽',
      route: 'Москва (море) → Порт (авто) → Санкт-Петербург',
      deadline: '6-9 дней'
    }
  ];

  return (
    <div className="min-h-screen bg-primary flex flex-col">
      <Header />
      <div className="flex-1 py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-8 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold text-white font-heading">
              Комбинированная перевозка
            </h1>
          </div>

          <div className="grid grid-cols-1 gap-6 animate-scale-in">
            {combinedOptions.map((option, index) => (
              <Card key={index} className="shadow-xl border-0 hover:shadow-2xl transition-shadow">
                <CardHeader>
                  <CardTitle className="font-heading flex items-center text-2xl">
                    {option.icons.map((icon, iconIndex) => (
                      <Icon key={iconIndex} name={icon} size={28} className="mr-2 text-primary" />
                    ))}
                    {option.combination}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Сумма</p>
                      <p className="font-semibold text-xl text-primary">{option.sum}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Маршрут</p>
                      <p className="font-medium text-lg">{option.route}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Сроки</p>
                      <p className="font-medium text-lg">{option.deadline}</p>
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

export default CombinedRoute;