/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'Black': '#262626',
        'Solid White': '#FFFFFF',
        'Yellow': '#f6d980',
        'Green': '#6dcf98',
        'Red': '#e76d71',
        'Neutral': '#f7f1db'

      },
      fontFamily: {
        
      },
      spacing: {
        '5px': '5px',
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}