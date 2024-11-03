/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}', './public/index.html'],
  theme: {
    colors:{
      brand:"#0541FB",
      black:"#000000",
      white:"#FFFFFF",
    },
    extend: {
      fontFamily: {
        primary: ["Schoolbell"], 
        secondary: ["Brother"],
        heading: ["Komika Slick"],
      },
      dropShadow: {
        heading: [
          "-0.045vw -0.045vw 0px rgba(5,65,251,1)",
          "0.09vw -0.18vw 0px rgba(5,65,251,1)",
          "-0.09vw 0.09vw 0px rgba(5,65,251,1)",
          "0.45vmax 0.45vmax 0px rgba(5,65,251,1)",
        ],
      }
    },
  },
  
  plugins: [],
}

