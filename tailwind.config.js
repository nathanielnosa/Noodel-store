/** @type {import('tailwindcss').Config} */


module.exports = {
  content: ["public/*.{html,js }"],
  theme: {
    extend: {
      colors:{
        mainColor:'#c3523f',
        secondaryColor:{
          100:'#e2esd5',
          200:'#888883',
        },
      },
      fontFamily:{
        main:['Titillium Web']
      },

      backgroundImage:{
        backdrop: "url('assets/img/back-1.jpg')"
      }
    },
  },
  plugins: [],
}

