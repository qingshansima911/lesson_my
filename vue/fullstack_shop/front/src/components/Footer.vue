<template>
  <van-tabbar route v-model="active" active-color="#f86c35">
    <van-tabbar-item replace to="/home" icon="wap-home-o">主页</van-tabbar-item>
    <van-tabbar-item replace to="/category" icon="friends-o">圈子</van-tabbar-item>
    <van-tabbar-item replace to="/cart" icon="cart-o" :badge="badge ? badge : ''">购物车</van-tabbar-item>
    <van-tabbar-item replace to="/user" icon="user-o">我的</van-tabbar-item>
  </van-tabbar>
</template>
 
<script setup>
import { ref, computed, onMounted } from 'vue';
import useCartStore from '@/store/cart.js'

const active = ref(0);
const store = useCartStore()
const badge = computed(() => store.badge)
// console.log(cart.changeBadge());
onMounted(() => {
  store.changeBadge();
})
</script>
 
<style lang="less" scoped></style>