import './assets/style.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { useAuthStore } from "./store/auth";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');

(() => {
    if (!useAuthStore().token) {
        router.push('/login')
    }
})()