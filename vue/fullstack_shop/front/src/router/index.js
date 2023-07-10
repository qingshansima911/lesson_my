import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue';

const routes = [
  {
    path: '/',
    redirect: '/home'//302临时重定向 
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
];
const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router