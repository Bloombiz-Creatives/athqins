/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
    extend: {
      backgroundImage: {
        'lg-gradient': 'linear-gradient(90deg, #000 50%, #F7F7F7 50%)',
      },
    },
  },
  plugins: [],
}

