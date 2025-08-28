<script setup>
import { RouterLink } from 'vue-router';
// Importamos nuestros nuevos componentes reutilizables
import BaseButton from '@/components/BaseButton.vue';
import SectionTitle from '@/components/SectionTitle.vue';
</script>

<template>
  <header class="h-screen bg-cover bg-center bg-fixed relative flex flex-col items-center justify-center text-center px-4" style="background-image: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/src/assets/images/fondos/fondo-home.jpg')">
    <div class="animate-fade-in-up">
      <RouterLink to="/" class="mb-8 block">
        <img src="@/assets/images/logos/logo.png" class="max-h-52 mx-auto" alt="logo del sitio">
      </RouterLink>
      <h1 class="text-4xl md:text-5xl lg:text-6xl text-white font-oswald uppercase tracking-widest">Don Enrique Beer & Food</h1>
      <h2 class="text-2xl md:text-3xl text-slate-300 font-oswald uppercase mt-2">Pizzeria - Cervecería</h2>
      <BaseButton to="/nuestros-platos" class="mt-12">
        Conocé nuestros platos
      </BaseButton>
    </div>
    <div class="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  </header>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
    <SectionTitle>Una Experiencia Única</SectionTitle>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16 text-center">
      
      <RouterLink to="/nuestros-platos" class="card-link group">
        <div class="card-content">
          <i class="bi bi-egg-fried text-primary text-5xl"></i>
          <h3 class="card-title">Nuestros Platos</h3>
          <p class="card-text">Descubrí la variedad de pizzas, hamburguesas y sandwiches que tenemos para vos.</p>
        </div>
      </RouterLink>
      
      <RouterLink to="/nosotros" class="card-link group">
        <div class="card-content">
          <i class="bi bi-people-fill text-primary text-5xl"></i>
          <h3 class="card-title">El Mejor Ambiente</h3>
          <p class="card-text">Conocé nuestra historia y los espacios que creamos para que disfrutes con amigos.</p>
        </div>
      </RouterLink>

      <RouterLink to="/contacto" class="card-link group">
        <div class="card-content">
          <i class="bi bi-whatsapp text-primary text-5xl"></i>
          <h3 class="card-title">Contáctanos</h3>
          <p class="card-text">Encontranos en el mapa o envianos un mensaje. ¡Estamos para atenderte!</p>
        </div>
      </RouterLink>

    </div>
  </div>
</template>

<style scoped lang="postcss">
/* =======================================================================
   AÑADIMOS ESTILOS PARA LAS TARJETAS Y SUS EFECTOS
   =======================================================================
*/
.card-link {
  @apply block;
}

.card-content {
  @apply bg-dark-light p-8 rounded-xl shadow-lg h-full
         transform group-hover:-translate-y-2 
         transition-transform duration-300;
}

.card-title {
  @apply font-oswald uppercase text-2xl text-white mt-4 mb-2;
}

.card-text {
  @apply text-slate-400;
}
</style>