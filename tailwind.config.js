/** @type {import('tailwindcss').Config} */
const { theme } = require('./src/lib/daisyui');
module.exports = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/features/**/*.{ts,tsx}',
  ],
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: [theme.dark, theme.light],
  },
};
