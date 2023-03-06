import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/views/Home.vue'
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path:'/',
            name: '/',
            redirect:'/home'
        },
        {
            path:'/home',
            name: 'home',
            component: Home
        },
        {
            path:'/community',
            name: 'community',
            component: () => import ('@/views/Community.vue')
        },
        {
            path:'/message',
            name: 'message',
            component: () =>import ('@/views/Message.vue')
        },
        {
            path:'/journey',
            name: 'journey',
            component: () =>import ('@/views/Journey.vue')
        },
        {
            path:'/my',
            name: 'my',
            component: () =>import ('@/views/My.vue')
        },
        {
            // 动态路由   url  params   ?id= queryString
            path: '/detail/:id',
            name: 'detail',
            component: () => import('@/views/Detail.vue')
        },
        
    ]
})
export default router