import { createApp } from 'vue';
import i18next from 'i18next';
import I18NextVue from 'i18next-vue';
import App from '@/app';
import router from '@/router/router';
import store from '@/store/store';

import '@/i18next/i18next';

import '@/styles/main.scss';

// Create root
const root = document.createElement('div');
root.setAttribute('id', 'app');
document.body.prepend(root);

// Create app
const app = createApp(App);

app.use(I18NextVue, { i18next });
app.use(store);
app.use(router);

app.mount(root);
