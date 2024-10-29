/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideOut: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
        slideDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },

        slideUp: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-100%)" },
        },
        fadeIn: {
          "0%": { opacity: "0.4" },
          "100%": { opacity: "1" },
        },
        iconScale: {
          "0%": { transform: "scale(.5)", opacity: "0.4" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        modalScale: {
          "0%": { transform: "scale(.7)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },

      animation: {
        fadeIn: "fadeIn 0.2s ease-in-out",
        iconScale: "iconScale 0.2s ease-in-out",
        modalScale: "modalScale 0.3s ease-in-out",
        slideIn: "slideIn 300ms ease-in-out forwards",
        slideOut: "slideOut 300ms ease-in-out forwards",
        slideUp: "slideUp 300ms ease-in-out forwards",
        slideDown: "slideDown 300ms ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
