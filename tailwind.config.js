/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'sm': '15px',
        'base': '17px',
      },
    },
  },
  plugins: [
    require('daisyui'),
    require('flowbite/plugin')({
      charts: true,
      forms: false,
      tooltips: false
    }),
    require('tailwind-scrollbar')({ nocompatible: true, preferredStrategy: 'pseudoelements' }),
    require('tailwind-fontawesome')({version: 6}),
  ],
  daisyui: {
    themes: [
      "dracula",
      "lemonade",
      {
        "custom": {
          "primary": "#75aef5",
          "secondary": "#f7e462",
          "accent": "oklch(0.51 0 0)",
          "neutral": "oklch(0.29 0.03 276.31)",
          "neutral-content": "oklch(0.68 0.01 255.3)",
          "base-100": "#171d26",
          "base-200": "#10151c",
          "base-300": "#0c1218",
          "base-hover": "#3a4049",
          "base-content": "#f8f8f2",
        }
      }
    ],
  },
  darkMode: ['class', '[data-theme="custom"]'],
}