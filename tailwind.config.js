/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/imgs/projeto-2.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
    screens:{
      'sm':'640px',
      'md':'768px',
      'lg':'1024px',
      'xl':'1200px',
    }
  },
  plugins: [],
  media: false,  
}
