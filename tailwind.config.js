module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        "light": '#f1efe3',
        "dark": '#221f14'
      },
      boxShadow: {
        '3xl': '10px 12px 0px 4px #000000',
        'btn': '6px 8px 0px 2px #000000',
        'btn-sm': '4px 6px 0px 0px #000000',
      }
    },
  },
  plugins: [],
}
