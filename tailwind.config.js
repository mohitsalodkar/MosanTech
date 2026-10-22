/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          50: '#FDF2F4',
          100: '#FBE6EA',
          200: '#F5C2CB',
          300: '#E890A3',
          400: '#B83257',
          500: '#8B1A3A',
          600: '#6B0F2A', // Primary burgundy
          700: '#520B20',
          800: '#3D0716', // Darker burgundy
          900: '#26040E',
          950: '#1A0509', // Deep dark burgundy-black
        },
        gold: {
          50: '#FAF7F0',
          100: '#F4ECE0',
          200: '#E6D3A3', // Light champagne gold
          300: '#D9C189',
          400: '#C9A66B', // Champagne/antique gold
          500: '#B68F4E',
          600: '#A8803F', // Deep antique gold
          700: '#8A672E',
          800: '#6B4F23',
          900: '#4D3819',
        },
        cream: {
          50: '#FFFFFF',
          100: '#FDFBF7',
          200: '#FBF6EE', // Warm cream/ivory
          300: '#F6EEDB',
          400: '#EFE2C5',
          500: '#E2CE9F',
        },
      },
      fontFamily: {
        serif: ['"Cinzel"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        'luxury': '0.22em',
        'ultra-wide': '0.35em',
      },
      boxShadow: {
        'gold-glow': '0 0 25px -4px rgba(201, 166, 107, 0.28)',
        'gold-glow-lg': '0 0 45px -4px rgba(201, 166, 107, 0.4)',
        'burgundy-glow': '0 0 35px -5px rgba(107, 15, 42, 0.45)',
        'luxury-card': '0 12px 35px -5px rgba(26, 5, 9, 0.08), 0 2px 12px rgba(201, 166, 107, 0.1)',
        'luxury-dark': '0 20px 45px -10px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(201, 166, 107, 0.2)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #E6D3A3 0%, #C9A66B 50%, #A8803F 100%)',
        'gold-gradient-soft': 'linear-gradient(135deg, rgba(230,211,163,0.18) 0%, rgba(201,166,107,0.35) 100%)',
        'burgundy-gradient': 'linear-gradient(135deg, #8B1A3A 0%, #6B0F2A 50%, #3D0716 100%)',
        'hero-overlay': 'radial-gradient(ellipse at center, rgba(107, 15, 42, 0.72) 0%, rgba(26, 5, 9, 0.94) 100%)',
      },
      keyframes: {
        'pulse-subtle': {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.04)', opacity: '0.85' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        'pulse-subtle': 'pulse-subtle 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
