/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "neutral-380": "#4E4F51",
      "neutral-360": "#7A7B7D"
    },
    screens: {
      "sm": "540px",
      "tablet": "768px",
      "desktop": "1024px",
    },
    fontFamily: {
      default: "Inter",
    },
  },
  plugins: [],
}