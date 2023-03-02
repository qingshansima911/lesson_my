import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js'
import '@/mock/mock.js'; // 模拟数据
import { createPinia } from 'pinia';
import { // 按需加载
    Swipe,
    SwipeItem,
    Lazyload
} from 'vant';
import 'vant/lib/index.css'
import 'lib-flexible/flexible' // rem
import './assets/main.css'  // reset 

const app = createApp(App)
app
    .use(router)
    .use(createPinia())
    .use(Swipe)
    .use(SwipeItem)
    .use(Lazyload)

    .mount('#app')
