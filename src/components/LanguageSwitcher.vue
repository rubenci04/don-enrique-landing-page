<script setup>
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

const switchLanguage = () => {
  locale.value = locale.value === 'es' ? 'en' : 'es';
};
</script>

<template>
  <button @click="switchLanguage" class="text-slate-800 dark:text-slate-300 hover:text-black dark:hover:text-white focus:outline-none">
    <span class="sr-only">Switch language</span>
    <span class="text-lg font-prompt uppercase">{{ locale }}</span>
  </button>
</template>