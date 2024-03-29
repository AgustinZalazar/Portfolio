/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black_gray: "#101521",
        black_darkgray: "#191F2B",
        orange: "#cd643a",
        dark_orange: "#ce4d19",
        light_orange: "#e57244"
      },
      animation: {
        reveal: 'reveal 0.8s forwards',
      },
      keyframes: {
        reveal: {
          '0%': {
            transform: 'translatey(100%)',
          },
          '100%': {
            transform: 'translatey(0)',
          },
        },
      },
      fontFamily: {
        secondary: ['PoppinsLight'],
        secondary_bold: ['PoppinsBold'],
      },
    },
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          'animation-delay': (value) => {
            return {
              'animation-delay': value,
            }
          },
        },
        {
          values: theme('transitionDelay'),
        }
      )
    }),
  ],
}
