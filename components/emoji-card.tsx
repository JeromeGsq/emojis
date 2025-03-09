'use client';

import type { Emoji } from '@/lib/types';
import { Check, Copy } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';

interface EmojiCardProps {
  emoji: Emoji;
  isCopied: boolean;
  onCopy: () => void;
}

export default function EmojiCard({ emoji, isCopied, onCopy }: EmojiCardProps) {
  const { language } = useLanguage();

  return (
    <div
      className='bg-card border rounded-lg p-4 flex flex-col items-center justify-center hover:shadow-md transition-shadow cursor-pointer group relative'
      onClick={onCopy}
    >
      <div className='text-4xl mb-2'>{emoji.char}</div>
      <div className='text-xs text-center font-medium truncate w-full'>
        {emoji.name[language]}
      </div>

      {/* Copy indicator */}
      <div className='absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity'>
        {isCopied ? (
          <div className='bg-green-100 text-green-700 p-1 rounded-full'>
            <Check className='h-4 w-4' />
          </div>
        ) : (
          <div className='bg-muted p-1 rounded-full'>
            <Copy className='h-4 w-4' />
          </div>
        )}
      </div>
    </div>
  );
}
