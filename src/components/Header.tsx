import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const showBackButton = location.pathname !== '/';

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex-1">
          {showBackButton && (
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => navigate('/')}
              className="hover:bg-primary/10"
            >
              <Icon name="ArrowLeft" size={20} className="mr-2" />
              Назад
            </Button>
          )}
        </div>
        
        <div className="flex-1 flex justify-center">
          <h1 className="text-2xl md:text-3xl font-bold text-primary font-heading">
            трансконтейнер
          </h1>
        </div>
        
        <div className="flex-1 flex justify-end items-center gap-3">
          <Button variant="ghost" size="sm" className="hover:bg-primary/10">
            <Icon name="Search" size={20} />
          </Button>
          <Button variant="outline" size="sm" className="font-heading">
            <Icon name="User" size={18} className="mr-2" />
            Личный кабинет
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;