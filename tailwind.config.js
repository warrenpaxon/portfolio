// tailwind.config.js
module.exports = {
  darkMode: 'class', // Enables class-based dark mode
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {},
    fontFamily: {
      Bungee: ['Bungee', 'cursive'],
      balsamiq: ['"Balsamiq Sans"', 'cursive'],
      Geologica: ['Geologica', 'sans-serif'],
      sans: ['Inter', 'sans-serif'],

    },
  },
  plugins: [],
};