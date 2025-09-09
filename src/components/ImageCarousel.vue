<script setup>
import { ref } from 'vue';

// --- Lógica del Carrusel ---

// Array de imágenes de ejemplo. En una aplicación real, esto vendría de una API o de las props del componente.
const slides = ref([
  { id: 1, url: 'https://via.placeholder.com/800x450/E48F45/fff?text=Imagen+1', alt: 'Imagen de ejemplo 1' },
  { id: 2, url: 'https://via.placeholder.com/800x450/2e353f/fff?text=Imagen+2', alt: 'Imagen de ejemplo 2' },
  { id: 3, url: 'https://via.placeholder.com/800x450/4a5568/fff?text=Imagen+3', alt: 'Imagen de ejemplo 3' },
]);

// Referencia para mantener el índice de la diapositiva actual.
const currentSlide = ref(0);

// Método para ir a la diapositiva siguiente.
const nextSlide = () => {
  if (currentSlide.value < slides.value.length - 1) {
    currentSlide.value++;
  } else {
    currentSlide.value = 0; // Vuelve al principio si está en la última.
  }
};

// Método para ir a la diapositiva anterior.
const prevSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--;
  } else {
    currentSlide.value = slides.value.length - 1; // Va a la última si está en la primera.
  }
};
</script>

<template>
  <div class="carousel-container">
    <!-- Contenedor de las diapositivas -->
    <div class="carousel-slides">
      <!-- Itera sobre las imágenes y las muestra una a una con una transición suave. -->
      <transition-group name="fade" tag="div">
        <div 
          v-for="(slide, index) in slides" 
          :key="slide.id" 
          v-show="currentSlide === index"
          class="carousel-slide"
        >
          <img :src="slide.url" :alt="slide.alt" class="slide-image" />
        </div>
      </transition-group>
    </div>

    <!-- Controles de Navegación -->
    <button @click="prevSlide" class="carousel-control prev">
      <!-- Icono SVG para "anterior" -->
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
      </svg>
    </button>
    <button @click="nextSlide" class="carousel-control next">
      <!-- Icono SVG para "siguiente" -->
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
    </button>
  </div>
</template>

<style scoped>
/*
 * --- Estilos del Contenedor Principal del Carrusel ---
 */
.carousel-container {
  /* Define el tamaño máximo y la relación de aspecto para mantener la consistencia. */
  max-width: 800px;
  aspect-ratio: 16 / 9;

  /* Centra el carrusel en la página. */
  margin: 0 auto;

  /* Posición relativa para que los controles absolutos se posicionen correctamente. */
  position: relative;

  /* Oculta cualquier parte de las diapositivas que se salga del contenedor. */
  overflow: hidden;
  border-radius: 0.75rem; /* Bordes redondeados para un look moderno. */
}

/*
 * --- Estilos de las Diapositivas y las Imágenes ---
 */
.carousel-slides {
  width: 100%;
  height: 100%;
}

.carousel-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.slide-image {
  /* Hace que la imagen cubra todo el espacio sin deformarse. */
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/*
 * --- Estilos de los Controles de Navegación (< >) ---
 */
.carousel-control {
  /* Posiciona los botones sobre las diapositivas. */
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  /* Tamaño de los botones. */
  width: 48px;
  height: 48px;

  /* Estilo visual: fondo semitransparente, color blanco y sombra. */
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border-radius: 50%;
  border: none;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);

  /* Centra el icono SVG dentro del botón. */
  display: flex;
  align-items: center;
  justify-content: center;

  /* Cambia el cursor para indicar que es un elemento clickeable. */
  cursor: pointer;

  /* Transición suave para el efecto hover. */
  transition: background-color 0.2s ease;
}
