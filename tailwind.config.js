/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#3B82F6",
         
        }
      },
      "night" // Predefined theme
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}
