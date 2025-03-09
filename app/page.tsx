import EmojiCollection from '@/components/emoji-collection';
import LanguageSelector from '@/components/language-selector';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Emojis Collection',
  description:
    'A comprehensive collection of emojis with search and copy functionality',
};

export default function Home() {
  return (
    <main className='container mx-auto px-4 py-8'>
      <div className='flex justify-between items-center mb-8'>
        <h1 className='text-3xl font-bold'>Emojis Collection</h1>
        <LanguageSelector />
      </div>
      <EmojiCollection />
    </main>
  );
}
