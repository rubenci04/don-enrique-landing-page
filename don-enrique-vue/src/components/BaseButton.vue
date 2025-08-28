<script setup>
import { RouterLink } from 'vue-router';

// =======================================================================
// DEFINICIÓN DE PROPIEDADES (PROPS)
// =======================================================================
// Este componente puede funcionar como un botón normal, un enlace
// o un RouterLink de Vue.
defineProps({
  // 'to': si se provee, el botón se comportará como un RouterLink.
  to: {
    type: String,
    default: null
  },
  // 'href': si se provee, se comportará como un enlace <a> normal.
  href: {
    type: String,
    default: null
  },
  // 'type': el tipo de botón (submit, button, etc.), por defecto 'button'.
  type: {
    type: String,
    default: 'button'
  }
});
</script>

<template>
  <RouterLink 
    v-if="to" 
    :to="to" 
    class="btn"
  >
    <slot></slot>
  </RouterLink>
  
  <a 
    v-else-if="href" 
    :href="href" 
    class="btn"
  >
    <slot></slot>
  </a>

  <button 
    v-else 
    :type="type" 
    class="btn"
  >
    <slot></slot>
  </button>
</template>

<style scoped lang="postcss">
/* =======================================================================
   ESTILOS DEL BOTÓN
   =======================================================================
   Definimos una clase base '.btn' con todos los estilos y efectos.
*/
.btn {
  @apply inline-block bg-primary text-white font-bold uppercase font-oswald py-3 px-8 
         rounded-lg shadow-lg text-lg tracking-wider
         transform hover:-translate-y-1 hover:shadow-primary/50
         transition-all duration-300
         focus:outline-none focus:ring-4 focus:ring-primary/50
         disabled:opacity-50 disabled:cursor-not-allowed;
}
</style>