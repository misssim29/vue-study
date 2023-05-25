import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js';
import Vuex from './store/index.js';

createApp(App).use(router).use(Vuex).mount('#app');
