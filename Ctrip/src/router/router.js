import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/views/Home/Home.vue'
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
            component: () => import ('@/views/Community/Community.vue')
        },
        {
            path:'/message',
            name: 'message',
            component: () =>import ('@/views/Message/Message.vue')
        },
        {
            path:'/journey',
            name: 'journey',
            component: () =>import ('@/views/Journey/Journey.vue')
        },
        {
            path:'/my',
            name: 'my',
            component: () => import('@/views/My/My.vue'),
            redirect: '/myctrip',
            children: [
                {
                    path: '/myctrip',
                    name: 'myctrip',
                    component: ()=> import('@/views/My/Myctrip.vue')
                },
                {
                    path: '/homepage',
                    name: 'homepage',
                    component: ()=> import('@/views/My/Homepage.vue')
                },
                
            ]
        },
        {
            // 动态路由   url  params   ?id= queryString
            path: '/detail/:id',
            name: 'detail',
            component: () => import('@/views/Home/Detail.vue')
        },
        
    ]
})
export default router