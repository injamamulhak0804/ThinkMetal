/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        inter:["Inter", "serif"]
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
        fadeIn: 'fadeIn 0.6s ease-in backwards',
        fadeOut: 'fadeOut ease-in 0.9s backwards',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        fadeIn: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(-35px)' 
           },
          '100%': { 
            opacity: '1',
             transform: 'translateY(0)'
           },
        },
        fadeOut: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(15px)' 
           },
          '100%': { 
            opacity: '1',
             transform: 'translateY(0)'
           },
        },
      },
    },
  },
  plugins: [],
}