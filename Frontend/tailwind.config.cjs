/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'shredded':'#FB2576',
      },
      fontFamily:{
        candice:["Candice","bold"]
      }
    },
  },
  plugins: [],
}