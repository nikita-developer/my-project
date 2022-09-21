import { createApp } from 'vue'
import App from './App.vue'
// import router from './router'
import store from './store'
import PrimeVue from 'primevue/config';
import InputText from 'primevue/inputtext';
import '@/styles/main.scss'

const app = createApp(App);

app
.use(PrimeVue)
.component('InputText', InputText)
.use(store)
// .use(router)
.mount('#app')
