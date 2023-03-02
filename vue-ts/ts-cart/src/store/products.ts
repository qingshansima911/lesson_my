import { defineStore } from 'pinia';
import { getProducts, IProduct } from '../service/shop'
import { reactive } from 'vue';

// 大型项目 数据管理 pinia 是新一代的vuex 数据管理+ 页面开发
// 大型项目 ts 1w+ 10w+
// 函数式编程 消灭this
export const useProductsStore = defineStore('products', ()=>{
    let state = reactive({
        all:[] as IProduct[]
    })
    const loadAllProducts = async () => {
        const ret = await getProducts() as IProduct[]
        // console.log(ret);
        state.all = ret
    }
    const decrementProduct = (product:IProduct) => {
        const curProduct = state.all.find(item => item.id === product.id)
        if (curProduct) {
            curProduct.inventory--
        }
    }
    return {
        state,
        loadAllProducts,
        decrementProduct
    }
})