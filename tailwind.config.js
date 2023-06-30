/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/pages/**/*.tsx', 'src/components/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Nunito, sans-serif',
      },
      colors: {
        white: '#ffffff',
        black: '#000000',

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
      borderRadius: {
        xs: '0.15625rem',
        sm: '0.3125rem',
        md: '0.625rem',
        lg: '1.25rem',
      },
      backgroundImage: {
        'gradient-vertical': `linear-gradient(180deg, #7FD1CC 0%, #9694F5 100%)`,
        'gradient-horizontal': `linear-gradient(90deg, #7FD1CC 0%, #9694F5 100%)`,
      },
    },
  },
  plugins: [],
}
