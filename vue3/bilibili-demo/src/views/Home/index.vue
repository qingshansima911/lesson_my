<template>
    <div>
        <!-- 一屏半左右 -->
        <!-- 头部组件 -->
        <!-- <app-header></app-header> -->
        <!-- 频道组件 -->
        <!-- <home-channel></home-channel> -->
        <!-- 轮播组件 -->
        <home-swipe :swiperList="swiperList"></home-swipe>
        <!-- 视频组件 容器组件 -->
        <!-- <home-video-list></home-video-list> -->
    </div>
</template>

<script setup>
// import AppHeader from '~/AppHeader.vue'
// import HomeChannel from '~/HomeChannel.vue'
import HomeSwipe from '~/HomeSwipe.vue'
// import HomeVideoList from '~/HomeVideoList.vue'
import { onMounted, computed } from 'vue';
// 本地组件以后基本不发送请求
// import { getSwiperList, getVideosList } from '@/service/home.js';
// import { getProducts } from '@/service/shop.js';
import { useProductsStore } from '@/store/products.js'
import { useHomeStore } from '@/store/home.js'

const store = useProductsStore();  //本地到中央的联系
const homeStore = useHomeStore();  //本地到中央的联系
const products = computed(()=>store.all)
const swiperList = computed(()=>homeStore.swiperList)
const videosList = computed(() => homeStore.videosList)
// console.log(swiperList,videoList);

onMounted(async () => {
    // console.log(store);
    // console.log(store.all);
    await store.loadAllProducts() // actions函数就是交给生命周期调用的
    await homeStore.getSwiperList() 
    await homeStore.getVideosList() 
})

</script>
<style lang="stylus" scoped>

</style>