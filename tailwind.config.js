/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./components/**/*.{js,jsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
       fontFamily: {
        'sans': ['Open Sans', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
        'sans1  ': ['Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        'custom-gray-1': '#99A1A6'
      }
    },
  },
  plugins: [],
}