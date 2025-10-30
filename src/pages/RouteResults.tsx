import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';

const RouteResults = () => {
  const transportOptions = [
    {
      type: 'Автотранспорт',
      icon: 'Truck',
      sum: '≈ 45 000 ₽'
    },
    {
      type: 'Морская перевозка',
      icon: 'Ship',
      sum: '≈ 32 000 ₽'
    },
    {
      type: 'Ж/Д',
      icon: 'Train',
      sum: '≈ 38 000 ₽'
    },
    {
      type: 'Авиатранспорт',
      icon: 'Plane',
      sum: '≈ 85 000 ₽'
    },
    {
      type: 'Комбинированный',
      icon: 'Package',
      sum: '≈ 40 000 ₽'
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
                  <p className="font-semibold text-2xl text-primary">{option.sum}</p>
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