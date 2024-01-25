import { createApp } from 'vue'
import gonkUI from '../lib/gonkUI'
import App from './App.vue'

createApp(App)
.use(gonkUI)
.mount('#app')
