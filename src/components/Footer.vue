<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <footer class="bg-light-dark dark:bg-dark border-t border-slate-300 dark:border-slate-700/50">
    <div class="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col items-center gap-6">
        
                <RouterLink to="/">
          <!-- Mi logo en el footer, también con animación de brillo. -->
          <img class="h-[9rem] transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_0_8px_rgba(232,154,78,0.7)]" src="@/assets/images/logos/logo-letra.png" alt="Logo Don Enrique"/>
        </RouterLink>
        
        <div class="flex gap-6 items-center">
          <a href="tel:+5493863534208" class="social-link">
            <i class="bi bi-telephone-fill"></i>
            <span class="ml-2">3863 - 534208</span>
          </a>
          <a href="http://api.whatsapp.com/send?phone=3863534208" target="_blank" aria-label="WhatsApp" class="social-link">
            <i class="bi bi-whatsapp"></i>
          </a>
          <a href="https://www.facebook.com/people/Don-Enrique-Beer-food/100063241178163" target="_blank" aria-label="Facebook" class="social-link">
            <i class="bi bi-facebook"></i>
          </a>
          <a href="https://www.instagram.com/don_enrique_beer/?hl=es" target="_blank" aria-label="Instagram" class="social-link">
            <i class="bi bi-instagram"></i>
          </a>
        </div>

        <p class="text-base text-slate-600 dark:text-slate-400 text-center">
          © {{ new Date().getFullYear() }} Don Enrique - Beer & Food. {{ $t('footer.rights') }}
        </p>
        
      </div>
    </div>
  </footer>
</template>

<style scoped lang="postcss">
.social-link {
  @apply text-slate-600 dark:text-slate-400 text-2xl transition-all duration-300;
}
.social-link:hover {
  @apply text-primary transform -translate-y-1;
}
</style>