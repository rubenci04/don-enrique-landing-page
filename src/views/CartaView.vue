<script setup>
import { ref } from 'vue';
// Importamos los componentes necesarios
import BaseModal from '@/components/BaseModal.vue'; 
import SectionTitle from '@/components/SectionTitle.vue';

// Importamos las imágenes de los platos
import imgSandwiches from '@/assets/images/carta/menu-sandwichs.png'; 
import imgBurgers from '@/assets/images/carta/menu-burgers.png';
import imgPapas from '@/assets/images/carta/menu-papas.png';
import imgPizzas from '@/assets/images/carta/menu-pizza.png';
import imgPlatos from '@/assets/images/carta/menu-platos.png';
import imgBebidas from '@/assets/images/carta/menu-bebidas.png';

// =======================================================================
// LÓGICA DEL COMPONENTE
// =======================================================================

// Variable reactiva para almacenar el plato seleccionado que se mostrará en el modal.
const selectedPlato = ref(null);

// Array con la información de cada categoría de plato.
const platos = ref([
  { id: 'platoModal1', titulo: 'Sandwiches', imagen: imgSandwiches, descripcion: 'De Milanesa (Común o Especial), Lomitos (Común o Especial) y Tostados de Ternera o Jamón y Queso.' },
  { id: 'platoModal2', titulo: 'Hamburguesas', imagen: imgBurgers, descripcion: 'Desde la clásica Single hasta nuestras creaciones especiales como la Don Roque y la Don Enrique. ¡No te pierdas la de Matambrito!' },
  { id: 'platoModal3', titulo: 'Papas', imagen: imgPapas, descripcion: 'Las más ricas papas en todas sus versiones: Clásicas, con Cheddar y las especiales de la casa con panceta crocante y verdeo.' },
  { id: 'platoModal4', titulo: 'Pizzas', imagen: imgPizzas, descripcion: 'Una gran variedad de pizzas caseras elaboradas con los mejores ingredientes y recetas de la casa.' },
  { id: 'platoModal5', titulo: 'Platos', imagen: imgPlatos, descripcion: 'Prueba nuestras milanesas a la napolitana, ¡son la especialidad de Don Enrique!' },
  { id: 'platoModal6', titulo: 'Bebidas', imagen: imgBebidas, descripcion: 'Cervezas artesanales e industriales, vinos de la casa, gaseosas y aguas saborizadas.' }
]);
</script>

<template>
  <header class="h-[50vh] bg-cover bg-center bg-fixed relative" style="background-image: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/src/assets/images/fondos/fondo-carta.jpg')">
    <div class="flex items-center justify-center h-full">
      <h2 class="text-4xl lg:text-5xl text-white font-oswald uppercase tracking-widest">Nuestros Platos</h2>
    </div>
  </header>

  <main>
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <SectionTitle>Hecho con Pasión</SectionTitle>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 mt-16">
        
        <div v-for="plato in platos" :key="plato.id"
             @click="selectedPlato = plato"
             class="text-center group cursor-pointer">
          
          <div class="relative w-64 h-64 mx-auto">
             <div class="absolute inset-0 bg-dark-light rounded-full transform group-hover:scale-105 transition-transform duration-300"></div>
            <img 
              :src="plato.imagen" 
              :alt="plato.titulo" 
              class="w-full h-full object-contain rounded-full transform group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300 p-4"
            >
          </div>

          <h4 class="mt-6 text-2xl font-oswald uppercase text-white font-semibold transition-colors duration-300 group-hover:text-primary">
            {{ plato.titulo }}
          </h4>
        </div>

      </div>
    </section>
  </main>

  <BaseModal :show="selectedPlato !== null" @close="selectedPlato = null">
    <div v-if="selectedPlato" class="text-center">
      <h3 class="text-2xl font-oswald uppercase text-primary mb-4">{{ selectedPlato.titulo }}</h3>
      <img :src="selectedPlato.imagen" :alt="selectedPlato.titulo" class="rounded-lg mb-4 w-full bg-dark-light p-4">
      <p class="text-slate-300 text-lg">{{ selectedPlato.descripcion }}</p>
    </div>
  </BaseModal>
</template>