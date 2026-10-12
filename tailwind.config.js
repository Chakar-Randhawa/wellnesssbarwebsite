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
        charcoal: {
          400: '#4a4a48',
          500: '#3a3a38',
          600: '#2c2c2a',
          700: '#1e1e1c',
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
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.7s ease-out forwards',
        'fade-in-delay-1': 'fadeInUp 0.7s ease-out 0.15s forwards',
        'fade-in-delay-2': 'fadeInUp 0.7s ease-out 0.3s forwards',
        'fade-in-delay-3': 'fadeInUp 0.7s ease-out 0.45s forwards',
        'slide-out': 'slideOut 0.4s ease-out forwards',
        'slide-in-right': 'slideInRight 0.4s ease-out forwards',
        'float-slow': 'floatSlow 8s ease-in-out infinite',
        'float-slower': 'floatSlow 12s ease-in-out infinite',
        'pulse-ring': 'pulseRing 2s ease-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideOut: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(20px, -30px) scale(1.05)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.8)', opacity: '0.5' },
          '100%': { transform: 'scale(2)', opacity: '0' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
    },
  },
  plugins: [],
};
