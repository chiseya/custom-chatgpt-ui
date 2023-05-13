/** @type {import('tailwindcss').Config} */
const { theme } = require('./src/lib/daisyui');
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: [theme.dark, theme.light],
  },
};
