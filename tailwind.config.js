/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
      },
      colors: {
        veryDarkGray: 'hsl(0, 0%, 17%)',
        darkGray: 'hsl(0, 0%, 59%)',
      },
      backgroundImage: {
        mobile: "url('./src/assets/pattern-bg-mobile.png')",
        desktop: "url('./src/assets/pattern-bg-desktop.png')",
      }
    },
  },
  plugins: [],
}