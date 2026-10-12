/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Jost', 'system-ui', 'sans-serif'],
      },
      colors: {
        cream: {
          50: '#fdfcf8',
          100: '#f9f6ef',
          200: '#f4f1ea',
          300: '#e8e2d4',
          400: '#d4cab5',
        },
        sage: {
          50: '#f2f5ef',
          100: '#e3e9dc',
          200: '#c7d3ba',
          300: '#a4b894',
          400: '#819e6b',
          500: '#6b8a55',
          600: '#566e44',
          700: '#44583a',
          800: '#384931',
          900: '#2d3a28',
        },
        // Text colours for the dark theme (ink-100 = brightest, ink-400 = dimmest)
        ink: {
          100: '#f0f0ea',
          200: '#d8d8d2',
          300: '#c0c0b8',
          400: '#a0a098',
        },
        charcoal: {
          800: '#161615',
          900: '#0d0d0c',
        },
        accent: {
          400: '#c4a87a',
          500: '#b89968',
          600: '#a08552',
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
