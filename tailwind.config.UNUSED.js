/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        sm: "15px",
        base: "17px",
      },
    },
  },
  plugins: [
    require("flowbite/plugin")({
      charts: true,
      forms: false,
      tooltips: false,
    }),
    require("tailwind-scrollbar")({
      nocompatible: true,
      preferredStrategy: "pseudoelements",
    }),
  ],
  daisyui: {
    themes: ["dracula", "lemonade"],
  },
  darkMode: ["class", '[data-theme="custom"]'],
};
