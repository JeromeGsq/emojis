import type { Emoji } from './types';
import rawEmojiData from '../public/emoji-data.json';

// Function to transform the complex nested JSON structure into a flat array of Emoji objects
function transformEmojiData(): Emoji[] {
  const result: Emoji[] = [];
  let id = 1;

  const emojisByCategory = rawEmojiData.emojis;

  // Iterate through all main categories
  Object.entries(emojisByCategory).forEach(([mainCategory, subCategories]) => {
    // Iterate through all subcategories
    Object.entries(subCategories).forEach(([subCategory, emojis]) => {
      // Iterate through all emojis in this subcategory
      emojis.forEach((emoji: any) => {
        result.push({
          id: String(id++),
          char: emoji.emoji,
          name: emoji.name,
          category: subCategory,
          keywords: [
            mainCategory.toLowerCase(),
            subCategory.toLowerCase(),
            ...emoji.name.split(' '),
          ],
        });
      });
    });
  });

  return result;
}

// Transform the raw data into the format our application needs
export const emojiData: Emoji[] = transformEmojiData();
