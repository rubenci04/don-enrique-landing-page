<script setup>
import { ref } from 'vue';
// Importamos los componentes que vamos a utilizar
import BaseModal from '@/components/BaseModal.vue';
import SectionTitle from '@/components/SectionTitle.vue';

// Importamos las imágenes de la galería.
// Es una buena práctica importar las imágenes para que Vite las procese correctamente.
import galeriaImg1 from '@/assets/images/nosotros/Nosotros - 1.jpg';
import galeriaImg2 from '@/assets/images/nosotros/Nosotros - 2.jpg';
import galeriaImg3 from '@/assets/images/nosotros/Nosotros - 3.jpg';
import galeriaImg4 from '@/assets/images/nosotros/Nosotros - 4.jpg';
import galeriaImg5 from '@/assets/images/nosotros/Nosotros - 5.jpg';
import galeriaImg6 from '@/assets/images/nosotros/Nosotros - 6.jpg';

// =======================================================================
// LÓGICA DEL COMPONENTE
// =======================================================================

// Variable reactiva para controlar qué item de la galería se muestra en el modal.
// Si es 'null', el modal está cerrado.
const selectedItem = ref(null);

// Texto de la historia. Usar `v-html` es correcto aquí porque controlamos el contenido.
const historiaTexto = `
  Don Enrique nació en el corazón de nuestra ciudad con un sueño simple: crear un
  lugar donde la buena comida, la cerveza artesanal de calidad y los momentos
  inolvidables se fusionaran. Desde nuestros humildes comienzos, nos hemos dedicado
  a perfeccionar nuestras recetas, desde la masa de nuestras pizzas hasta la selección
  de lúpulos para nuestras cervezas.
  <br/><br/>
  Cada plato que servimos y cada pinta que tiramos lleva una parte de nuestra pasión
  y dedicación. Nuestro local, diseñado con un equilibrio entre lo rústico y lo moderno,
  busca ser el escenario perfecto para tus reuniones, celebraciones y charlas con amigos.
  Más que un bar, somos una familia que te abre sus puertas.
`;

// Array con los datos de las imágenes de la galería.
const galeria = ref([
    { id: 'galeria-1', titulo: 'Elaboración de la Estructura', imagen: galeriaImg1, descripcion: 'Cada parte del local fue construida con nuestras propias manos.' },
    { id: 'galeria-2', titulo: 'Pintando el Exterior', imagen: galeriaImg2, descripcion: 'Dando vida y color a nuestro espacio al aire libre.' },
    { id: 'galeria-3', titulo: 'Nuestro Jardín Cervecero', imagen: galeriaImg3, descripcion: 'Un rincón verde para disfrutar de una buena cerveza.' },
    { id: 'galeria-4', titulo: 'Mobiliario Artesanal', imagen: galeriaImg4, descripcion: 'La barra y los muebles, hechos con materiales reciclados y mucho esfuerzo.' },
    { id: 'galeria-5', titulo: 'Acabados en Madera', imagen: galeriaImg5, descripcion: 'Tratamiento y quemado de la madera para un estilo rústico y único.' },
    { id: 'galeria-6', titulo: 'El Salón Terminado', imagen: galeriaImg6, descripcion: 'Un ambiente cálido y moderno listo para recibirte.' }
]);
</script>

<template>
  <header class="h-[50vh] bg-cover bg-center bg-fixed relative" style="background-image: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/src/assets/images/fondos/fondo-nosotros.jpg')">
    <div class="flex items-center justify-center h-full px-4">
      <h2 class="text-4xl lg:text-5xl text-white font-oswald uppercase tracking-widest text-center">Un Poco de Nuestra Historia</h2>
    </div>
  </header>
  
  <main>
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div class="flex justify-center">
        <div class="max-w-3xl text-center text-slate-300 text-lg leading-relaxed font-lato">
          <p v-html="historiaTexto"></p>
        </div>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
      <SectionTitle>Nuestros Espacios</SectionTitle>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        <div v-for="item in galeria" :key="item.id" 
             @click="selectedItem = item"
             class="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group h-80">
          
          <img :src="item.imagen" :alt="item.titulo" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
          
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          
          <div class="absolute bottom-0 left-0 p-6">
            <h4 class="text-white text-xl font-oswald uppercase font-semibold transform group-hover:-translate-y-2 transition-transform duration-300" style="text-shadow: 2px 2px 4px rgba(0,0,0,1);">{{ item.titulo }}</h4>
          </div>

          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <i class="bi bi-arrows-fullscreen text-white text-4xl"></i>
          </div>
        </div>
      </div>
    </section>
  </main>

  <BaseModal :show="selectedItem !== null" @close="selectedItem = null">
    <div v-if="selectedItem" class="text-center">
      <h3 class="text-2xl font-oswald uppercase text-primary mb-4">{{ selectedItem.titulo }}</h3>
      <img :src="selectedItem.imagen" :alt="selectedItem.titulo" class="rounded-lg mb-4 w-full">
      <p class="text-slate-300 text-lg">{{ selectedItem.descripcion }}</p>
    </div>
  </BaseModal>
</template>