module.exports = {
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      heading: ["Work Sans", "sans-serif"],
      body: ["Work Sans", "sans-serif"],
      special: ["Prata", "sans-serif"],
    },
    colors: {
      white: "#fff",
      black: "#151515",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
