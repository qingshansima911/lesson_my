import Vue from "vue";
import App from "./App";
// 电商管理后台 vue2
import router from './router'
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import store from './store'

Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});
