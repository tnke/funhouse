module.exports = {
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      heading: ["Prata", "sans-serif"],
      body: ["Roboto", "sans-serif"],
      special: ["Oi", "sans-serif"],
    },
    colors: {
      white: "#f6f7f0",
      pureWhite: "#fff",
      black: "#121418",
      chill: "#788273",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
