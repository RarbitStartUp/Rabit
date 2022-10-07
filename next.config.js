/** @type {import('next').NextConfig} */
// const withPWA = require('next-pwa')({
//   dest: 'public',
//   register: true,
//   skipWaiting: true,
//   disable: process.env.NODE_ENV === 'development',
// })

// module.exports = withPWA({
//   reactStrictMode: true,
//   images: {
//     domains: [
//       'images.unsplash.com',
//       'platform-lookaside.fbsbx.com',
//       'firebasestorage.googleapis.com',
//       'www.worldatlas.com',
//     ],
//   },
// })

/* eslint-disable @typescript-eslint/no-var-requires */
const withTM = require('next-transpile-modules')([
  '@blocto/sdk',
  '@project-serum/sol-wallet-adapter',
  '@solana/wallet-adapter-base',
  '@solana/wallet-adapter-react',
  '@solana/wallet-adapter-bitkeep',
  '@solana/wallet-adapter-bitpie',
  '@solana/wallet-adapter-blocto',
  '@solana/wallet-adapter-clover',
  '@solana/wallet-adapter-coin98',
  '@solana/wallet-adapter-coinhub',
  '@solana/wallet-adapter-ledger',
  '@solana/wallet-adapter-mathwallet',
  '@solana/wallet-adapter-phantom',
  '@solana/wallet-adapter-safepal',
  '@solana/wallet-adapter-slope',
  '@solana/wallet-adapter-solflare',
  '@solana/wallet-adapter-sollet',
  '@solana/wallet-adapter-solong',
  '@solana/wallet-adapter-tokenpocket',
  '@solana/wallet-adapter-torus',
  '@solana/wallet-adapter-wallets',
])

const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = withPWA({
  reactStrictMode: true,
  images: {
    domains: [
      'images.unsplash.com',
      'platform-lookaside.fbsbx.com',
      'firebasestorage.googleapis.com',
      'www.worldatlas.com',
    ],
  },
  pwa: {
    dest: 'public',
    runtimeCaching,
    webpack5: true,
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development',
  },
})
