import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted flex items-center justify-center px-4">
      <div className="text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold text-secondary mb-6 animate-scale-in tracking-tight">
          много хочешь -<br />много получишь
        </h1>
        <div className="mt-12 animate-fade-in" style={{ animationDelay: '0.3s', opacity: 0, animationFillMode: 'forwards' }}>
          <Button
            onClick={() => navigate('/calculator')}
            size="lg"
            className="text-lg px-12 py-8 rounded-xl font-heading font-semibold shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105 bg-primary hover:bg-primary/90"
          >
            digital manager
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
