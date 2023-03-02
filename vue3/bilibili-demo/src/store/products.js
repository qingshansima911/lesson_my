import { defineStore } from 'pinia';
import { getProducts } from '@/service/shop.js';
// 创建子仓
export const useProductsStore = defineStore('products', {
    state: () => { // 中央状态
        return {
            all:[]
        }
    },
    actions: { // 接管了数据请求
        // 走接口
        async loadAllProducts() {
            const res = await getProducts()
            // console.log(res);
            this.all = res.result
        }
    }
})