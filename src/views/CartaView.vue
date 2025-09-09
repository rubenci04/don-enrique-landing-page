<script setup>
import { ref, onMounted, computed } from 'vue';
import { useI18n } from 'vue-i18n';
// Importamos los componentes necesarios
import BaseModal from '@/components/BaseModal.vue'; 
import SectionTitle from '@/components/SectionTitle.vue';

// Importamos las imágenes de los platos
import imgSandwiches from '@/assets/images/carta/menu-sandwichs.jpeg'; 
import imgBurgers from '@/assets/images/carta/menu-burgers.jpeg';
import imgPapas from '@/assets/images/carta/menu-papas.jpeg';
import imgPizzas from '@/assets/images/carta/menu-pizza.jpeg';
import imgPlatos from '@/assets/images/carta/menu-platos.jpeg';
import imgBebidas from '@/assets/images/carta/menu-bebidas.jpeg';

// =======================================================================
// LÓGICA DEL COMPONENTE
// =======================================================================

const { t } = useI18n();

// Variable reactiva para almacenar el plato seleccionado que se mostrará en el modal.
const selectedPlato = ref(null);

// Array con la información de cada categoría de plato.
const platos = computed(() => [
  { id: 'platoModal1', titulo: t('menu.categories.sandwiches.title'), imagen: imgSandwiches, descripcion: t('menu.categories.sandwiches.description') },
  { id: 'platoModal2', titulo: t('menu.categories.burgers.title'), imagen: imgBurgers, descripcion: t('menu.categories.burgers.description') },
  { id: 'platoModal3', titulo: t('menu.categories.fries.title'), imagen: imgPapas, descripcion: t('menu.categories.fries.description') },
  { id: 'platoModal4', titulo: t('menu.categories.pizzas.title'), imagen: imgPizzas, descripcion: t('menu.categories.pizzas.description') },
  { id: 'platoModal5', titulo: t('menu.categories.dishes.title'), imagen: imgPlatos, descripcion: t('menu.categories.dishes.description') },
  { id: 'platoModal6', titulo: t('menu.categories.drinks.title'), imagen: imgBebidas, descripcion: t('menu.categories.drinks.description') }
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
  <header class="h-[50vh] bg-cover bg-center bg-fixed relative" style="background-image: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/src/assets/images/fondos/fondo-carta.jpg')">
    <div class="flex items-center justify-center h-full">
      <h2 class="text-4xl lg:text-5xl text-white font-prompt uppercase tracking-widest">{{ $t('menu.title') }}</h2>
    </div>
  </header>

  <main data-aos="fade-in-up">
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <SectionTitle>{{ $t('menu.subtitle') }}</SectionTitle>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 mt-16">
        
        <div v-for="plato in platos" :key="plato.id"
             @click="selectedPlato = plato"
             class="text-center group cursor-pointer">
          
          <div class="relative w-64 h-64 mx-auto">
             <div class="absolute inset-0 bg-light-dark dark:bg-dark-light rounded-lg transform group-hover:scale-105 transition-transform duration-300"></div>
            <img 
              :src="plato.imagen" 
              :alt="plato.titulo" 
              class="w-full h-full object-cover rounded-lg transform group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300"
              loading="lazy"
            >
          </div>

          <h4 class="mt-6 text-2xl font-prompt uppercase text-slate-800 dark:text-white font-semibold transition-colors duration-300 group-hover:text-primary">
            {{ plato.titulo }}
          </h4>
        </div>

      </div>
    </section>
  </main>

  <BaseModal :show="selectedPlato !== null" @close="selectedPlato = null">
    <div v-if="selectedPlato" class="text-center">
      <h3 class="text-2xl font-prompt uppercase text-primary mb-4">{{ selectedPlato.titulo }}</h3>
      <img :src="selectedPlato.imagen" :alt="selectedPlato.titulo" class="rounded-lg mb-4 w-full bg-light-dark dark:bg-dark-light p-4" loading="lazy">
      <p class="text-slate-800 dark:text-slate-300 text-lg">{{ selectedPlato.descripcion }}</p>
    </div>
  </BaseModal>
</template>

<style scoped>
[data-aos] {
  opacity: 0;
  transition: opacity 0.5s;
}
</style>