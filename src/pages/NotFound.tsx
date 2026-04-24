import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Button from '@/components/Button';

const NotFound: React.FC = () => {
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    console.error('404 Error: User attempted to access non-existent route:', location.pathname);
  }, [location.pathname]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-mesh relative overflow-hidden pt-20 pb-16">
      {/* Decorative glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-6 font-medium">
            {t('错误 404', 'ERROR 404')}
          </p>

          <h1 className="text-7xl sm:text-8xl md:text-9xl font-bold tracking-tight mb-6 leading-none">
            <span className="text-gradient">404</span>
          </h1>

          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            {t('页面走丢了', 'Page Not Found')}
          </h2>

          <p className="text-base text-muted-foreground mb-10 max-w-md mx-auto leading-relaxed">
            {t(
              '抱歉，你访问的页面不存在或已被移除。或许从首页重新出发会更好。',
              "Sorry, the page you're looking for doesn't exist or has been moved. Let's get you back on track."
            )}
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button to="/" size="lg">
              <Home className="w-5 h-5" />
              {t('返回首页', 'Back to Home')}
            </Button>
            <Button to="/projects" variant="outline" size="lg">
              <ArrowLeft className="w-5 h-5" />
              {t('查看作品', 'View Projects')}
            </Button>
          </div>

          <p className="text-xs text-muted-foreground/60 mt-12 font-mono">
            {location.pathname}
          </p>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
