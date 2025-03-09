import type { Emoji } from './types';
import rawEmojiData from '../public/emoji-data.json';
import {
  mainCategoryTranslations,
  subCategoryTranslations,
  translateToFrench,
} from './translations';

// Function to transform the complex nested JSON structure into a flat array of Emoji objects
// with support for both English and French
function transformEmojiData(): Emoji[] {
  const result: Emoji[] = [];
  let id = 1;

  const emojisByCategory = rawEmojiData.emojis;

  // Iterate through all main categories
  Object.entries(emojisByCategory).forEach(([mainCategory, subCategories]) => {
    const mainCategoryFr =
      mainCategoryTranslations[mainCategory] || mainCategory;

    // Iterate through all subcategories
    Object.entries(subCategories).forEach(([subCategory, emojis]) => {
      const subCategoryFr = subCategoryTranslations[subCategory] || subCategory;

      // Iterate through all emojis in this subcategory
      emojis.forEach((emoji: any) => {
        // English keywords
        const enKeywords = [
          mainCategory.toLowerCase(),
          subCategory.toLowerCase(),
          ...emoji.name.split(' '),
        ];

        // Translate emoji name to French using our simple translation function
        const frName = translateToFrench(emoji.name);

        // French keywords
        const frKeywords = [
          mainCategoryFr.toLowerCase(),
          subCategoryFr.toLowerCase(),
          ...frName.split(' '),
        ];

        result.push({
          id: String(id++),
          char: emoji.emoji,
          name: {
            en: emoji.name,
            fr: frName,
          },
          category: subCategory,
          keywords: {
            en: enKeywords,
            fr: frKeywords,
          },
        });
      });
    });
  });

  return result;
}

// Transform the raw data into the format our application needs
export const emojiData: Emoji[] = transformEmojiData();

// Helper function to get emojis in a specific language
export function getEmojisByLanguage(language: 'en' | 'fr'): Array<{
  id: string;
  char: string;
  name: string;
  category: string;
  keywords: string[];
}> {
  return emojiData.map((emoji) => ({
    id: emoji.id,
    char: emoji.char,
    category: emoji.category,
    name: emoji.name[language],
    keywords: emoji.keywords[language],
  }));
}
