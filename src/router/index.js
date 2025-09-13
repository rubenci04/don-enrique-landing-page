// =======================================================================
// CONFIGURACIÓN DE VUE ROUTER
// =======================================================================

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// 'routes' es un array que define cada página de tu sitio.
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/nosotros',
    name: 'nosotros',
    component: () => import('../views/NosotrosView.vue')
  },
  {
    path: '/nuestra-carta',
    name: 'nuestra-carta',
    component: () => import('../views/CartaView.vue')
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: () => import('../views/ContactoView.vue')
  }
]

// Creamos la instancia del router.
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,

  // =======================================================================
  // CORRECCIÓN AÑADIDA AQUÍ
  // =======================================================================
  // Esta función le dice al router qué hacer con el scroll al navegar.
  // 'to' y 'from' son las rutas de destino y origen.
  // 'savedPosition' guarda la posición si usas los botones de atrás/adelante del navegador.
  scrollBehavior(to, from, savedPosition) {
    // Si hay una posición guardada (al usar atrás/adelante), la usamos.
    if (savedPosition) {
      return savedPosition
    } else {
      // Si es una navegación nueva, siempre vamos al inicio de la página.
      return { top: 0, left: 0 }
    }
  },
})

export default router