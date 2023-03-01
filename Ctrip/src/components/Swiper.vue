<template>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#1baeae">
        <van-swipe-item v-for="(item, index) in list" :key="index">
            <img :src="item.img" alt=""/>
        </van-swipe-item>
    </van-swipe>
</template>

<script setup>
const props = defineProps(['list'])
</script>

<style lang="stylus" scoped>
.my-swipe
    width 100%
    img
        width 100%
        height 100%
</style>