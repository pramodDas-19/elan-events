import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFCFB',
          100: '#FAFAF8',
          200: '#F5EFE6',
          300: '#EDE4D8',
          400: '#E0D2C0',
        },
        burgundy: {
          50: '#FDF4F6',
          100: '#FAE8EC',
          600: '#7E2536',
          700: '#5E1925',
          800: '#48111B',
          900: '#320B12',
        },
        gold: {
          100: '#FBF5E6',
          200: '#F3E4BF',
          300: '#DFC27D',
          400: '#C5A059',
          500: '#A9823A',
        },
        charcoal: {
          900: '#181514',
          800: '#2A2624',
          700: '#3D3835',
          600: '#554F4B',
          500: '#6B655F',
          400: '#8C857E',
        }
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['var(--font-manrope)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
