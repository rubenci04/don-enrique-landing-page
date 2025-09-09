/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // =======================================================================
      // AMPLIAMOS NUESTRA PALETA DE COLORES PARA EL PROYECTO
      // =======================================================================
      colors: {
        'primary': '#E48F45', // Naranja principal de la marca
        'dark': '#2e353f',    // Un gris oscuro para los fondos
        'dark-light': '#4a5568', // Un gris más claro para tarjetas y elementos secundarios
        'light': '#f5f5f5', // Un blanco no tan puro para los fondos
        'light-dark': '#e5e5e5', // Un gris claro para tarjetas y elementos secundarios
      },
      // =======================================================================
      // AÑADIMOS NUESTRAS FUENTES PERSONALIZADAS
      // =======================================================================
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        'prompt': ['Prompt', 'sans-serif'],
      },
      // =======================================================================
      // AÑADIMOS ANIMACIONES PERSONALIZADAS PARA EL SCROLL
      // =======================================================================
      keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        }
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.5s ease-out forwards',
      }
    },
  },
  plugins: [],
}