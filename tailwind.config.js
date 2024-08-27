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

        colors: {
        'dark-turquoise': '#266e92',
        'dark-turquoise-extended': '#266e92cc', // same color with transparency for a smoother gradient
        'dark-sky-blue': '#5dadd5',
        'greenish-black': '#081820',
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
      },
    },
  },

  plugins: [],
};
