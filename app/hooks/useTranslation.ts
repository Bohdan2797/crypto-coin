import { useLanguage } from '../context/LanguageContext';
import type { TranslationType, SupportedLanguages } from '../types/translation';
import en from '../translations/en.json';
import ru from '../translations/ru.json';
import de from '../translations/de.json';

const translations: Record<SupportedLanguages, TranslationType> = {
  en,
  ru,
  de
};

export function useTranslation() {
  const { language } = useLanguage();

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) return key;
    }
    
    return value;
  };

  return { t };
} 