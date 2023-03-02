import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

const app = createApp(App)
// 全家桶三件套
app
    .use(store)
    .mount('#app')
