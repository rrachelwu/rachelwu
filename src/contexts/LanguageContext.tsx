import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'zh' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (zh: string, en: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'zh';
  });
  const [userSet, setUserSet] = useState<boolean>(() => !!localStorage.getItem('language'));

  const setLanguage = (lang: Language) => {
    setUserSet(true);
    localStorage.setItem('language', lang);
    setLanguageState(lang);
  };

  useEffect(() => {
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
  }, [language]);

  // IP-based geolocation: default zh for China, en otherwise. Only if user hasn't chosen.
  useEffect(() => {
    if (userSet) return;
    const cachedCountry = sessionStorage.getItem('geo_country');
    const apply = (country: string | null) => {
      const lang: Language = country === 'CN' ? 'zh' : 'en';
      setLanguageState(lang);
    };
    if (cachedCountry !== null) {
      apply(cachedCountry || null);
      return;
    }
    const controller = new AbortController();
    fetch('https://ipapi.co/json/', { signal: controller.signal })
      .then((r) => r.ok ? r.json() : Promise.reject())
      .then((data) => {
        const country = (data?.country_code || data?.country || '') as string;
        sessionStorage.setItem('geo_country', country);
        apply(country);
      })
      .catch(() => {
        // Fallback: use browser language
        const browserLang = navigator.language || '';
        apply(browserLang.toLowerCase().startsWith('zh') ? 'CN' : '');
      });
    return () => controller.abort();
  }, [userSet]);

  const t = (zh: string, en: string) => (language === 'zh' ? zh : en);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
