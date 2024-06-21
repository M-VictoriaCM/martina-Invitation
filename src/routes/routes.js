import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import LandingPage from '../pages/LandingPage.vue'; // Importar el componente LandingPage para asegurarnos que está disponible

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/landing-page',
    name: 'LandingPage',
    component: LandingPage
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
