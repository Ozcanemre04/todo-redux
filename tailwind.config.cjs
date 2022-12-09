/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {},
    screens:{
      'small':'320px',
      'medium':'700px'
    }
  },
  plugins: [],
}
