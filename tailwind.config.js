/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      sky: colors.sky,
      green: colors.green,
      purple: colors.purple,
      green: colors.green,
      pink: colors.pink,
      yellow: colors.yellow,
      wallcon: "#949be7",
    },
    extend: {},
  },
  plugins: [],
};
