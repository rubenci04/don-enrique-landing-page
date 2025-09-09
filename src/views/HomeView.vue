<script setup>
import { RouterLink } from 'vue-router';
import BaseButton from '@/components/BaseButton.vue';
import SectionTitle from '@/components/SectionTitle.vue';
import { onMounted } from 'vue';

// =======================================================================
// CORRECCIÓN DE IMÁGENES
// =======================================================================
// Aquí importo la imagen de fondo. Esta es la corrección clave para Netlify.
import homeBackgroundImage from '@/assets/images/fondos/fondo-home.jpeg';

// También importo las imágenes de las tarjetas para que Vite las procese.
import image1 from '@/assets/images/index/comida_index.jpeg';
import image2 from '@/assets/images/index/comida_index2.jpeg';
import image3 from '@/assets/images/index/comida_index3.jpeg';

const slides = [
  { id: 1, image: image1, alt: 'Napolitana', title: 'Napolitana Americana' },
  { id: 2, image: image2, alt: 'Papasdone', title: 'Mexicano' },
  { id: 3, image: image3, alt: 'Pizzadone', title: 'Pizza Don Enrique' } 
];

// He mantenido tu lógica de animación, es un buen enfoque.
onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in-up');
      }
    });
  });
  const elements = document.querySelectorAll('[data-aos]');
  elements.forEach(el => observer.observe(el));
});
</script>

<template>
  <header 
    class="h-screen bg-cover bg-center bg-fixed relative flex flex-col items-center justify-center text-center px-4" 
    :style="{ backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${homeBackgroundImage})` }"
  >
    <div class="animate-fade-in-up">
      <RouterLink to="/" class="mb-8 block">
        <img src="@/assets/images/logos/logo.png" class="max-h-60 mx-auto" alt="logo del sitio" loading="lazy">
      </RouterLink>
      <h1 class="text-4xl md:text-5xl lg:text-6xl text-white font-prompt uppercase tracking-widest">Don Enrique Beer & Food</h1>
      <h2 class="text-2xl md:text-3xl text-slate-300 font-prompt uppercase mt-2">{{ $t('home.subtitle') }}</h2>
      <BaseButton to="/nuestros-platos" class="mt-12">
        {{ $t('home.discover_dishes') }}
      </BaseButton>
    </div>
    <div class="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  </header>

  <div class="bg-light dark:bg-dark py-24 sm:py-32" data-aos>
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <SectionTitle>{{ $t('home.featured_dishes') }}</SectionTitle>
      <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="slide in slides" :key="slide.id" class="card-container group">
          <img :src="slide.image" :alt="slide.alt" class="card-image" loading="lazy">
          <div class="card-overlay">
            <h3 class="card-title">{{ slide.title }}</h3>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-light-dark dark:bg-dark-light py-24 sm:py-32" data-aos>
    <div class="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div>
        <SectionTitle>{{ $t('home.our_history') }}</SectionTitle>
        <p class="mt-4 text-lg text-slate-800 dark:text-gray-300">{{ $t('home.history_text') }}</p>
        <BaseButton to="/nosotros" class="mt-8">{{ $t('home.learn_more') }}</BaseButton>
      </div>
      <img src="@/assets/images/nosotros/Nosotros - 1.jpg" alt="Foto del restaurante" class="rounded-lg" loading="lazy">
    </div>
  </div>

  <div class="bg-light dark:bg-dark py-24 sm:py-32" data-aos>
    <div class="mx-auto max-w-7xl px-6 lg:px-8 text-center">
      <SectionTitle>{{ $t('home.discover_menu') }}</SectionTitle>
      <p class="mt-4 text-lg text-slate-800 dark:text-gray-300">{{ $t('home.menu_text') }}</p>
      <BaseButton to="/nuestros-platos" class="mt-8">{{ $t('home.see_menu') }}</BaseButton>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.card-container {
  @apply relative overflow-hidden rounded-lg shadow-lg h-80;
}
.card-image {
  @apply w-full h-full object-cover transition-transform duration-500 group-hover:scale-110;
}
.card-overlay {
  @apply absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6;
}
.card-title {
  @apply text-white text-2xl font-prompt uppercase font-semibold transform group-hover:-translate-y-2 transition-transform duration-300;
  text-shadow: 2px 2px 4px rgba(0,0,0,1);
}
/* He simplificado la lógica de la animación para que se aplique directamente
   cuando el elemento entra en la pantalla. */
[data-aos] {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}
[data-aos].animate-fade-in-up {
  opacity: 1;
  transform: translateY(0);
}
</style>