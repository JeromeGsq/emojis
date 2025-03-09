// Traductions des catégories principales
export const mainCategoryTranslations: Record<string, string> = {
  'Smileys & Emotion': 'Smileys et émotions',
  'People & Body': 'Personnes et corps',
  'Animals & Nature': 'Animaux et nature',
  'Food & Drink': 'Nourriture et boissons',
  'Travel & Places': 'Voyage et lieux',
  Activities: 'Activités',
  Objects: 'Objets',
  Symbols: 'Symboles',
  Flags: 'Drapeaux',
};

// Traductions des sous-catégories
export const subCategoryTranslations: Record<string, string> = {
  // Smileys & Emotion
  'face-smiling': 'visage-souriant',
  'face-affection': 'visage-affectueux',
  'face-tongue': 'visage-langue',
  'face-hand': 'visage-main',
  'face-neutral-skeptical': 'visage-neutre-sceptique',
  'face-sleepy': 'visage-somnolent',
  'face-unwell': 'visage-malade',
  'face-hat': 'visage-chapeau',
  'face-glasses': 'visage-lunettes',
  'face-concerned': 'visage-inquiet',
  'face-negative': 'visage-négatif',
  'face-costume': 'visage-costume',
  'cat-face': 'visage-chat',
  'monkey-face': 'visage-singe',
  emotion: 'émotion',

  // People & Body
  'hand-fingers-open': 'main-doigts-ouverts',
  'hand-fingers-partial': 'main-doigts-partiels',
  'hand-single-finger': 'main-doigt-unique',
  'hand-fingers-closed': 'main-doigts-fermés',
  hands: 'mains',
  'hand-prop': 'main-accessoire',
  'body-parts': 'parties-du-corps',
  person: 'personne',
  'person-gesture': 'personne-geste',
  'person-role': 'personne-rôle',
  'person-fantasy': 'personne-fantaisie',
  'person-activity': 'personne-activité',
  'person-sport': 'personne-sport',
  'person-resting': 'personne-repos',
  family: 'famille',
  'person-symbol': 'personne-symbole',

  // Autres catégories principales et leurs sous-catégories peuvent être ajoutées ici
};

// Dictionnaire de traductions anglais-français pour mots communs dans les noms d'emoji
export const commonWordTranslations: Record<string, string> = {
  face: 'visage',
  smiling: 'souriant',
  grinning: 'sourire',
  tears: 'larmes',
  joy: 'joie',
  heart: 'cœur',
  hearts: 'cœurs',
  star: 'étoile',
  kiss: 'baiser',
  kissing: 'embrassant',
  eyes: 'yeux',
  hand: 'main',
  hands: 'mains',
  thumbs: 'pouces',
  up: 'haut',
  down: 'bas',
  smile: 'sourire',
  happy: 'heureux',
  sad: 'triste',
  angry: 'en colère',
  love: 'amour',
  crying: 'pleurant',
  laugh: 'rire',
  laughing: 'riant',
  thinking: 'pensif',
  with: 'avec',
  and: 'et',
  of: 'de',
  the: 'le',
  a: 'un',
  big: 'grand',
  small: 'petit',
  red: 'rouge',
  blue: 'bleu',
  green: 'vert',
  yellow: 'jaune',
  black: 'noir',
  white: 'blanc',
  // Ajoutez d'autres traductions au besoin
};

/**
 * Fonction basique pour traduire un texte anglais en français
 * en utilisant le dictionnaire de traductions.
 *
 * Note: Cette approche est simpliste et ne gère pas les complexités linguistiques.
 * Pour une application en production, utilisez un service de traduction ou des fichiers de traduction complets.
 */
export function translateToFrench(text: string): string {
  // Diviser le texte en mots
  const words = text.toLowerCase().split(' ');

  // Traduire chaque mot s'il existe dans le dictionnaire
  const translatedWords = words.map(
    (word) => commonWordTranslations[word] || word
  );

  // Reconstruire le texte
  return translatedWords.join(' ');
}
