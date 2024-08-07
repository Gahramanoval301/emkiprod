/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary:'#101426',
        secondary: '#151A30',
        white: '#F7F9FC',
        pink:"#E32682",
      }
    },
  },
  plugins: [],
}

