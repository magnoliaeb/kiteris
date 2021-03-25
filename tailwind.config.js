const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: '375px',
      sm: '425px',
      md: '768px',
      lg: '1024px',
      // xl: '1024px',
    },
    colors: {
      gray: colors.coolGray,
      blue: colors.blue,
      purple: colors.purple,
      black: colors.black,
      error: colors.rose,
      pink: colors.fuchsia,
      white: colors.white,
      orange: colors.yellow,
      green: colors.green
    },
    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      tiny: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.36rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2rem',
      '5xl': '2.125rem',
      '6xl': '2.25rem',
      '7xl': '2.36rem',
      '8xl': '2.5rem',
      '9xl': '2.875rem',
      '10xl': '3rem',
      '11xl': '3.125rem',
      '12xl': '3.36rem',
      '13xl': '3.5rem',
      '14xl': '3.125rem',
      '15xl': '3.36rem',
      '16xl': '3.5rem',
      '17xl': '3.875rem',
      '18xl': '4rem',
      '19xl': '4.125rem',
      '20xl': '4.36rem',
      '21xl': '4.5rem',
      '22xl': '4.875rem',
      '23xl': '5rem',
      '24xl': '5.125rem',
      '25xl': '5.36rem',
      '26xl': '5.5rem',
      '27xl': '5.625rem',
      '28xl': '5.875rem',
      '29xl': '6.125rem',
      '30xl': '6.36rem',
      '31xl': '6.5rem',
      '32xl': '6.625rem',
      '33xl': '7rem',
      '34xl': '7.125rem',
      '35xl': '7.36rem',
      '36xl': '7.5rem',
      '37xl': '7.625rem',
      '38xl': '7.875rem',
      '39xl': '8rem',
      '40xl': '8.125rem',
      '41xl': '8.36rem',
      '42xl': '8.5rem',
      '43xl': '8.625rem',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}