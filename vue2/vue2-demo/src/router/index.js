import VueRouter from 'vue-router'
import Goods from '../views/goods/Goods.vue'
const routes = [
    {
        path: '/',
        component: Goods
        // redirect: '/goods'
    },
    {
        path: '/goods',
        component: Goods
    }
]
const router = new VueRouter({
    mode: 'history',
    linkActiveClass: 'active',
    routes,
})

export default router