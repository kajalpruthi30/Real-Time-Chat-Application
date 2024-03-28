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
        headerBackground: '#5d5b8d',
        messagesBackground: '#ddddf7',
        messageBackground: '#8da4f1',
        submitButton: '#8da4f1',
        sidebarBackground: '#3e3c61',
        conversationHover: '#2f2d52',
        lightGray: '#DCDCDC',
        blueShade: '#a7bcff',
        blueShadeHover: '#5d5b8d'
      }
    },
  },
  plugins: [require("daisyui")],
}

