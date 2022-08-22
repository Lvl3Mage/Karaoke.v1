import {createApp} from 'vue';
import { createPinia } from 'pinia'

import App from "./App.vue";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);

import router from './router'
app.use(router);

import PhosphorVue from "phosphor-vue";
app.use(PhosphorVue);

import Vue3TouchEvents from "vue3-touch-events";

app.use(Vue3TouchEvents);

app.mount("#app");

export {app};