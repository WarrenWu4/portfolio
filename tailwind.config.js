/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "tech-stack": "repeat(auto-fit, 5rem)",
      },
      boxShadow: {
        'tech': "0 0.2rem 0.4rem 0.2rem rgba(0,0,0,0.25)",
        "card": "0 0.4rem 0.4rem 0.4rem rgba(0,0,0,0.25)",
      }
    },
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