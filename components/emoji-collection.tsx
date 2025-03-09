'use client';

import { useState, useEffect } from 'react';
import EmojiGrid from './emoji-grid';
import SearchBar from './search-bar';
import CategoryFilter from './category-filter';
import { emojiData } from '@/lib/emoji-data';
import { useLanguage } from '@/lib/language-context';
import type { Emoji } from '@/lib/types';

export default function EmojiCollection() {
  const { language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredEmojis, setFilteredEmojis] = useState<Emoji[]>([]);

  // Extract unique categories from emoji data
  const categories = [
    'all',
    ...new Set(emojiData.map((emoji) => emoji.category)),
  ];

  useEffect(() => {
    // Filter emojis based on search term and selected category
    const filtered = emojiData.filter((emoji) => {
      const matchesSearch =
        searchTerm === '' ||
        emoji.name[language].toLowerCase().includes(searchTerm.toLowerCase()) ||
        emoji.keywords[language].some((keyword) =>
          keyword.toLowerCase().includes(searchTerm.toLowerCase())
        );

      const matchesCategory =
        selectedCategory === 'all' || emoji.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });

    setFilteredEmojis(filtered);
  }, [searchTerm, selectedCategory, language]);

  return (
    <div className='space-y-6'>
      <div className='flex flex-col md:flex-row gap-4'>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>
      <EmojiGrid emojis={filteredEmojis} />
    </div>
  );
}
