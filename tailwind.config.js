/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito Sans', 'sans-serif'],
      },
      fontSize: {
        'heading-lg': ['1.5rem', { lineHeight: '140%' }],
        'heading-md': ['1.25rem', { lineHeight: '140%' }],
        'heading-sm': ['1.125rem', { lineHeight: '140%' }],
        'heading-xs': ['1rem', { lineHeight: '140%' }],
        lg: ['1.25rem', { lineHeight: '160%' }],
        md: ['1rem', { lineHeight: '160%' }],
        sm: ['0.875rem', { lineHeight: '160%' }],
        'button-lg': ['1.125rem', { lineHeight: '160%' }],
        'button-md': ['1rem', { lineHeight: '160%' }],
        'button-sm': ['0.875rem', { lineHeight: '160%' }],
      },
      colors: {
        green: {
          100: '#50B2C0',
          200: '#255D6A',
          300: '#0A313C',
        },
        purple: {
          100: '#8381D9',
          200: '#2A2879',
        },
        gray: {
          100: '#F8F9FC',
          200: '#E6E8F2',
          300: '#D1D6E4',
          400: '#8D95AF',
          500: '#303F73',
          600: '#252D4A',
          700: '#181C2A',
          800: '#0E1116',
        },
      },
      backgroundImage: {
        'gradient-horizontal':
          'linear-gradient(90deg, #7FD1CC 0%, #9694F5 100%)',
        'gradient-vertical':
          'linear-gradient(180deg, #7FD1CC 0%, #9694F5 100%)',
      },
    },
  },
  plugins: [],
}
