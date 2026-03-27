/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0A0A0A',    
          accent: '#d97757', 
          slate: '#b0aea5',  
        }
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'], 
        body: ['Lora', 'serif'],           
      }
    },
  },
  plugins: [],
}