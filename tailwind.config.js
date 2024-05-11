/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        animation: {
          'fadeRight': 'fadeRight 1s ease-out forwards',
          'fadeLeft': 'fadeLeft 1s ease-out forwards',
          'fadeTop': 'fadeTop 1s ease-out forwards',
        },
        keyframes: {
          fadeRight: {
            "0%": {
              opacity: "0",
              transform: "translateX(-1rem)",
            },
            "100%": {
              opacity: "1",
              transform: "translateX(0)",
           }
          },
          fadeLeft: {
            "0%": {
              opacity: "0",
              transform: "translateX(1rem)",
            },
            "100%": {
              opacity: "1",
              transform: "translateX(0)",
            }
          },
          fadeTop: {
            "0%": {
              opacity: "0",
              transform: "translateY(1rem)",
            },
            "100%": {
              opacity: "1",
              transform: "translateY(0)",
            }
          }
        },
        gridTemplateColumns: {
          "tech-stack": "repeat(auto-fit, 5rem)",
        },
        gridTemplateRows: {
          "zed": "0fr",
          "exp": "1fr",
        },
        boxShadow: {
          'tech': "0 0.2rem 0.4rem 0.2rem rgba(0,0,0,0.25)",
          "tech-dark": "0 0 0.4rem rgba(255,255,255,0.25)",
          "card": "0 0.4rem 0.4rem 0.4rem rgba(0,0,0,0.25)",
          "card-dark": "0 0.4rem 0.4rem 0.4rem rgba(255,255,255,0.25)",
          "elevate": "4px 6px 32px 6px rgba(0, 0, 0, 0.25)",
          "elevate-dark": "4px 6px 32px 6px rgba(255, 255, 255, 0.25)",
          "brutalist": "4px 6px rgba(0, 0, 0, 1)",
          "brutalist-dark": "4px 6px rgba(255, 255, 255, 1)"
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
          "xs": "475px",
          "small": "475px",
          "med": "640px",
          "huh": "759px",
          "large": "1280px",
        },
        fontFamily: {
          default: "Rubik",
        },
      },
    },
    plugins: [],
    darkMode: 'class',
  }