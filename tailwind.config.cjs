/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: ["night", "dark"],
  },
  theme: {
    extend: {
      screens: {
        'mobile': {'max': '720px'},
        'dek' : '721px',
        // => @media (min-width: 640px) { ... }
      },
    },
  },
  plugins: [require("daisyui")],
}
