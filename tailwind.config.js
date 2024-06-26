/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {},
      fontSize: {
        bigBtn: ["20px", "23px"],
        midBtn: ["15px", "17px"],
        smlBtn: ["10px", "11px"],
        alert: ["15px", "30px"],
      },
      colors : {
        "main-color": "#BFE647",
        "hover-color": "#89C73E",
        "gray-light": "#E0E0E0",
      },
    }
  },
  plugins: [],
};
