/** @type {import('next').NextConfig} */
const { withExpo } = require('@expo/next-adapter')
const withPlugins = require('next-compose-plugins')
const withTM = require('next-transpile-modules')(['react-native-web'])
// const withImages = require('next-images')
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
})

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'images.unsplash.com',
      'platform-lookaside.fbsbx.com',
      'firebasestorage.googleapis.com',
      'www.worldatlas.com',
    ],
  },
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
}
// experimental: {
//   forceSwcTransforms: true,
// },
// webpack5: true,

module.exports = withPlugins(
  [
    [withTM],
    [withPWA],
    // [withImages, { projectRoot: __dirname }],
    [withExpo, { projectRoot: __dirname }],
  ],
  nextConfig
)
