import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import { useNavigate } from 'react-router-dom';

const RouteResults = () => {
  const navigate = useNavigate();

  const transportOptions = [
    {
      type: 'Автотранспорт',
      icon: 'Truck',
      sum: '≈ 45 000 ₽',
      route: 'Москва → Санкт-Петербург',
      deadline: '2-3 дня',
      link: null
    },
    {
      type: 'Морская перевозка',
      icon: 'Ship',
      sum: '≈ 32 000 ₽',
      route: 'Москва → Санкт-Петербург',
      deadline: '7-10 дней',
      link: null
    },
    {
      type: 'Ж/Д',
      icon: 'Train',
      sum: '≈ 38 000 ₽',
      route: 'Москва → Санкт-Петербург',
      deadline: '3-5 дней',
      link: null
    },
    {
      type: 'Авиатранспорт',
      icon: 'Plane',
      sum: '≈ 85 000 ₽',
      route: 'Москва → Санкт-Петербург',
      deadline: '1 день',
      link: null
    },
    {
      type: 'Комбинированный',
      icon: 'Package',
      variability: 'Авто + Ж/Д',
      sum: '≈ 40 000 ₽',
      route: 'Москва → Санкт-Петербург',
      deadline: '3-4 дня',
      link: '/combined-route'
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
                  <Button
                    variant="ghost"
                    className="w-full justify-start p-0 h-auto hover:bg-transparent"
                    onClick={() => option.link && navigate(option.link)}
                  >
                    <div className="font-heading flex items-center text-2xl font-semibold">
                      <Icon name={option.icon} size={28} className="mr-3 text-primary" />
                      {option.type}
                    </div>
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className={`grid gap-6 ${option.variability ? 'grid-cols-1 md:grid-cols-4' : 'grid-cols-1 md:grid-cols-3'}`}>
                    {option.variability && (
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Вариативность</p>
                        <p className="font-medium text-lg">{option.variability}</p>
                      </div>
                    )}
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

export default RouteResults;