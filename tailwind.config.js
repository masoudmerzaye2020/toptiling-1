/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      backgroundImage: {
        'my_bg_image' : "url('/image/Desktop-20.jpg')",
      }
    },
  },
  plugins: [],
}