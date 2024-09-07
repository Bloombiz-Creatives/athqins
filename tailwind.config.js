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
        'custom-gradient': 'linear-gradient(50deg, rgb(112, 191, 236) 0%, rgb(106, 48, 255) 99%)',
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
        'pulse-border': {
          '0%': { boxShadow: '0 0 0 0 rgba(83, 105, 240, 0.7)' },
          '70%': { boxShadow: '0 0 0 20px rgba(83, 105, 240, 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(83, 105, 240, 0)' },
        },
        'sk-foldCubeAngle': {
          '0%, 10%': {
            transform: 'perspective(140px) rotateX(-180deg)',
            opacity: '0',
          },
          '25%, 75%': {
            transform: 'perspective(140px) rotateX(0deg)',
            opacity: '1',
          },
          '90%, 100%': {
            transform: 'perspective(140px) rotateY(180deg)',
            opacity: '0',
          },
        },
      },
      animation: {
        roate360: 'roate360 10s linear infinite',
        upndown: 'upndown 10s linear infinite',
        'pulse-border': 'pulse-border 1500ms ease-out infinite',
        'sk-foldCubeAngle': 'sk-foldCubeAngle 2.4s infinite linear',
      },
      padding: {
        'calc-pl': 'calc((100% - 1140px) / 2 + 15px)',
      },
    },
  },
  plugins: [],
}

