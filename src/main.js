import { createApp } from 'vue';
import App from './App.vue'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

let app = ""

if (!app) {
  app = createApp(App).mount('#app')
}