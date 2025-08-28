/** @type {import('tailwindcss').Config} */
export default {
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
        'dark': '#1c2027',    // Un negro no tan puro para los fondos
        'dark-light': '#2e353f', // Un gris oscuro para tarjetas y elementos secundarios
      },
      // =======================================================================
      // AÑADIMOS NUESTRAS FUENTES PERSONALIZADAS
      // =======================================================================
      fontFamily: {
        // La clave 'oswald' crea la clase de utilidad 'font-oswald'.
        'oswald': ['Oswald', 'sans-serif'],
        // La clave 'lato' crea la clase 'font-lato'.
        'lato': ['Lato', 'sans-serif'],
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