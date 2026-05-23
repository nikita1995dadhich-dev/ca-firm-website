/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primaryBlue: "#0A4D78",
        secondaryBlue: "#1E6A9C",
        accentGold : "#D89A4A",
        lightBg: "#F5F9FC",
        darkText: "#1F2937",
        softText : "#6B7280",
        white: "#FFFFFF",
      },
    },
  },

  plugins: [],
}