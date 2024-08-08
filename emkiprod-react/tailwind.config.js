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
<<<<<<< HEAD
        white: '#F7F9FC',
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
        'xs' : '350px'
=======
        white_: '#F7F9FC',
        pink: "#E32682",
        
>>>>>>> 9cecfadf5bb5e672e52036b92cb67621db0e3655
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

