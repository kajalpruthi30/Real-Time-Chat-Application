/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors:{
        searchInputColor: '#5d5b8d',
        sidebarBorder: '#3e3c61',
        messageBackground: '#8da4f1',
        submitButton: '#8da4f1',
        lightGray: '#DCDCDC',
        blueShade: '#a7bcff',
      }
    },
  },
  plugins: [require("daisyui")],
}

