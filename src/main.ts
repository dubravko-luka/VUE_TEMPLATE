import './assets/style/main.css';
import './assets/style/variable.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import AdminLayout from '@/layouts/AdminLayout/AdminLayout.vue';
import router from './router/v1';

const app = createApp(AdminLayout);

app.use(createPinia());
app.use(router);

app.mount('#app');
