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
  {
    path: '/product/:id',
    name: 'product',
    // import()引用的子模块会被单独分离出来，打包成一个单独的文件。
    component: () => import(/* webpackChunkName: "product" */'@/views/ProductDetail.vue')
  },
  {
    path:'/login',
    name: 'login',
    component:()=>import('@/views/Login.vue')
  },
  {
    path:'/register',
    name: 'register',
    component:()=>import('@/views/Register.vue')
  },
  {
    path:'/category',
    name: 'category',
    component:()=>import('@/views/Circle.vue')
  },
  {
    path:'/cart',
    name: 'cart',
    component:()=>import('@/views/Cart.vue')
  },
  {
    path:'/user',
    name: 'user',
    component:()=>import('@/views/User.vue')
  },
  {
    path:'/orderSubmit',
    name: 'orderSubmit',
    component:()=>import('@/views/OrderSubmit.vue') 
  },
  {
    path:'/address',
    name: 'address',
    component:()=>import('@/views/Address.vue') 
  },
  {
    path:'/addressAdd',
    name: 'addressAdd',
    component:()=>import('@/views/AddressAdd.vue') 
  },
  {
    path:'/addressEdit',
    name: 'addressEdit',
    component:()=>import('@/views/AddressEdit.vue') 
  },
  {
    path:'/goodsSearch',
    name: 'goodsSearch',
    component:()=>import('@/views/GoodsSearch.vue') 
  },
  {
    path:'/resultSearch',
    name: 'resultSearch',
    component:()=>import('@/views/ResultSearch.vue') 
  }
];
const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router