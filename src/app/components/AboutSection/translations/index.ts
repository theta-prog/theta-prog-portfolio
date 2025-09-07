import type { Language } from '@/app/translations';
import { ja } from './ja';
import { en } from './en';

export type AboutTranslations = typeof ja;

export const translations: Record<Language, AboutTranslations> = {
  ja,
  en,
};
