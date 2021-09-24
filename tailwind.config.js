const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
colors.emerald['500'] = '#009688';

console.log(colors.emerald);

module.exports = {
  purge: ['./dist/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        teal: colors.emerald,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
