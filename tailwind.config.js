module.exports = {
  purge: [
    "./src/app/*.{ts, html}", "./src/app/*/*.{ts, html}", "./src/app/*/*/*.{ts, html}"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
