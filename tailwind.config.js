/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'neon-blue': '#00f3ff',
        'neon-purple': '#9d00ff',
        'dark-bg': '#0a0b1e',
        'cyber-grid': '#1a1b3d',
      },
      boxShadow: {
        'neon': '0 0 10px rgba(0, 243, 255, 0.5)',
      },
    },
  },
  plugins: [],
};