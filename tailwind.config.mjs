/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0B1F33',
          dark: '#071522',
          900: '#071522',
          800: '#0B1F33',
          700: '#102033',
          600: '#1E324A',
          500: '#2A4362',
        },
        solar: {
          DEFAULT: '#F5B942',
          gold: '#F5B942',
          hover: '#E5A72F',
          50: '#FFFBEB',
          100: '#FEF3C7',
          400: '#F5B942',
          500: '#F5B942',
          600: '#E5A72F',
        },
        energy: {
          DEFAULT: '#19A974',
          green: '#19A974',
          hover: '#148C5F',
          light: '#DDF7EC',
          500: '#19A974',
          600: '#148C5F',
        },
        surface: {
          bg: '#F7F9FC',
          card: '#FFFFFF',
          textPrimary: '#102033',
          textSecondary: '#5B6878',
          border: '#E2E8F0',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'solar-glow': '0 10px 30px -10px rgba(245, 185, 66, 0.35)',
        'card-soft': '0 4px 20px -2px rgba(11, 31, 51, 0.06), 0 2px 6px -1px rgba(11, 31, 51, 0.03)',
        'card-hover': '0 20px 35px -5px rgba(11, 31, 51, 0.1), 0 10px 15px -5px rgba(11, 31, 51, 0.04)',
        'nav': '0 4px 20px 0 rgba(0, 0, 0, 0.03)',
      }
    },
  },
  plugins: [],
}
