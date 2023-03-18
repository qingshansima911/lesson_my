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
            meta: {
                isLogin: 2
            },
            component: () =>import ('@/views/Message/Message.vue')
        },
        {
            path:'/loginMessage',
            name: 'loginMessage',
            component: () =>import ('@/views/Message/loginMessage.vue')
        },
        {
            path:'/journey',
            name: 'journey',
            component: () =>import ('@/views/Journey/Journey.vue')
        },
        {
            path: '/loginMy',
            name: 'loginMy',
            component: () => import('@/views/My/loginMy.vue'),
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
        {
            path:'/my',
            name: 'my',
            meta: {
                isLogin: 1
            },
            component: () =>import ('@/views/My/My.vue')
        },
        {
            path:'/login',
            name: 'login',
            component: () =>import ('@/views/Login/Login.vue')
        },
    ]
})
export default router