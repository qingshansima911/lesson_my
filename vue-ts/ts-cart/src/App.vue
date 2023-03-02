<script setup lang="ts">
import { useProductsStore } from './store/products'
import { computed, onMounted } from 'vue';
import ProductsList from './components/ProductsList.vue'
import Cart from './components/Cart.vue'

const productsStore = useProductsStore()
// console.log(productsStore);

const all = computed(() => productsStore.state.all)

onMounted(async () => {
    await productsStore.loadAllProducts()
})

</script>

<template>
    <h1>购物车</h1>
    <hr>
    <h1>商品列表</h1>
    <products-list/>
    <hr>
    <cart/>
</template>

<style scoped></style>
