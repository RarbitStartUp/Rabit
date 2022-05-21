/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')

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
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development',
  },
})
