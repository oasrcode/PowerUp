/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primario':'#FB2576',
        'secundario':'#FB2576'
      },
      fontFamily:{
        candice:["Candice","bold"]
      }
    },
  },
  plugins: [],
}