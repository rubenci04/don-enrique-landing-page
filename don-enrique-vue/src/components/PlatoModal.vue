<script setup>
// =======================================================================
// DEFINICIÓN DE PROPIEDADES (PROPS)
// =======================================================================
// Este componente es genérico y reutilizable. No tiene datos propios,
// sino que los recibe como "propiedades" (props) desde el componente que lo usa.
defineProps({
  // 'modalId': Un ID único para que Bootstrap sepa qué modal abrir.
  modalId: {
    type: String,
    required: true // 'required: true' significa que esta prop es obligatoria.
  },
  // 'titulo': El título que se mostrará en la cabecera del modal.
  titulo: {
    type: String,
    required: true
  },
  // 'imagen': La ruta de la imagen a mostrar.
  imagen: {
    type: String,
    required: true
  },
  // 'descripcion': El texto descriptivo del modal.
  descripcion: {
    type: String,
    required: true
  }
});
</script>

<template>
  <div class="modal fade" :id="modalId" tabindex="-1" :aria-labelledby="`${modalId}Label`" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" :id="`${modalId}Label`">{{ titulo }}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <img :src="imagen" class="img-fluid rounded mb-3" :alt="`Imagen de ${titulo}`">
          <p>{{ descripcion }}</p>
        </div>
      </div>
    </div>
  </div>
</template>