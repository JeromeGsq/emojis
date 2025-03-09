'use client';

import EmojiCollection from '@/components/emoji-collection';
import { useLanguage } from '@/lib/language-context';

export default function Home() {
  const { language } = useLanguage();

  // Titre adapté à la langue
  const title = language === 'fr' ? "Collection d'Émojis" : 'Emojis Collection';

  return (
    <main className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold text-center mb-8'>{title}</h1>
      <EmojiCollection />
    </main>
  );
}
