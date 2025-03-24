export const routeMap = {
    Home: "/",
    Staking: "/pages/Staking",
    EcoFriendlyMining: "/eco-mining",
    HowToBuy: "/how-to-buy",
    AboutBCE: "/about"
  } as const;
  export type LinkKeys = keyof typeof routeMap;

  export const Links = [
    'Home',
    'Staking',
    'EcoFriendlyMining',
    'HowToBuy',
    'AboutBCE'
  ] as const;