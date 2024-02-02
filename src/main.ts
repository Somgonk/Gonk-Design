import { createApp } from 'vue'
import gonkUI from '../lib/main.ts'
import App from './App.vue'

createApp(App)
.use(gonkUI, { primary: 'dark' })
.mount('#app')

