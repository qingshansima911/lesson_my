import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css' // reset
import 'lib-flexible/flexible'  // 移动端适配就做好了
import router from '@/router/router.js'
import {
    Swipe,
    SwipeItem,
    Skeleton
} from 'vant';
import 'vant/lib/index.css'
import './mock/mock'
import { createPinia } from 'pinia';
// import {
//     ElInput
// } from 'element-plus'
// import 'element-plus/dist/index.css'

const app = createApp(App)
app
    .use(router)
    // .use(Search)
    // .use(ElInput)
    .use(Swipe)
    .use(SwipeItem)
    .use(Skeleton)
    .use(createPinia())
    .mount('#app')
