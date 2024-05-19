import { createApp } from 'vue'
import axios from 'axios'
import App from './App.vue'
import CustomScrollbar from 'custom-vue-scrollbar'
import { createPinia } from 'pinia'

import './style.css'
import 'custom-vue-scrollbar/dist/style.css'

axios.defaults.baseURL = 'https://api.jamendo.com/v3.0'

const pinia = createPinia()
const app = createApp(App)

app.component(CustomScrollbar.name, CustomScrollbar)

app.use(pinia)

app.mount('#app')
