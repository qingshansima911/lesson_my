import Vue from 'vue'
import Vuex from 'vuex'
import { productActions, manufacturerActions } from './actions'
import { productMutations, manufacturerMutation } from './mutations'
import { productGetters } from './getters'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    cart: [], //购物车
    showLoader: false,//loading
    product: {},//选中的商品详情
    products: [],//商品列表
    manufacturers: []//品牌列表
  },
  // 同步 mutations_types.js
  mutations: {
    ...productMutations,
    ...manufacturerMutation,
  },
  actions: {
    ...productActions,
    ...manufacturerActions
  },
  getters: {
    ...productGetters
  },
})