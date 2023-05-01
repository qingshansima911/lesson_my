import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
    {
        path: '/',
        name: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('../views/home/home.vue'),
        redirect:'/tuijian',
        children: [
            {
                path: '/changdian',
                name: 'changdian',
                component: () => import('../views/home/changdian.vue'),
            },
            {
                path: '/tuijian',
                name: 'tuijian',
                component: () => import('../views/home/tuijian.vue'),
            },
        ]
    },
    {
        path: '/supermarket',
        name: 'supermarket',
        component: () => import('../views/supermarket/supermarket.vue')
    },
    {
        path: '/order',
        name: 'order',
        component: () => import('../views/order/order.vue')
    },
    {
        path: '/my',
        name: 'my',
        component: () => import('../views/my/my.vue')
    },
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router