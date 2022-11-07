/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'black': '#0B0C10',
      'lightblack':'#1F2833',
      'gray':'#C5C6C7',
      'lightcyan':'#66FCf1',
      'darkcyan':'#45A29E',
    
    },
    extend: {
      backgroundImage: {
        'my_bg_image' : "url('/image/Desktop-20.jpg')",
      }
    },
  },
  plugins: [],
}