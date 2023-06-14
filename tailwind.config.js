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
        "tech-dark": "0 0.2rem 0.4rem 0.2rem rgba(0,0,0,1)",
        "card-dark": "0 0.4rem 0.4rem 0.4rem rgba(0,0,0,1)",
      }
    },
    colors: {
      "neutral-380": "#4E4F51",
      "neutral-360": "#7A7B7D",
      "dark-100": "#F7F1E6",
      "dark-380": "#F2E7D5",
      "dark-360": "#C2B9AA",
      "dark-bg": "#222326",

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
  darkMode: 'class',
}