import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // 导入路由配置文件
import './styles/tailwind.css';//引入tailwind样式
import { 
  ElTabs, 
  ElTabPane,
} from 'element-plus';
import 'element-plus/dist/index.css';//引入 Element Plus
import { createPinia } from 'pinia'
import {
  Form,
  Field,
  Button,
  Tabs,
  Tab,
  Swipe,
  SwipeItem
} from 'vant';
import 'vant/lib/index.css'//引入Vant

const app = createApp(App);
app.use(router); // 使用路由配置
app.use(ElTabs); 
app.use(ElTabPane); 
app.use(createPinia())
app.use(Form)
app.use(Field)
app.use(Button)
app.use(Tabs)
app.use(Tab)
app.use(Swipe)
app.use(SwipeItem)
app.mount('#app');
