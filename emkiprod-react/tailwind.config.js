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
        white_shadow:"#EDF1F7",
        pink:"#E32682",
      },
      borderRadius: {
        'bl-br-24': '24px',
      },
      screens: {
        'xs': '375px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',        
      }
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.rounded-bl-24': {
          'border-bottom-left-radius': '24px',
        },
        '.rounded-br-24': {
          'border-bottom-right-radius': '24px',
        },
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
    },
  ],
}

