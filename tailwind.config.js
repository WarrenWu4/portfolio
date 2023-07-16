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
      gridTemplateRows: {
        "zed": "0fr",
        "exp": "1fr",
      },
      boxShadow: {
        'tech': "0 0.2rem 0.4rem 0.2rem rgba(0,0,0,0.25)",
        "card": "0 0.4rem 0.4rem 0.4rem rgba(0,0,0,0.25)",
        "tech-dark": "0 0.2rem 0.4rem 0.2rem rgba(0,0,0,1)",
        "card-dark": "0 0.4rem 0.4rem 0.4rem rgba(0,0,0,1)",
        "elevate": "4px 6px 32px 6px rgba(0, 0, 0, 0.25)",
      },
      colors: {
        "neutral-380": "#4E4F51",
        "neutral-360": "#7A7B7D",
        "dark-100": "#F7F1E6",
        "dark-380": "#F2E7D5",
        "dark-360": "#C2B9AA",
        "dark-bg": "#222326",
  
      },
    },
    screens: {
      "small": "475px",
      "med": "640px",
    },
    fontFamily: {
      default: "Rubik",
    },
  },
  plugins: [],
  darkMode: 'class',
}