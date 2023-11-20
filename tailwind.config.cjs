/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-100": "#262626",
        "light-100": "#FFFCF0",
        "primary-one": "#5765C2",
        "primary-two": "#336be6",
        "primary-bg": "#0B0B0D",
        // "primary-bg": "#0D0F1F",
        "primary-bg-light": "#f8f8f8",
        "green-main": "#036943",
        "gold-main": "#e0a221",
      },
      fontFamily: {
        inter: ["EB Garamond", "serif"],
      },
      animation: {
        "bounce-slow": "bounce 3s linear infinite",
        "bounce-slow-four": "bounce 4s linear infinite",
        "bounce-slow-five": "bounce 5s linear infinite",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
      lg: "1440px",
      xl: "1920px",
    },
  },
  plugins: [],
};
