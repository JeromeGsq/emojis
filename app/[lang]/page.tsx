import EmojiCollection from '@/components/emoji-collection';

// Define all supported languages for static generation
export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'default' }];
}

export default function Home() {
  const title = 'Emojis Collection';

  return (
    <main className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold text-center mb-8'>{title}</h1>
      <EmojiCollection />
    </main>
  );
}
