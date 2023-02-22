<template>
    <div>
        <li v-for="product in products" :key="product.id">
            {{ product.title }} - {{ product.price }} - 库存{{ product.inventory }}
            <br />
            <button 
                :disabled="!product.inventory" 
                @click="addProductToCart(product)">
                Add To Cart
            </button>
        </li>
    </div>
</template>
  
<script setup>
// 接口 请求 数据  -> [] ->   数据不归组件管理
// 共享状态， 管他什么组件 数据管理独立于组件之外....
import { useStore } from "vuex";
import { computed, onMounted } from "vue";
// 数据的管理和请求应该都交给vuex  不应该出现在这里
// import  shop from '../api/shop.js';

const store = useStore();
// console.log(store.state.products.all)
const products = computed(() => store.state.products.all)

onMounted(() => {
    // 利用回调解决异步问题
    //    shop.getProducts((products) => {
    //         console.log(products);
    //     })

    // 请求数据方法  叫dispatch(发送) 一个action 模块 + 方法
    store.dispatch("products/getAllProducts");
});
const addProductToCart = (product) => {
    // console.log('=_=');
    //   actions
    store.dispatch('cart/addProductToCart', product);
};
</script>
  
<style scoped lang="stylus">
</style>