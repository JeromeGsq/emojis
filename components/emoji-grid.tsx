'use client';

import { useState } from 'react';
import EmojiCard from './emoji-card';
import type { Emoji } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/lib/language-context';

export default function EmojiGrid({ emojis }: { emojis: Emoji[] }) {
  const { toast } = useToast();
  const { language } = useLanguage();
  const [copiedEmoji, setCopiedEmoji] = useState<string | null>(null);

  const handleCopyEmoji = (emoji: string, name: { en: string; fr: string }) => {
    navigator.clipboard
      .writeText(emoji)
      .then(() => {
        setCopiedEmoji(emoji);
        toast({
          title: 'Copied!',
          description: `${name[language]} emoji copied to clipboard`,
          duration: 2000,
        });

        // Reset the copied state after a short delay
        setTimeout(() => setCopiedEmoji(null), 1000);
      })
      .catch((err) => {
        toast({
          title: 'Failed to copy',
          description: 'Please try again',
          variant: 'destructive',
        });
        console.error('Failed to copy: ', err);
      });
  };

  if (emojis.length === 0) {
    return (
      <div className='text-center py-12'>
        <p className='text-lg text-muted-foreground'>
          No emojis found. Try a different search term.
        </p>
      </div>
    );
  }

  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4'>
      {emojis.map((emoji) => (
        <EmojiCard
          key={emoji.id}
          emoji={emoji}
          isCopied={emoji.char === copiedEmoji}
          onCopy={() => handleCopyEmoji(emoji.char, emoji.name)}
        />
      ))}
    </div>
  );
}
