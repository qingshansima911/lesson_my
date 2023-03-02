<template>
    <!-- 不要写的和原产品一模一样 直接使用组件 简化-->
    <van-swipe
        :autoplay="3000"
        class="my-swiper"
        indicator-color="white">
        <van-swipe-item 
            v-for="item in props.swiperList" 
            v-lazy="item"
            :key="item.imgSrc">
            <img :src="item.imgSrc" alt="" />
        </van-swipe-item>
    </van-swipe>
</template>

<script setup>l
const props = defineProps(['swiperList'])
// const props = defineProps({
//     swiperList: {
//         type: Object,
//         value:[]
//     }
// })
</script>

<style lang="stylus" scoped>
.my-swiper
    img
        width 100%
</style>