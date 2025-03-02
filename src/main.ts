// Core Vue imports
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Styles
import './style.css'

// Create Vue application instance
const app = createApp(App)

// Register plugins
app.use(router)

// Mount application
app.mount('#app')
