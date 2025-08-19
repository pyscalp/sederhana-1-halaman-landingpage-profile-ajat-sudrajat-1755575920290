/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb', // blue-600
        secondary: '#4f46e5', // indigo-600
        accent: '#9333ea' // purple-600
      }
    },
  },
  plugins: [],
}