/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
})

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
})

// const withPWA = require('next-pwa')
// const runtimeCaching = require('next-pwa/cache')

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
//   pwa: {
//     dest: 'public',
//     runtimeCaching,
//     webpack5: true,
//     register: true,
//     skipWaiting: true,
//     disable: process.env.NODE_ENV === 'development',
//   },
// })
