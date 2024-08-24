/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      colors:{
        'primary-color':'#0888FF',
        'secondary-color':'#4b60ee',
        'gray-primary':'#f5f6fa',
        'gray-secondary':'#f5f5f5',
        'dark-light-primary':'#171d2bbd'
      }
    },
  },
  plugins: [],
}

