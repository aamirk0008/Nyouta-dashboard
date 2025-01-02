/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primaryFont: "Fredoka One, Dancing Script",
        heroFont: ['Raleway', 'sans-serif'],
        themeFont: ["Cedarville Cursive", "cursive"]
      },
      colors: {
        priBg: "#FAF0DC",
        primary: '#AF7D32',
        secondary: '#643C28',
        third: '#553B10'
      },
    },
  },
  plugins: [],
}

