/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        averta: ["Averta", "sans-serif"],
        questa: ["Questa", "sans-serif"],
        morionBold: ["Morion-Bold", "sans-serif"],
        morion: ["Morion", "sans-serif"],
      },
      colors: {
        dark: "#131313",
        smoke: "#f8f9fa",
        slate: "#444444",
        red: "#f83d0c",
        blue: "#154EA5",
      },
    },
  },
  plugins: [],
};
