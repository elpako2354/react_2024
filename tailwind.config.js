/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': '#1e90ff',
        'secondary': '#ff0000',
        'tertiary': '#00ff00',
        'quaternary': '#ffff00',
        'quinary': '#00ffff',
        'senary': '#ff00ff',
      },
    },
  },
  plugins: [],
}