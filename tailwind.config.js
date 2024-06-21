/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode:"jit",
  theme: {
    extend: {
      colors: {
        "beige": "#FFF7ED",
        "dark-gray": "#4D4D4D",
        "vibrant-orange": "#FF8C38",
        "footer-gray": "#252525",
        "almost-black": "#161616",
        "light-orange-1": "#FFCC8D",
        "light-orange-2": "#FFEAD0",
        "dark-orange-1": "#E17654",
        "dark-green": "#115E59"
      }
    },
  },
  plugins: [],
}

