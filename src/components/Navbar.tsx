import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { to: '/', label: t('首页', 'Home') },
    { to: '/projects', label: t('作品', 'Projects') },
    { to: '/about', label: t('关于我', 'About') },
    { to: '/blog', label: t('博客', 'Blog') },
    { to: '/contact', label: t('联系', 'Contact') },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/80 backdrop-blur-lg border-b border-border py-3'
          : 'bg-transparent py-6'
      )}
    >
      <nav className="container flex items-center justify-between">
        <Link
          to="/"
          className="text-xl font-bold tracking-tight hover:text-primary transition-colors"
        >
          {t('张三', 'Zhang San')}
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                isActive(link.to)
                  ? 'text-foreground'
                  : 'text-muted-foreground'
              )}
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={() => setLanguage(language === 'zh' ? 'en' : 'zh')}
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle language"
          >
            <Globe className="w-4 h-4" />
            <span>{language === 'zh' ? 'EN' : '中'}</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={() => setLanguage(language === 'zh' ? 'en' : 'zh')}
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle language"
          >
            <Globe className="w-5 h-5" />
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border overflow-hidden transition-all duration-300',
          isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="container py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                'text-base font-medium py-2 transition-colors',
                isActive(link.to)
                  ? 'text-foreground'
                  : 'text-muted-foreground'
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
