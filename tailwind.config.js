/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'empireblue': '#4576c9', 
        'empireblue-dark': '#0f71ae',
        'empireyellow': '#fcaf3b',
        'empiregray': '#6e6e6e',
      },
      fontFamily: {
        Poppins : ['Poppins', 'Arial'],
        LibreBaskerville : ['Libre Baskerville', 'sans-serif'],
      },
      keyframes: {
        'slide': {
          '0%': {
            transform: 'translateX(-500px)'
          },
          '100%': {
            transform: 'translateX(0)'
          },
        }
      },
      animation: {
        'slide': 'slide 0.15s ease-in',
      }
    },
  },
  plugins: [],
}

