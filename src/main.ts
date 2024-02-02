import { createApp } from 'vue'
import gonkUI from '../lib/main.ts'
import App from './App.vue'
import gonkConfig from '../gonkconfig.json'

createApp(App)
.use(gonkUI, gonkConfig)
.mount('#app')

