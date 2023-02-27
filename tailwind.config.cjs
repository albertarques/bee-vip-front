/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'title': ['Poppins'],
      sans: ['Inter', 'ui-sans-serif', 'system-ui']
    },
    extend: {},
  },
  plugins: [],
}