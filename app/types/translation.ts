export type SupportedLanguages = 'en' | 'ru' | 'de';

export interface TranslationType {
  nav: {
    home: string;
    staking: string;
    ecoFriendlyMining: string;
    howToBuy: string;
    aboutBCE: string;
    buyBce: string;
  };
  hero: {
    title: string;
    subtitle: string;
  };
  features: {
    title: string;
    description: string;
    items: {
      security: string;
      speed: string;
      reliability: string;
    };
  };
  footer: {
    copyright: string;
    links: {
      privacy: string;
      terms: string;
      support: string;
    };
  };
}