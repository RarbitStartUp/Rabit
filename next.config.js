/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')

module.exports = withPWA({
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
    // domains: ['links.papareact.com'],
    // domains: ['ibb.co'],
  },
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
  },
})
