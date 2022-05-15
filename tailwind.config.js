module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8B5CF6',
        secondary: '#D5D5D5',
        icon: '#B9B9B9',
      },
    },
    fontFamily: {
      vali: ['VALORANT'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tw-elements/dist/plugin'),
    require('flowbite/plugin'),
  ],
}
