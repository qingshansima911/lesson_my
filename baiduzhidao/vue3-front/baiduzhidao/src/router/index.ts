import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/views/home/Home.vue'; // 导入你的视图组件

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  // 添加其他路由配置
  {
    path: '/featured',
    name: 'Featured',
    component: () => import('@/views/featured/Featured.vue'),
  },
  {
    path: '/question',
    name: 'Question',
    component: () => import('@/views/question/Question.vue'),
  },
  {
    path: '/message',
    name: 'Message',
    component: () => import('@/views/message/Message.vue'),
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('@/views/profile/Profile.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/Login.vue'),
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('@/views/home/Search.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
