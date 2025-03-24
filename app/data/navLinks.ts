export const Links = ['Home', 'Staking', 'EcoFriendlyMining', 'HowToBuy', 'AboutBCE'];

export const routeMap: { [key: string]: string } = {
  Home: '/',
  Staking: '/staking',
  EcoFriendlyMining: '/eco-mining',
  HowToBuy: '/how-to-buy',
  AboutBCE: '/about'
};

export type LinkKeys = keyof typeof routeMap;