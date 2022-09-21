import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/styles/main.scss'

import PrimeVue from 'primevue/config'
import Menubar from 'primevue/menubar'

const app = createApp(App)

app.use(PrimeVue)
    .component('Menubar', Menubar)
    .use(store)
    .use(router)
    .mount('#app')
