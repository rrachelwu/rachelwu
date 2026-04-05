import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';
import logo from '@/assets/logo.svg';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [headerH, setHeaderH] = useState(60);
  const headerRef = useRef<HTMLElement>(null);
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

  useEffect(() => {
    if (headerRef.current) {
      setHeaderH(headerRef.current.offsetHeight);
    }
  }, [isScrolled, isOpen]);

  const navLinks = [
    { to: '/', label: t('首页', 'Home') },
    { to: '/projects', label: t('作品', 'Projects') },
    { to: '/about', label: t('关于我', 'About') },
    { to: '/contact', label: t('联系', 'Contact') },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const blurStyle = { backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' };

  return (
    <>
      <header
        ref={headerRef}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled || isOpen
            ? 'bg-white/90 py-2 md:py-3'
            : 'bg-transparent py-2 md:py-6',
          isScrolled && !isOpen && 'border-b border-border'
        )}
        style={isScrolled || isOpen ? blurStyle : undefined}
      >
        <nav className="container flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <img src={logo} alt="Rachel Portfolio" className="w-8 h-8 md:w-9 md:h-9 transition-transform group-hover:scale-105" />
            <span className="text-sm font-medium text-muted-foreground hidden sm:block">RACHEL PORTFOLIO</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  'text-sm font-medium transition-colors relative',
                  isActive(link.to) ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                )}
              >
                {link.label}
                {isActive(link.to) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            ))}
            <button
              onClick={() => setLanguage(language === 'zh' ? 'en' : 'zh')}
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5 rounded-full border border-border hover:border-primary"
              aria-label="Toggle language"
            >
              <Globe className="w-4 h-4" />
              <span>{language === 'zh' ? 'EN' : '中'}</span>
            </button>
          </div>

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
      </header>

      {/* Mobile Navigation - outside header for independent backdrop-filter */}
      <div
        className={cn(
          'md:hidden fixed left-0 right-0 z-40 bg-white/90 border-b border-border overflow-hidden transition-all duration-300',
          isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        )}
        style={{ top: `${headerH}px`, ...blurStyle }}
      >
        <div className="container py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                'text-base font-medium py-2 transition-colors',
                isActive(link.to) ? 'text-primary' : 'text-muted-foreground'
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
