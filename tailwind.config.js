/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
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
        "dracula-modified": {
          "primary": "#ff79c6",
          "secondary": "#bd93f9",
          "accent": "oklch(0.833927 0.124132 66.5585)",
          "neutral": "#414558",
          "neutral-content": "#d6d7db",
          "base-100": "#200035",
          "base-content": "#f8f8f2",
        }
      }
    ],
  },
  darkMode: ['class', '[data-theme="dracula-modified"]'],
}