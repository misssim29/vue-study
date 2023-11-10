import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from '@/router';
import globalComponent from '@/plugins/global-component.js';
import globalDirective from '@/plugins/global-directive';
import dayjs from '@/plugins/dayjs';

const app = createApp(App);

app.use(globalComponent);
// app.directive('focus', focus);
app.use(globalDirective);
app.use(dayjs);
app.use(createPinia());
app.use(router).mount('#app');
import 'bootstrap/dist/js/bootstrap.js';
