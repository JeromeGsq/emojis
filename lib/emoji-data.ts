import type { Emoji } from './types';
import rawEmojiData from '../public/emoji-data.json';

// Les emojis couramment utilisés dans les commits Git
const gitmojiChars = [
  '🎨', // :art: Améliorer la structure/format du code
  '⚡️', // :zap: Améliorer les performances
  '🔥', // :fire: Supprimer du code ou des fichiers
  '🐛', // :bug: Corriger un bug
  '🚑️', // :ambulance: Correction critique
  '✨', // :sparkles: Introduire de nouvelles fonctionnalités
  '📝', // :memo: Ajouter ou mettre à jour la documentation
  '🚀', // :rocket: Déploiement
  '💄', // :lipstick: Ajouter ou mettre à jour l'UI et le style
  '🎉', // :tada: Commencer un projet
  '✅', // :white_check_mark: Ajouter, mettre à jour ou passer des tests
  '🔒️', // :lock: Résoudre des problèmes de sécurité
  '🔖', // :bookmark: Tags de version/release
  '🚨', // :rotating_light: Corriger les avertissements du compilateur/linter
  '🚧', // :construction: Travail en cours
  '💚', // :green_heart: Corriger les builds CI
  '⬇️', // :arrow_down: Downgrade de dépendances
  '⬆️', // :arrow_up: Upgrade de dépendances
  '📌', // :pushpin: Épingler des dépendances à des versions spécifiques
  '👷', // :construction_worker: Ajouter ou mettre à jour le système de CI
  '📈', // :chart_with_upwards_trend: Ajouter ou mettre à jour des analyses ou du tracking
  '♻️', // :recycle: Refactoriser du code
  '➕', // :heavy_plus_sign: Ajouter une dépendance
  '➖', // :heavy_minus_sign: Supprimer une dépendance
  '🔧', // :wrench: Ajouter ou mettre à jour des fichiers de configuration
  '🔨', // :hammer: Ajouter ou mettre à jour des scripts de développement
  '🌐', // :globe_with_meridians: Internationalisation et localisation
  '✏️', // :pencil2: Corriger des fautes de frappe
  '💩', // :poop: Améliorer du code déficient
  '⏪️', // :rewind: Revenir à une version précédente
  '🔀', // :twisted_rightwards_arrows: Fusionner des branches
  '📦️', // :package: Ajouter ou mettre à jour des assets compilés ou des packages
  '👽️', // :alien: Mettre à jour du code suite à des API externes
  '🚚', // :truck: Déplacer ou renommer des ressources
  '📄', // :page_facing_up: Ajouter ou mettre à jour une licence
  '💥', // :boom: Introduire des changements majeurs
  '🍱', // :bento: Ajouter ou mettre à jour des assets
  '♿️', // :wheelchair: Améliorer l'accessibilité
  '💡', // :bulb: Ajouter ou mettre à jour des commentaires
  '🍻', // :beers: Écrire du code sous l'influence
  '💬', // :speech_balloon: Ajouter ou mettre à jour du texte ou des litéraux
  '🗃️', // :card_file_box: Faire des changements liés à la base de données
  '🔊', // :loud_sound: Ajouter ou mettre à jour des logs
  '🔇', // :mute: Supprimer des logs
  '👥', // :busts_in_silhouette: Ajouter ou mettre à jour des contributeurs
  '🚸', // :children_crossing: Améliorer l'expérience utilisateur
  '🏗️', // :building_construction: Apporter des changements architecturaux
  '📱', // :iphone: Travailler sur le design responsive
  '🤡', // :clown_face: Mocking
  '🥚', // :egg: Ajouter un easter egg
  '🙈', // :see_no_evil: Ajouter ou mettre à jour un .gitignore
  '📸', // :camera_flash: Ajouter ou mettre à jour des snapshots
  '⚗️', // :alembic: Réaliser des expérimentations
  '🔍️', // :mag: Améliorer le SEO
  '🏷️', // :label: Ajouter ou mettre à jour des types
  '🌱', // :seedling: Ajouter ou mettre à jour du code de démarrage/config
  '🚩', // :triangular_flag_on_post: Ajouter, mettre à jour ou supprimer des feature flags
  '🥅', // :goal_net: Capturer des exceptions
  '💫', // :dizzy: Ajouter ou mettre à jour des animations et transitions
  '🗑️', // :wastebasket: Déprécier du code qui a besoin d'être nettoyé
];

// Function to transform the complex nested JSON structure into a flat array of Emoji objects
function transformEmojiData(): Emoji[] {
  const result: Emoji[] = [];
  let id = 1;

  // Créer les emojis standard à partir du JSON
  const emojisByCategory = rawEmojiData.emojis;

  // Iterate through all main categories
  Object.entries(emojisByCategory).forEach(([mainCategory, subCategories]) => {
    // Iterate through all subcategories
    Object.entries(subCategories as Record<string, any[]>).forEach(
      ([subCategory, emojis]) => {
        // Iterate through all emojis in this subcategory
        emojis.forEach((emoji: any) => {
          // Keywords
          const keywords = [
            mainCategory.toLowerCase(),
            subCategory.toLowerCase(),
            ...emoji.name.split(' '),
          ];

          // Vérifier si c'est un gitmoji
          const isGitmoji = gitmojiChars.includes(emoji.emoji);

          // Ajouter des mots-clés spécifiques pour les gitmojis
          if (isGitmoji) {
            keywords.push('gitmoji', 'git', 'commit', 'version control');
          }

          result.push({
            id: String(id++),
            char: emoji.emoji,
            name: emoji.name,
            // Utiliser la catégorie "gitmoji" si c'est un gitmoji
            category: isGitmoji ? 'gitmoji' : subCategory,
            keywords: keywords,
          });
        });
      }
    );
  });

  return result;
}

// Transform the raw data into the format our application needs
export const emojiData: Emoji[] = transformEmojiData();
