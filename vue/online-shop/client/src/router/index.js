// 路由如何介绍？路由的懒加载，二级路由，三级路由
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

Vue.use(Router) //调用install方法 this.$router $route

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/admin',
      name: 'Admin',
      component: () => import('../pages/admin/Index.vue'),
      children: [
        {
          path: 'new',
          name: 'New',
          component: () => import('../pages/admin/New.vue')
        },
        {
          path: '',
          name: 'Products',
          component: () => import('../pages/admin/Products.vue')
        },
        {
          path: 'edit/:id',
          name: 'Edit',
          component: () => import('../pages/admin/Edit.vue')
        },
      ]
    },
    {
      path: '/cart',
      name: 'Cart',
      component: () => import('../pages/Cart.vue')
    },
  ]
})