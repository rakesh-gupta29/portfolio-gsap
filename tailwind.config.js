/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        averta: ["Averta", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        red: "#f83d0c",
        black: "#131313",
        smoke: "#E6EBEC",
        blue: "#154EA5",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        "@font-face": {
          fontFamily: "Averta",
          fontWeight: "400",
          src: "url('/fonts/averta.otf')",
        },
      });
    }),
  ],
};
