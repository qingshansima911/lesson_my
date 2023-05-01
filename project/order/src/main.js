import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './common/style/base.styl' // reset
import 'lib-flexible/flexible'  // 移动端适配就做好了

const app = createApp(App)
app
    .use(router)
    .mount('#app')
