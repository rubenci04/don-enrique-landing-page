<script setup>
import { RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <!-- Este es el contenedor principal de mi aplicación -->
  <!-- Aquí aplico los estilos de fondo y la fuente base para todo el sitio -->
  <div class="bg-light dark:bg-dark text-slate-800 dark:text-slate-200 font-secundaria">
    <Navbar />
    <main class="pt-20">
      
      <RouterView :key="$route.fullPath" />

    </main>
    <Footer />
  </div>
</template>

<style>
/* Por ahora, podemos dejar estos estilos o comentarlos, ya no se usan. */
/*
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
*/
</style>