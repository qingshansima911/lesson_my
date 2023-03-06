// typescript = js + 强类型 type 类型 script 脚本 js 超集
import { createRouter, createWebHistory,RouteRecordRaw } from "vue-router";
import HomeView from '../views/HomeView.vue';
const router = createRouter({
    history: createWebHistory(),
    // 每个route 配置 满足RouteRecordRaw 类型的约束
    routes: [
        {
            path: '/',
            redirect:'/home'
        },
        {
            path: '/home',
            name: 'home',
            component:HomeView
        }
    ]as RouteRecordRaw[]
})
export default router