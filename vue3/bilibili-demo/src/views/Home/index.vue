<template>
    <div>
        <!-- 一屏半左右 -->
        <!-- 头部组件 -->
        <app-header></app-header>
        <!-- 频道组件 -->
        <home-channel></home-channel>
        <!-- 轮播组件 -->
        <home-swipe></home-swipe>
        <!-- 视频组件 容器组件 -->
        <home-video-list></home-video-list>
    </div>
</template>

<script setup>
import AppHeader from '~/AppHeader.vue'
import HomeChannel from '~/HomeChannel.vue'
import HomeSwipe from '~/HomeSwipe.vue'
import HomeVideoList from '~/HomeVideoList.vue'
import { onMounted } from 'vue';
import { getSwiperList, getVideoList } from '@/service/home.js';

onMounted(async()=>{
    const swiperData = await getSwiperList()
    console.log(swiperData);
    const videoData = await getVideoList()
    console.log(videoData);
})

</script>
<style lang="stylus" scoped>

</style>