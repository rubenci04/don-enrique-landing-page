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
        'primary': '#e89a4e',
        'secondary': '#3a4f41',
        'light': '#f5efe6',
        'dark': '#2c2c2c',
      },
      // =======================================================================
      // AÑADO MIS FUENTES PERSONALIZADAS PARA EL PROYECTO.
      // Katfus para los títulos y Lato para el resto del texto.
      // =======================================================================
      fontFamily: {
  'principal': ['Rakkas', 'Lato', 'serif'],
  'secundaria': ['Lato', 'Rakkas', 'sans-serif'],
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