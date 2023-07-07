import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import home from '@/views/home.vue'; // 导入你的视图组件

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
