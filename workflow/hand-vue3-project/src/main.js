// console.log('hello world');
// import App from './App.vue' // 引入App.vue 但.vue 文件无法识别
// const root = document.getElementById('root')
// root.textContent = '你喵贵姓?'
import { createApp } from "vue";
import App from './App.vue'
const app = createApp(App)
app
    .mount('#root')
