<script setup>
defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  product: {
    type: Object,
    default: null,
  },
});

const emit = defineEmits(['close']);
</script>

<template>
  <Transition
    enter-active-class="transition ease-out duration-300"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition ease-in duration-200"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div v-if="show" class="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4">

      <Transition
        enter-active-class="transition ease-out duration-300"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition ease-in duration-200"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <div class="fixed inset-0" @click.self="emit('close')">
          <div class="relative bg-light dark:bg-dark rounded-xl shadow-lg max-w-md w-full mx-auto my-12 text-dark dark:text-white overflow-hidden">

            <button @click="emit('close')" class="absolute top-4 right-4 text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white transition">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            <div class="p-6 text-center">
              <h3 class="text-2xl font-lato uppercase text-primary mb-4">{{ product.name }}</h3>
              <p class="text-lg font-sans">{{ product.description }}</p>
            </div>

          </div>
        </div>
      </Transition>

    </div>
  </Transition>
</template>