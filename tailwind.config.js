/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{jsx,js,ts,tsx}", "./components/**/*.{jsx,js,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        background:{
          dark: "#17171c",
          light: "f1f2f3",
        },
        emphasis:{
          medium:{
            light: "d2d3da",
            dark: "4e505f",
          },
          high:{
            light: "4b5efc",
            dark: "4b5efc",
          },
          low:{
            light: "ffffff",
            dark: "2e2f38",
          }
        }
      },
      fontFamily:{
        wLight: ['Work-Light', 'sans-serif'],
        wRegular: ['Work-Regular', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

