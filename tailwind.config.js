/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      'montserrat': ['"Montserrat Alternates"', 'sans-serif']
    },
    extend: {
      colors: {
        'theme-davys-grey': '#4D4D4D', 
        'theme-vermillion': '#CD4631',
        'theme-pewter-blue': '#81ADC8',
        'theme-champagne': '#F7EDE8',
        'theme-alice-blue': '#EDF3F7',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}