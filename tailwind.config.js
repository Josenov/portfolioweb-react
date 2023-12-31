/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'neon': ['Tilt Neon', 'sans serif'],
      'handjet':['Handjet', 'sans serif'],
    extend: {},
  },
  plugins: [],
}
}
