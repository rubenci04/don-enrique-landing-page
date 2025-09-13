// =======================================================================
// ARCHIVO DE ENTRADA PRINCIPAL DE LA APLICACIÓN
// =======================================================================

// 1. Importamos los estilos de Tailwind.
// Hemos movido el archivo a la carpeta 'assets' para una mejor organización.
import './assets/styles/tailwind.css';

// 2. Importaciones de Vue para iniciar la aplicación.
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import i18n from './i18n';

// 3. Creamos nuestra instancia de la aplicación Vue.
const app = createApp(App);

// 4. Le decimos a Vue que use nuestro sistema de rutas.
app.use(router);

// 5. Le decimos a Vue que use i18n.
app.use(i18n);

// 6. Montamos la aplicación en el div con id="app" de nuestro index.html.
app.mount('#app');

// 7. Importamos y inicializamos AOS para las animaciones.
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();