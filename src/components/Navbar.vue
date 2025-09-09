<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { RouterLink } from 'vue-router';
import ThemeSwitcher from './ThemeSwitcher.vue';
import LanguageSwitcher from './LanguageSwitcher.vue';

// =======================================================================
// LÓGICA DEL COMPONENTE
// =======================================================================

// Lógica para el menú móvil
const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// Lógica para el cambio de estilo del navbar al hacer scroll
const isScrolled = ref(false);
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

// Añadimos y quitamos el listener del evento scroll para optimizar el rendimiento.
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <nav 
    class="fixed top-0 w-full z-50 transition-all duration-300"
    :class="{ 'bg-light/95 dark:bg-dark/95 shadow-lg backdrop-blur-sm': isScrolled, 'bg-transparent': !isScrolled }"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        
        <div class="flex-shrink-0">
          <RouterLink to="/">
            <img class="h-14 transition-transform duration-300 hover:scale-105" src="@/assets/images/logos/logo-letra.png" alt="Logo Don Enrique"/>
          </RouterLink>
        </div>

        <div class="hidden lg:flex lg:items-center lg:space-x-8">
          <RouterLink to="/" class="nav-link">{{ $t('nav.home') }}</RouterLink>
          <RouterLink to="/nosotros" class="nav-link">{{ $t('nav.about') }}</RouterLink>
          <RouterLink to="/nuestros-platos" class="nav-link">{{ $t('nav.menu') }}</RouterLink>
          <RouterLink to="/contacto" class="nav-link">{{ $t('nav.contact') }}</RouterLink>
          <ThemeSwitcher />
          <LanguageSwitcher />
        </div>

        <div class="lg:hidden flex items-center">
          <ThemeSwitcher />
          <LanguageSwitcher />
          <button @click="toggleMenu" class="text-slate-800 dark:text-slate-300 hover:text-black dark:hover:text-white focus:outline-none ml-4">
            <span class="sr-only">Abrir menú principal</span>
            <svg v-if="!isMenuOpen" class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
            <svg v-else class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div v-if="isMenuOpen" class="lg:hidden bg-light/95 dark:bg-dark/95 backdrop-blur-sm">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <RouterLink to="/" @click="isMenuOpen=false" class="nav-link-mobile">{{ $t('nav.home') }}</RouterLink>
          <RouterLink to="/nosotros" @click="isMenuOpen=false" class="nav-link-mobile">{{ $t('nav.about') }}</RouterLink>
          <RouterLink to="/nuestros-platos" @click="isMenuOpen=false" class="nav-link-mobile">{{ $t('nav.menu') }}</RouterLink>
          <RouterLink to="/contacto" @click="isMenuOpen=false" class="nav-link-mobile">{{ $t('nav.contact') }}</RouterLink>
        </div>
      </div>
    </transition>
  </nav>
</template>

<style scoped lang="postcss">
/* =======================================================================
   ESTILOS PERSONALIZADOS CON POSTCSS (COMPATIBLE CON TAILWIND)
   =======================================================================
   Creamos nuestras propias clases de utilidad para los enlaces para mantener
   el template más limpio y reutilizar estilos.
*/
.nav-link {
  @apply text-slate-800 dark:text-slate-300 uppercase font-prompt tracking-wider px-3 py-2 rounded-md text-lg transition-colors duration-300 relative;
  /* Creamos una pseudo-clase 'after' para la línea animada de abajo */
  &::after {
    @apply content-[''] bg-primary absolute bottom-0 left-0 h-[3px] w-full transform scale-x-0 transition-transform duration-300;
  }
  /* Al hacer hover o cuando el link está activo, la línea aparece */
  &:hover::after, &.router-link-exact-active::after {
    @apply scale-x-100;
  }
  &:hover, &.router-link-exact-active {
    @apply text-black dark:text-white;
  }
}

.nav-link-mobile {
  @apply text-slate-800 dark:text-slate-300 uppercase font-prompt tracking-wider px-3 py-3 rounded-md text-lg transition duration-300 block text-center;
}
.nav-link-mobile:hover {
  @apply text-primary bg-light-dark dark:bg-dark-light;
}
.router-link-exact-active {
  @apply text-primary;
}
</style>