import $ from "jquery";
// JS
import './js/main.js'

// SCSS
import './assets/scss/main.scss'

// window.Vue = require('vue');
import {createApp} from 'vue';
import App from "./js/App.vue";

// import App from './assets/scss/main.scss'

const app = createApp(App);

app.mount("#app");