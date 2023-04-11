import { createRouter, createWebHashHistory } from "vue-router";
import Home from '../views/Home.vue'
import store from '../store'
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/login',
            name: 'login',
            meta: {
                redirectAlreadyLogin: true
            },
            component: () => import('../views/Login.vue')
        },
        {
            path: '/sign',
            name: 'sign',
            meta: {
                redirectAlreadyLogin: true
            },
            component: () => import('../views/Sign.vue')
        },
        {
            path: '/create',
            name: 'create',
            meta: {
                requireLogin: true
            },
            component: () => import('../views/CreatePost.vue')
        },
        {
            path: '/Column/:id',
            name: 'Column',
            component: () => import('../views/ColumnDetail.vue')
        },
        {
            path: '/Posts/:id',
            name: 'post',
            component: () => import('../views/PostDetail.vue')
        },
        {
            path: '/*',
            name: 'notFound',
            component: () => import('../views/NotFound.vue')
        }
    ]
})

router.beforeEach((from, to, next) => {
    const { user, token } = store.state
    const { requireLogin, redirectAlreadyLogin } = to.meta
    // 未登录
    if (!user.isLogin) {
        if (token) {
            
        } else {
            if (requireLogin) {
                next('login')
            } else {
                next()
            }
        }
    } else {
        // 已登录
        if (redirectAlreadyLogin) {
            // 排除重复登录
            next('/')
        } else {
            
        }
    }
})
export default router