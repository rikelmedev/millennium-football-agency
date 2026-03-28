// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-white': '#FFFFFF',
        'brand-dark': '#1A1A1A',   
        'brand-accent': '#E31B23', 
        'brand-gray': '#F8F8F8',  
      },
    },
  },
  plugins: [],
}