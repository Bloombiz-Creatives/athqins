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
      keyframes: {
        roate360: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        upndown: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      animation: {
        roate360: 'roate360 10s linear infinite',
        upndown: 'upndown 10s linear infinite',
      },
    },
  },
  plugins: [],
}

