// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [require("daisyui")],
    daisyui: {
      themes: [
        {
          light: {
            primary: "#25daeb",
            secondary: "#f488d9",
            accent: "#ef5c53",
            neutral: "#021619",
            "base-100": "#f3fdfe",
            "--text": "#021619",
            "--background": "#f3fdfe",
          },
        },
        {
          dark: {
            primary: "#14cbdb",
            secondary: "#750b5a",
            accent: "#ad1810",
            neutral: "#e7fafd",
            "base-100": "#010d0e",
            "--text": "#e7fafd",
            "--background": "#010d0e",
          },
        },
      ],
    },
  }
  