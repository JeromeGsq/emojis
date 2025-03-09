'use client';

import type { Emoji } from '@/lib/types';
import { Check, Copy } from 'lucide-react';

interface EmojiCardProps {
  emoji: Emoji;
  isCopied: boolean;
  onCopy: () => void;
}

export default function EmojiCard({ emoji, isCopied, onCopy }: EmojiCardProps) {
  return (
    <div
      className='bg-card border rounded-lg p-5 flex flex-col items-center justify-center hover:shadow-md transition-shadow cursor-pointer group relative w-28 h-28 aspect-square'
      onClick={onCopy}
    >
      <div className='text-5xl flex items-center justify-center flex-1'>
        {emoji.char}
      </div>

      {/* Tooltip qui apparaît au survol */}
      <div className='absolute left-0 right-0 bottom-0 bg-black/75 text-white py-2 px-3 rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity text-xs text-center font-medium w-full overflow-hidden line-clamp-2'>
        {emoji.name}
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
