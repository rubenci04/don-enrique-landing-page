<script setup>
import { ref, onMounted, computed } from 'vue';
import { useI18n } from 'vue-i18n';
// Importamos los componentes que vamos a utilizar
import BaseModal from '@/components/BaseModal.vue';
import SectionTitle from '@/components/SectionTitle.vue';

// Importamos las imágenes de la galería.
// Es una buena práctica importar las imágenes para que Vite las procese correctamente.
import galeriaImg1 from '@/assets/images/nosotros/Nosotros - 1.jpg';
import galeriaImg2 from '@/assets/images/nosotros/Nosotros - 2.jpg';
import galeriaImg3 from '@/assets/images/nosotros/Nosotros - 3.jpeg';
import galeriaImg4 from '@/assets/images/nosotros/Nosotros - 4.jpg';
import galeriaImg5 from '@/assets/images/nosotros/Nosotros - 5.jpeg';
import galeriaImg6 from '@/assets/images/nosotros/Nosotros - 6.jpg';

// =======================================================================
// LÓGICA DEL COMPONENTE
// =======================================================================

const { t } = useI18n();

// Variable reactiva para controlar qué item de la galería se muestra en el modal.
// Si es 'null', el modal está cerrado.
const selectedItem = ref(null);

// Texto de la historia. Usar `v-html` es correcto aquí porque controlamos el contenido.
const historiaTexto = computed(() => t('about.history_text'));

// Array con los datos de las imágenes de la galería.
const galeria = computed(() => [
    { id: 'galeria-1', titulo: t('about.gallery.item1.title'), imagen: galeriaImg1, descripcion: t('about.gallery.item1.description') },
    { id: 'galeria-2', titulo: t('about.gallery.item2.title'), imagen: galeriaImg2, descripcion: t('about.gallery.item2.description') },
    { id: 'galeria-3', titulo: t('about.gallery.item3.title'), imagen: galeriaImg3, descripcion: t('about.gallery.item3.description') },
    { id: 'galeria-4', titulo: t('about.gallery.item4.title'), imagen: galeriaImg4, descripcion: t('about.gallery.item4.description') },
    { id: 'galeria-5', titulo: t('about.gallery.item5.title'), imagen: galeriaImg5, descripcion: t('about.gallery.item5.description') },
    { id: 'galeria-6', titulo: t('about.gallery.item6.title'), imagen: galeriaImg6, descripcion: t('about.gallery.item6.description') }
]);

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
  <header class="h-[50vh] bg-cover bg-center bg-fixed relative" style="background-image: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/src/assets/images/fondos/fondo-nosotros.jpeg')">
    <div class="flex items-center justify-center h-full px-4">
      <h2 class="text-4xl lg:text-5xl text-white font-prompt uppercase tracking-widest text-center">{{ $t('about.title') }}</h2>
    </div>
  </header>
  
  <main data-aos="fade-in-up">
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div class="flex justify-center">
        <div class="max-w-3xl text-center text-slate-800 dark:text-slate-300 text-lg leading-relaxed font-sans">
          <p v-html="historiaTexto"></p>
        </div>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
      <SectionTitle>{{ $t('about.gallery_title') }}</SectionTitle>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        <div v-for="item in galeria" :key="item.id" 
             @click="selectedItem = item"
             class="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group h-80">
          
          <img :src="item.imagen" :alt="item.titulo" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy">
          
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          
          <div class="absolute bottom-0 left-0 p-6">
            <h4 class="text-white text-xl font-prompt uppercase font-semibold transform group-hover:-translate-y-2 transition-transform duration-300" style="text-shadow: 2px 2px 4px rgba(0,0,0,1);">{{ item.titulo }}</h4>
          </div>

          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <i class="bi bi-arrows-fullscreen text-white text-4xl"></i>
          </div>
        </div>
      </div>
    </section>
  </main>

  <BaseModal :show="selectedItem !== null" @close="selectedItem = null">
    <div v-if="selectedItem" class="text-center">
      <h3 class="text-2xl font-oswald uppercase text-primary mb-4">{{ selectedItem.titulo }}</h3>
      <img :src="selectedItem.imagen" :alt="selectedItem.titulo" class="rounded-lg mb-4 w-full" loading="lazy">
      <p class="text-slate-800 dark:text-slate-300 text-lg">{{ selectedItem.descripcion }}</p>
    </div>
  </BaseModal>
</template>

<style scoped>
[data-aos] {
  opacity: 0;
  transition: opacity 0.5s;
}
</style>