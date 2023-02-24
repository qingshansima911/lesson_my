import { createRouter, createMemoryHistory } from 'vue-router';
const router = createRouter({
    history: createMemoryHistory(),
    routes: [
        {
            path: '/',
            component: () => import('@/views/Home/index.vue')
        },
        {
            path: '/video/:id',
            component: () => import('@/views/Video/index.vue')
        },
        {
            path: '/search',
            component: () => import('@/views/Search/index.vue')
        },
        {
            path: '/login',
            component: () => import('@/views/Login/index.vue')
        },
    ]
})
export default router