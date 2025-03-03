// Core Vue imports
import { createApp } from 'vue'
import App from './App.vue'
import { initializeApp } from 'firebase/app'
import { VueFire, VueFireAuth } from 'vuefire'
import router from './router'

// Styles
import './style.css'

// Create Vue application instance
const app = createApp(App)

// Initialize Firebase
app.use(VueFire, {
    firebaseApp: initializeApp({
        apiKey: "AIzaSyCXeHBKb6Lpo6Wa2Gqw0f0ueh_dbIaXeRA",
        authDomain: "grok-games.firebaseapp.com",
        projectId: "grok-games",
        storageBucket: "grok-games.firebasestorage.app",
        messagingSenderId: "890158077451",
        appId: "1:890158077451:web:e3d434dec603b9123b990e"
    }),
    modules: [
        VueFireAuth(),
    ],
})

// Register plugins
app.use(router)

// Mount application
app.mount('#app')
