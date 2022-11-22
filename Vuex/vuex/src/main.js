import { createApp } from 'vue'
import App from './App.vue'
import stores from './store/Store.js' // [store]

createApp(App).use(stores).mount('#app')
