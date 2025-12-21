import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Liquid Gold Palette
        gold: {
          50: '#FFFBF0',
          100: '#FFF5DC',
          200: '#FFE9B8',
          300: '#FFD583',
          400: '#F5A623',
          500: '#E69500',
          600: '#C77800',
          700: '#A35A00',
          800: '#7A4300',
          900: '#522D00',
        },
        amber: {
          400: '#FF8A00',
          500: '#E67700',
        },
        // Deep Noir Backgrounds
        noir: {
          50: '#F5F5F8',
          100: '#E0E0E8',
          200: '#B5B5C0',
          300: '#8A8A95',
          400: '#5A5A62',
          500: '#3A3A3F',
          600: '#252528',
          700: '#1A1A1D',
          800: '#111113',
          900: '#0A0A0B',
          950: '#050506',
        },
      },
      fontFamily: {
        display: ['Clash Display', 'system-ui', 'sans-serif'],
        body: ['Satoshi', 'system-ui', 'sans-serif'],
        hebrew: ['Heebo', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gold-gradient': 'linear-gradient(135deg, #FFD583 0%, #F5A623 50%, #FF8A00 100%)',
        'gold-glow': 'radial-gradient(ellipse at center, rgba(245, 166, 35, 0.15) 0%, transparent 70%)',
        'noir-gradient': 'linear-gradient(180deg, #0A0A0B 0%, #111113 50%, #0A0A0B 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 2s',
        'pulse-gold': 'pulse-gold 2s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'morph': 'liquid-morph 20s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slide-up 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-down': 'slide-down 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        'fade-in': 'fade-in 0.6s ease-out',
        'scale-in': 'scale-in 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-gold': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.05)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '0% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'liquid-morph': {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '25%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
          '50%': { borderRadius: '50% 60% 30% 60% / 30% 40% 70% 50%' },
          '75%': { borderRadius: '60% 40% 60% 30% / 70% 50% 40% 60%' },
        },
        'glow': {
          '0%': { boxShadow: '0 0 30px rgba(245, 166, 35, 0.2)' },
          '100%': { boxShadow: '0 0 60px rgba(245, 166, 35, 0.4)' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-down': {
          '0%': { opacity: '0', transform: 'translateY(-15px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      boxShadow: {
        'gold': '0 0 40px rgba(245, 166, 35, 0.2)',
        'gold-lg': '0 0 60px rgba(245, 166, 35, 0.3)',
        'gold-xl': '0 0 100px rgba(245, 166, 35, 0.4)',
        'inner-gold': 'inset 0 0 40px rgba(245, 166, 35, 0.1)',
        'card': '0 4px 30px rgba(0, 0, 0, 0.3)',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
        'in-out-expo': 'cubic-bezier(0.87, 0, 0.13, 1)',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
    },
  },
  plugins: [],
}

export default config
