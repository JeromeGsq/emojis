'use client';

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';
import { Language } from './types';

interface LanguageContextType {
  language: Language;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // Detect browser language when component mounts
    const detectLanguage = () => {
      const browserLang = navigator.language.toLowerCase().split('-')[0];
      // Only set to French if specifically fr, otherwise default to English
      setLanguage(browserLang === 'fr' ? 'fr' : 'en');
    };

    detectLanguage();

    // Add listener for language changes
    window.addEventListener('languagechange', detectLanguage);

    // Cleanup
    return () => {
      window.removeEventListener('languagechange', detectLanguage);
    };
  }, []);

  return (
    <LanguageContext.Provider value={{ language }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
