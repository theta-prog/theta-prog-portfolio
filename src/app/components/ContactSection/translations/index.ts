import type { Language } from '@/app/translations';
import { ja } from './ja';
import { en } from './en';

export type ContactTranslations = typeof ja;

export const translations: Record<Language, ContactTranslations> = {
  ja,
  en,
};
