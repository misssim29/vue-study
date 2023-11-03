import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp } from 'vue';
import App from './App.vue';

//컴포넌트 전역적으로 등록하는 방법(하지만 최적화에 좋지않다)
// import AppCard from '@/components/AppCard.vue';

const app = createApp(App);
// app.component('AppCard', AppCard);
app.mount('#app');
import 'bootstrap/dist/js/bootstrap.js';
