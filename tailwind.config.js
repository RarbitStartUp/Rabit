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
        third: '#52525B',
        content: '#7b80b3',
        miniIcon: '#D8D26C',
        icon: '#C2C5CC ',
        hover: '#8B5CF6',
      },
      animation: {
        slideL: 'slideL 500ms linear',
        slideR: 'slideR 500ms linear',
      },
      keyframes: {
        slideL: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideR: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
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
