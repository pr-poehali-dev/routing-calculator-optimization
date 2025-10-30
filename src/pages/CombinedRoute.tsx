import Header from '@/components/Header';

const CombinedRoute = () => {
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
        </div>
      </div>
    </div>
  );
};

export default CombinedRoute;
