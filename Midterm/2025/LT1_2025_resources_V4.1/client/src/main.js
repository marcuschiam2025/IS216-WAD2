import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import Bootstrap CSS (npm install bootstrap)
import 'bootstrap/dist/css/bootstrap.min.css';

// Import Bootstrap JS (npm install bootstrap)
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const app = createApp(App)

app.use(router)

app.mount('#app')
