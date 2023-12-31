/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0ef',
        deepBlue: 'rgb(5 8 22)',
        deepBlue2: '#031127'
      },
      fontFamily:{
        poppins: ["Poppins", "sans-serif"],
      }
    },
  },
  plugins: [require("daisyui")],
}

