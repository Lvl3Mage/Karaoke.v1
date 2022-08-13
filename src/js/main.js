// window.Vue = require('vue');
import {createApp} from 'vue';
import { createPinia } from 'pinia'

import App from "./App.vue";

// import App from './assets/scss/main.scss'

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);

import router from './router'
app.use(router);

app.mount("#app");

export {app};