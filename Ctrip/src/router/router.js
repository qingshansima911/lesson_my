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
            meta: {
                index: 1
            },
            component: Home
        },
        {
            path:'/community',
            name: 'community',
            meta: {
                index: 1
            },
            component: () => import('@/views/Community/Community.vue'),
            redirect: '/communitySquare',
            children: [
                {
                    path: '/communitySubscrible',
                    name: 'communitySubscrible',
                    component: ()=> import('@/views/Community/CommunitySubscrible.vue')
                },
                {
                    path: '/communitySquare',
                    name: 'communitySquare',
                    component: () => import('@/views/Community/CommunitySquare.vue'),
                },
                {
                    path: '/communityGroup',
                    name: 'communityGroup',
                    component: ()=> import('@/views/Community/CommunityGroup.vue')
                },
            ]
        },
        {
            path:'/message',
            name: 'message',
            meta: {
                isLogin: 2,
                index: 1
            },
            component: () =>import ('@/views/Message/Message.vue')
        },
        {
            path:'/loginMessage',
            name: 'loginMessage',
            meta: {
                index: 1
            },
            component: () =>import ('@/views/Message/loginMessage.vue')
        },
        {
            path:'/journey',
            name: 'journey',
            meta: {
                index: 1
            },
            component: () =>import ('@/views/Journey/Journey.vue')
        },
        {
            path: '/loginMy',
            name: 'loginMy',
            meta: {
                index: 1
            },
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
            meta: {
                index: 3
            },
            component: () => import('@/views/Home/Detail.vue')
        },
        {
            path:'/my',
            name: 'my',
            meta: {
                isLogin: 1,
                index: 1
            },
            component: () =>import ('@/views/My/My.vue')
        },
        {
            path:'/login',
            name: 'login',
            meta: {
                index: 1
            },
            component: () =>import ('@/views/Login/Login.vue')
        },
        {
            path:'/hotel',
            name: 'hotel',
            meta: {
                index: 1
            },
            component: () =>import ('@/views/Home/Hotel.vue')
        },
        {
            path:'/hotelDetail/:id',
            name: 'hotelDetail',
            meta: {
                index: 1
            },
            component: () =>import ('@/views/Home/HotelDetail.vue')
        },
    ]
})
export default router