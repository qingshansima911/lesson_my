import {
  ALL_PRODUCTS,
  ALL_PRODUCTS_SUCCESS
} from './mutation-types'
export const productMutations = {
  [ALL_PRODUCTS](state) {//为什么大写？常量清单
    state.showLoader = true
  },
  [ALL_PRODUCTS_SUCCESS](state, payload) {
    state.showLoader = false
    const { products } = payload
    state.products = products
  },
}

export const manufacturerMutation = {
  
}