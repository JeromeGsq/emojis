'use client';

import { useState, useEffect } from 'react';
import EmojiGrid from './emoji-grid';
import SearchBar from './search-bar';
import CategoryFilter from './category-filter';
import { emojiData } from '@/lib/emoji-data';
import type { Emoji } from '@/lib/types';
import ScrollToTop from './scroll-to-top';
import { X } from 'lucide-react';

export default function EmojiCollection() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredEmojis, setFilteredEmojis] = useState<Emoji[]>([]);

  // Extract unique categories from emoji data
  const categories = [
    'all',
    ...new Set(emojiData.map((emoji) => emoji.category)),
  ];

  // Function to clear all filters
  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
  };

  // Déterminer si des filtres sont actifs
  const hasActiveFilters = searchTerm !== '' || selectedCategory !== 'all';

  useEffect(() => {
    // Filter emojis based on search term and selected category
    const filtered = emojiData.filter((emoji) => {
      const matchesSearch =
        searchTerm === '' ||
        emoji.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        emoji.keywords.some((keyword) =>
          keyword.toLowerCase().includes(searchTerm.toLowerCase())
        );

      const matchesCategory =
        selectedCategory === 'all' || emoji.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });

    setFilteredEmojis(filtered);
  }, [searchTerm, selectedCategory]);

  return (
    <div className='space-y-6'>
      <div className='flex flex-col md:flex-row gap-4 items-center'>
        <div className='flex-1 flex flex-col md:flex-row gap-4'>
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>

        {/* Bouton Clear avec uniquement l'icône */}
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className='flex-shrink-0 p-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md flex items-center justify-center transition-colors'
            aria-label='Clear filters'
            title='Clear filters'
          >
            <X size={20} />
          </button>
        )}
      </div>

      <div className='flex items-center justify-between'>
        <p className='text-sm text-gray-500'>
          {filteredEmojis.length} emoji{filteredEmojis.length !== 1 ? 's' : ''}{' '}
          found
        </p>
      </div>

      <EmojiGrid emojis={filteredEmojis} />
      <ScrollToTop />
    </div>
  );
}
