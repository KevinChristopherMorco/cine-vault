/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      keyframes: {
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
      },
    },
  },
  plugins: [],
};
