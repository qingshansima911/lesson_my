// 简化了前端 api模块
import axios from 'axios'
import {
  ALL_PRODUCTS,
  ALL_PRODUCTS_SUCCESS
} from './mutation-types'

const API_BASE = 'http://localhost:3000/api/v1'

export const productActions = {
  allProducts({ commit }) {
    commit(ALL_PRODUCTS)
    axios.get(`${API_BASE}/products`).then(response => {
      commit(ALL_PRODUCTS_SUCCESS, { products: response.data })
    })
  }
}

export const manufacturerActions = {
}
