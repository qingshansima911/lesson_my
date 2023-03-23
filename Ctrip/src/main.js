import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css' // reset
import 'lib-flexible/flexible'  // 移动端适配就做好了
import router from '@/router/router.js'
import {
    Swipe,
    SwipeItem,
    Skeleton,
    Form,
    Field,
    Button,
    Tab,
    Tabs
} from 'vant';
import 'vant/lib/index.css'
import {
    ElAvatar,
    ElBadge
} from 'element-plus'
import 'element-plus/dist/index.css'
import './mock/mock'
import { createPinia } from 'pinia';

const app = createApp(App)
app
    .use(router)
    // .use(Search)
    // .use(ElInput)
    .use(Swipe)
    .use(SwipeItem)
    .use(Skeleton)
    .use(createPinia())
    .use(Form)
    .use(Field)
    .use(Button)
    .use(Tab)
    .use(Tabs)
    .use(ElAvatar)
    .use(ElBadge)
    .mount('#app')
