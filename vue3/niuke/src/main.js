import { createApp } from 'vue'
import App from './App.vue'
import { 
    Swipe,
    SwipeItem
} from 'vant'
import 'vant/lib/index.css'

const app = createApp(App)
app
    .use(Swipe)
    .use(SwipeItem)
    .mount('#app')
