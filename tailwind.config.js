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
        "custom": {
          "primary": "#75aef5",
          "secondary": "oklch(0.88 0.15 158.49)",
          "accent": "oklch(0.77 0.15 35.95)",
          "neutral": "#2a2f45",
          "neutral-content": "oklch(0.68 0.01 255.3)",
          "base-100": "#191e32",
          "base-200": "#090e21",
          "base-300": "#00071e",
          "base-content": "#f8f8f2",
        }
      }
    ],
  },
  darkMode: ['class', '[data-theme="custom"]'],
}