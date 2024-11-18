/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      currentColor: "currentColor",
      transparent: "transparent",
      green: {
        50: "#eefbf3",
        100: "#d6f5e1",
        200: "#b1e9c8",
        300: "#7ed7a9",
        400: "#49be84",
        500: "#26a269",
        600: "#188354",
        700: "#136945",
        800: "#125339",
        900: "#0f4530",
        950: "#08261b",
      },
      black: {
        50: "#f6f6f6",
        100: "#e7e7e7",
        200: "#d1d1d1",
        300: "#b0b0b0",
        400: "#888888",
        500: "#6d6d6d",
        600: "#5d5d5d",
        700: "#4f4f4f",
        800: "#454545",
        900: "#3d3d3d",
        950: "#000000",
      },
    },
  },
  plugins: [],
};
