'use client';

import React from 'react';
import { useLanguage } from '@/lib/language-context';

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className='flex items-center space-x-2'>
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 rounded-md ${
          language === 'en'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-200 hover:bg-gray-300'
        }`}
      >
        English
      </button>
      <button
        onClick={() => setLanguage('fr')}
        className={`px-3 py-1 rounded-md ${
          language === 'fr'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-200 hover:bg-gray-300'
        }`}
      >
        Français
      </button>
    </div>
  );
}
