/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'moredark':'#0A0A0D',
        'dark':'#212026',
      },
      fontFamily:{
        candice:["Candice","bold"]
      },
      backgroundImage: {
        'home-bg': "url('/src/assets/background.jpg')",
      }
    },
  },
  plugins: [],
}