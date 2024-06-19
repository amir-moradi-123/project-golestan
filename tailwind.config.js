/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html"],
  darkMode:"class",
  theme: {
    screens:{
      "mobile":"0",
      "desctop":"1000px",
    },
    extend: {
fontFamily:{
  'fontsans':"fontgol",

},
    },
  },
  plugins: [],
}

