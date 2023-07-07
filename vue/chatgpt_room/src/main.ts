import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";//引入路由
import "./assets/tailwind.css";//引入tailwind
import "@icon-park/vue-next/styles/index.css";//引入图标库
import "highlight.js/styles/dark.css";//引入高亮

const app = createApp(App);

app
  .use(router)
  .mount("#app");