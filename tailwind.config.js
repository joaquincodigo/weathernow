/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {

      backgroundImage: {
        'mosaic-pattern': "url('/images/bg_pattern.png')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },

      screens: {
        'xs': '425px' 
      },

      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },

    },
  },

  plugins: [],
};
