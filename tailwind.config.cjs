/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'inner-xl': '-4px -2px 15px 5px rgba(0,0,0,0.69) inset'
      },
      fontFamily:
        {
          nunito: ['Nunito', 'sans-serif'],
          poppins: ['Poppins', 'sans-serif']
        }
    },
  },
  plugins: [],
};
