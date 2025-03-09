'use client';

import { useState } from 'react';
import EmojiCard from './emoji-card';
import type { Emoji } from '@/lib/types';

interface Props {
  emojis: Emoji[];
}

export default function EmojiGrid({ emojis }: Props) {
  const [copiedEmoji, setCopiedEmoji] = useState<string | null>(null);
  const [notification, setNotification] = useState<{
    visible: boolean;
    emoji: string;
    name: string;
  }>({
    visible: false,
    emoji: '',
    name: '',
  });

  const handleCopyEmoji = (emoji: string, name: string) => {
    navigator.clipboard
      .writeText(emoji)
      .then(() => {
        setCopiedEmoji(emoji);

        // Afficher notre propre notification
        setNotification({
          visible: true,
          emoji: emoji,
          name: name,
        });

        // Masquer après 2 secondes
        setTimeout(() => {
          setNotification((prev) => ({ ...prev, visible: false }));
          setCopiedEmoji(null);
        }, 2000);
      })
      .catch((err) => {
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
    <div className='relative'>
      {/* Notification personnalisée */}
      {notification.visible && (
        <div className='fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-black text-white py-2 px-4 rounded-lg shadow-lg flex items-center gap-2 animate-fade-in-up z-50'>
          <span className='text-xl'>{notification.emoji}</span>
          <div>
            <p className='font-medium'>Copied!</p>
            <p className='text-sm text-gray-300'>
              {notification.name} emoji copied
            </p>
          </div>
        </div>
      )}

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-4 justify-items-center'>
        {emojis.map((emoji) => (
          <EmojiCard
            key={emoji.id}
            emoji={emoji}
            isCopied={emoji.char === copiedEmoji}
            onCopy={() => handleCopyEmoji(emoji.char, emoji.name)}
          />
        ))}
      </div>
    </div>
  );
}
