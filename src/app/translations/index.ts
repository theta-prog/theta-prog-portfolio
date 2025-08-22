import { ja } from './ja';
import { en } from './en';

export const translations = {
  ja,
  en
};

export type TranslationKey = keyof typeof ja;
export type Language = keyof typeof translations;
