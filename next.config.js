/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/Staking',
        destination: '/pages/Staking',
      },
      {
        source: '/eco-mining',
        destination: '/pages/EcoFriendlyMining',
      },
      {
        source: '/how-to-buy',
        destination: '/pages/HowToBuy',
      },
      {
        source: '/about',
        destination: '/pages/AboutBCE',
      },
    ]
  },
}

module.exports = nextConfig 