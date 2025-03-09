export interface Emoji {
  id: string;
  char: string;
  name: {
    en: string;
    fr: string;
  };
  category: string;
  keywords: {
    en: string[];
    fr: string[];
  };
}

export type Language = 'en' | 'fr';
