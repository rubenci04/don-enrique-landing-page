<script setup>
import { ref, onMounted } from 'vue';
import BaseButton from '@/components/BaseButton.vue';
import SectionTitle from '@/components/SectionTitle.vue';
// Importo la imagen de fondo para que funcione en Netlify.
import contactBackgroundImage from '@/assets/images/fondos/fondo-contacto.jpeg';

const formData = ref({ name: '', email: '', message: '' });
const submitting = ref(false);
const success = ref(false);
const error = ref(null);

async function handleSubmit() {
  submitting.value = true;
  success.value = false;
  error.value = null;
  try {
    const response = await fetch('https://formspree.io/f/meolejkk', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json' 
      },
      body: JSON.stringify(formData.value)
    });
    if (response.ok) {
      success.value = true;
      formData.value = { name: '', email: '', message: '' }; 
    } else {
      const data = await response.json();
      throw new Error(data.error || 'Algo salió mal al enviar el mensaje.');
    }
  } catch (err) {
    error.value = err.message;
  } finally {
    submitting.value = false;
  }
}

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
    class="h-[50vh] bg-cover bg-center bg-fixed relative" 
    :style="{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${contactBackgroundImage})` }"
  >
    <div class="flex items-center justify-center h-full">
      <h2 class="text-4xl lg:text-5xl text-white font-prompt uppercase tracking-widest">{{ $t('contact.title') }}</h2>
    </div>
  </header>

  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24" data-aos>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
      
      <div>
        <SectionTitle>{{ $t('contact.form_title') }}</SectionTitle>
        <div class="bg-light-dark dark:bg-dark-light p-8 rounded-xl shadow-lg mt-12">
          
          <div v-if="success" class="text-center p-8 bg-green-900/50 border border-green-500 rounded-lg">
            <h3 class="text-2xl font-prompt text-white">{{ $t('contact.form_success_title') }}</h3>
            <p class="text-slate-300 mt-2">{{ $t('contact.form_success_text') }}</p>
          </div>

          <form @submit.prevent="handleSubmit" v-else class="space-y-6">
            <div>
              <label for="name" class="form-label">{{ $t('contact.form_name') }}</label>
              <input type="text" id="name" v-model="formData.name" required class="form-input">
            </div>
            <div>
              <label for="email" class="form-label">{{ $t('contact.form_email') }}</label>
              <input type="email" id="email" v-model="formData.email" required class="form-input">
            </div>
            <div>
              <label for="message" class="form-label">{{ $t('contact.form_message') }}</label>
              <textarea id="message" v-model="formData.message" rows="5" required class="form-input"></textarea>
            </div>
            <div>
              <BaseButton type="submit" :disabled="submitting" class="w-full">
                {{ submitting ? $t('contact.form_submitting') : $t('contact.form_submit') }}
              </BaseButton>
            </div>
            <p v-if="error" class="text-red-400 text-center">{{ error }}</p>
          </form>

        </div>
      </div>
      
      <div>
        <SectionTitle>{{ $t('contact.map_title') }}</SectionTitle>
        <div class="w-full rounded-xl overflow-hidden shadow-lg mt-12 min-h-[500px] border-4 border-light-dark dark:border-dark-light">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3546.3924867035375!2d-65.55902731119613!3d-27.269576568328965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9423c95f42fee37d%3A0x5805b4efb733a1d0!2sDon%20Enrique%2C%20beer%20and%20food!5e0!3m2!1ses-419!2sar!4v1756394709728!5m2!1ses-419!2sar"
            class="w-full h-full"
            style="border:0;" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"
            title="Mapa de la ubicación del local">
          </iframe>
        </div>
      </div>

    </div>
  </section>
</template>

<style lang="postcss" scoped>
.form-label {
  @apply block mb-2 text-sm font-bold text-slate-800 dark:text-slate-300 uppercase tracking-wider;
}
.form-input {
  @apply w-full px-4 py-3 bg-light dark:bg-dark border border-slate-300 dark:border-slate-600 rounded-lg text-slate-800 dark:text-slate-200 
         focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary 
         transition-all duration-300;
}
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