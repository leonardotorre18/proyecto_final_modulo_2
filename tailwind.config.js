/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mainColor': '#F25C05',
        'white': '#F2F2F2',
        'black': '#2e2e2e'
      }
    },
  },
  plugins: [],
}