import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import router from './router/index'
import store from './store'
// npm i bootstrap
import 'bootstrap/dist/css/bootstrap.min.css' // js一样引入css webpack vite

const app = createApp(App)
app
    .use(router)
    .use(store)
    .mount('#app')
