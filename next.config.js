/** @type {import('next').NextConfig} */
const runtimeCaching = require('next-pwa/cache')
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
  runtimeCaching,
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
