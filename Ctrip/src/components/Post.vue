<template>
    <div class="post">
        <!-- <van-swipe class="my_swipe" :autoplay="2000" indicator-color="pink">
            <van-swipe-item v-for="(item,index) in post" :key="index">
                <img :src="item.ar_img" alt="">
            </van-swipe-item>
        </van-swipe> -->
        <img :src="post.ar_img" alt="">
        <div class="introduce">{{ post.introduce }}</div>
        <div class="post-des">
            <div class="author-des">
                <i class="iconfont icon-wode"></i>
                <span class="author"> {{ post.author }}</span>
            </div>
            <div class="look-des">
                <i class="iconfont icon-eye"></i>
                <span class="like"> {{ post.look }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['post'])
</script>

<style lang="stylus" scoped>
@import '../common/style/mixin.styl'
.post
    width 100%
    padding .2rem 0
    img
        width 100%
        height 100%
    .post-des
        fj()
</style>