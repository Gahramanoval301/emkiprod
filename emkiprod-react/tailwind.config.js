/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          default: '#101426',
          light: '#192038',
        },
        secondary: '#151A30',
        white_: '#F7F9FC',
        pink: "#E32682",
        
      }
    },
  },
  plugins: [],
}

