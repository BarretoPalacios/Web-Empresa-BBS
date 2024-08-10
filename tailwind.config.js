/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {},
    fontFamily:{
      cherryFont:["Cherry Bomb One","system-ui"]
    }
  },
  plugins: [],
}