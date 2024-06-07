/** @type {import('tailwindcss').Config} */
const { nextui } = require('@nextui-org/react');
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      colors: {
        whiteAccent: '#f5f3f5',
        purpleAccent: '#201740',
        purpleLightAccent: '#6E34BF',
        purpleGrayAccent: '#42208C',
        yellowAccent: '#F2A20C',
      },
      screens: {
        xs: { raw: '(max-width: 550px)' },
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
};
