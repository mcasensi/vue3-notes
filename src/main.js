import { createApp } from 'vue'
import App from './App.vue'
import './styles/app.css'; // Here
import router from './router'
import VueGridLayout from "vue-grid-layout";

createApp(App).use(router).use(VueGridLayout).mount('#app');