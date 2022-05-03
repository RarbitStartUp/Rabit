/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['links.papareact.com'],
    domains: ['ibb.co'],
  },
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
  },
}
