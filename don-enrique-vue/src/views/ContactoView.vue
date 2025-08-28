<script setup>
import { ref } from 'vue';
// Importamos nuestros componentes reutilizables
import BaseButton from '@/components/BaseButton.vue';
import SectionTitle from '@/components/SectionTitle.vue';

// =======================================================================
// LÓGICA DEL FORMULARIO DE CONTACTO (CON FORMSPREE)
// =======================================================================

// 'formData' almacena los datos del formulario de manera reactiva.
const formData = ref({ name: '', email: '', message: '' });

// Variables de estado para controlar el proceso de envío.
const submitting = ref(false); // true mientras se envía el formulario
const success = ref(false);   // true si el envío fue exitoso
const error = ref(null);      // Almacena el mensaje de error si algo falla

// Función que se ejecuta al enviar el formulario.
async function handleSubmit() {
  submitting.value = true;
  success.value = false;
  error.value = null;

  try {
    // ¡IMPORTANTE! Reemplaza la URL con tu endpoint real de Formspree.
    const response = await fetch('https://formspree.io/f/TU_ENDPOINT_REAL_DE_FORMSPREE', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json' 
      },
      body: JSON.stringify(formData.value) // Enviamos los datos del formulario en formato JSON
    });

    if (response.ok) {
      // Si la respuesta es exitosa (código 2xx)
      success.value = true;
      // Reseteamos el formulario
      formData.value = { name: '', email: '', message: '' }; 
    } else {
      // Si hay un error en la respuesta del servidor
      const data = await response.json();
      throw new Error(data.error || 'Algo salió mal al enviar el mensaje.');
    }
  } catch (err) {
    // Si hay un error en la conexión o en el proceso
    error.value = err.message;
  } finally {
    // Esto se ejecuta siempre, haya éxito o error.
    submitting.value = false;
  }
}
</script>

<template>
  <header class="h-[50vh] bg-cover bg-center bg-fixed relative" style="background-image: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/src/assets/images/fondos/fondo-contacto.jpg')">
    <div class="flex items-center justify-center h-full">
      <h2 class="text-4xl lg:text-5xl text-white font-oswald uppercase tracking-widest">Contacto</h2>
    </div>
  </header>

  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
      
      <div>
        <SectionTitle>Envíanos un Mensaje</SectionTitle>
        <div class="bg-dark-light p-8 rounded-xl shadow-lg mt-12">
          
          <div v-if="success" class="text-center p-8 bg-green-900/50 border border-green-500 rounded-lg">
            <h3 class="text-2xl font-oswald text-white">¡Mensaje Enviado!</h3>
            <p class="text-slate-300 mt-2">Gracias por contactarnos. Te responderemos a la brevedad.</p>
          </div>

          <form @submit.prevent="handleSubmit" v-else class="space-y-6">
            <div>
              <label for="name" class="form-label">Nombre</label>
              <input type="text" id="name" v-model="formData.name" required class="form-input">
            </div>
            <div>
              <label for="email" class="form-label">Email</label>
              <input type="email" id="email" v-model="formData.email" required class="form-input">
            </div>
            <div>
              <label for="message" class="form-label">Mensaje</label>
              <textarea id="message" v-model="formData.message" rows="5" required class="form-input"></textarea>
            </div>
            <div>
              <BaseButton type="submit" :disabled="submitting" class="w-full">
                {{ submitting ? 'Enviando...' : 'Enviar Mensaje' }}
              </BaseButton>
            </div>
            <p v-if="error" class="text-red-400 text-center">{{ error }}</p>
          </form>

        </div>
      </div>
      
      <div>
        <SectionTitle>Encuéntranos Aquí</SectionTitle>
        <div class="w-full rounded-xl overflow-hidden shadow-lg mt-12 min-h-[500px] border-4 border-dark-light">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3546.3924867035375!2d-65.55902731119613!3d-27.269576568328965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9423c95f42fee37d%3A0x5805b4efb733a1d0!2sDon%20Enrique%2C%20beer%20and%20food!5e0!3m2!1ses-419!2sar!4v1756394709728!5m2!1ses-419!2sar" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
            class="w-full h-full"
            style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
            title="Mapa de la ubicación del local">
          </iframe>
        </div>
      </div>

    </div>
  </section>
</template>

<style lang="postcss" scoped>
/* =======================================================================
   ESTILOS PERSONALIZADOS PARA EL FORMULARIO
   =======================================================================
   Usamos @apply para agrupar utilidades de Tailwind en clases reutilizables.
*/
.form-label {
  @apply block mb-2 text-sm font-bold text-slate-300 uppercase tracking-wider;
}
.form-input {
  @apply w-full px-4 py-3 bg-dark border border-slate-600 rounded-lg text-slate-200 
         focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary 
         transition-all duration-300;
}
</style>