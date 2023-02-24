import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js'
const app = createApp(App)
import '@/mock/mock.js'; // 模拟数据
app
    .use(router)
    .mount('#app')
