/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
      Poppins: ["Poppins", "sans-serif"]
    },
    extend: {
      screens: {
        "100px": "1050px",
        "1100px": "1110px",
        "808px": "880px",
        "1300px": "1300px",
        "400px": "400px",
      },
    },
  },
  plugins: [],
}