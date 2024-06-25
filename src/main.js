import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routes/routes'
import VueLazyload from 'vue-lazyload';

const app = createApp(App);

app.use(router);
app.use(VueLazyload, {
    // Opciones de configuración para vue-lazyload
});

app.mount('#app');
