/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      xs: "375px",
      ...defaultTheme.screens,
    },
    extend: {
      backgroundColor: {
        "gray-rgba": "rgba(0, 0, 0, 0.5)",
      },
      backgroundImage: {
        backg: "url('./components/images/backg.png')",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
