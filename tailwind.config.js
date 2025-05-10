import {heroui} from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      colors: {
        primary: {
          DEFAULT: 'rgb(var(--color-primary))',
          50: 'rgba(var(--color-primary), 0.05)',
          100: 'rgba(var(--color-primary), 0.1)',
          200: 'rgba(var(--color-primary), 0.2)',
          300: 'rgba(var(--color-primary), 0.3)',
          400: 'rgba(var(--color-primary), 0.4)',
          500: 'rgba(var(--color-primary), 0.5)',
          600: 'rgba(var(--color-primary), 0.6)',
          700: 'rgba(var(--color-primary), 0.7)',
          800: 'rgba(var(--color-primary), 0.8)',
          900: 'rgba(var(--color-primary), 0.9)',
        },
        secondary: {
          DEFAULT: 'rgb(var(--color-secondary))',
          50: 'rgba(var(--color-secondary), 0.05)',
          100: 'rgba(var(--color-secondary), 0.1)',
          200: 'rgba(var(--color-secondary), 0.2)',
          300: 'rgba(var(--color-secondary), 0.3)',
          400: 'rgba(var(--color-secondary), 0.4)',
          500: 'rgba(var(--color-secondary), 0.5)',
          600: 'rgba(var(--color-secondary), 0.6)',
          700: 'rgba(var(--color-secondary), 0.7)',
          800: 'rgba(var(--color-secondary), 0.8)',
          900: 'rgba(var(--color-secondary), 0.9)',
        },
        accent: {
          DEFAULT: 'rgb(var(--color-accent))',
          50: 'rgba(var(--color-accent), 0.05)',
          100: 'rgba(var(--color-accent), 0.1)',
          200: 'rgba(var(--color-accent), 0.2)',
          300: 'rgba(var(--color-accent), 0.3)',
          400: 'rgba(var(--color-accent), 0.4)',
          500: 'rgba(var(--color-accent), 0.5)',
          600: 'rgba(var(--color-accent), 0.6)',
          700: 'rgba(var(--color-accent), 0.7)',
          800: 'rgba(var(--color-accent), 0.8)',
          900: 'rgba(var(--color-accent), 0.9)',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': {
            opacity: '1',
            boxShadow: '0 0 15px rgba(var(--color-primary), 0.5)'
          },
          '50%': {
            opacity: '.8',
            boxShadow: '0 0 30px rgba(var(--color-primary), 0.8)'
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'circuit-pattern': "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10 H 90 V 90 H 10 L 10 10' fill='none' stroke='rgba(255,255,255,0.03)' stroke-width='1'/%3E%3Cpath d='M30 30 H 70 V 70 H 30 L 30 30' fill='none' stroke='rgba(255,255,255,0.03)' stroke-width='1'/%3E%3Cpath d='M10 30 H 30 M 70 30 H 90 M 10 70 H 30 M 70 70 H 90' fill='none' stroke='rgba(255,255,255,0.03)' stroke-width='1'/%3E%3C/svg%3E\")",
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
}

module.exports = config;