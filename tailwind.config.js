/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: "#4FD1C5",
        blue : "#5354ED",
      },
    },
  },
  plugins: [],
}

