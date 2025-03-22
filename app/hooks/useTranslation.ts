import { useLanguage } from '../context/LanguageContext';
import type { TranslationType, SupportedLanguages } from '../types/translation';
import en from '../translations/en.json';
import ru from '../translations/ru.json';
import de from '../translations/de.json';

const translations: Record<SupportedLanguages, TranslationType> = {
  en,
  ru,
  de,
};

export function useTranslation() {
  const { language } = useLanguage();

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: unknown = translations[language];

    for (const k of keys) {
      if (typeof value === 'object' && value !== null) {
        value = (value as Record<string, unknown>)[k];
      } else {
        return key;
      }
    }

    return typeof value === 'string' ? value : key;
  };

  return { t };
} 