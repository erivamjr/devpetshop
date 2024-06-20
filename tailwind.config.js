/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        dogFootprint: "url('./src/assets/dogFootprint.png')",
      },
    },
    colors: {
      blue: "#6EC1E4",
      green: "#A8E6CF",
      orange: "#FFAB76",
      white: "#ffffff",
      black: "#000000",
      gray: "#4F4F4F",
    },
  },
  plugins: [],
};
