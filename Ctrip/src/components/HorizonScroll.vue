<template>
    <div class="category" ref="scroll">
        <div class="category_content" ref="content">
            <div class="category_inline">
                <div class="category_item">
                    <div :key="index" v-for="(item, index) in categoryList">
                        <img :src="item.imgUrl">
                        <span>{{ item.name }}</span>
                    </div>
                </div>
            </div>
            <div class="category_inline">
                <div class="category_item">
                    <div :key="index" v-for="(item, index) in categoryList">
                        <img :src="item.imgUrl">
                        <span>{{ item.name }}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="category_scroll">
            <div class="category_scroll__inner" :style="{ left: innerLeft }"></div>
        </div>
    </div>
</template>

<script setup>
import { useHomeStore } from '@/store/home.js'
import {  computed, onMounted, ref } from 'vue'
import BScroll from '@better-scroll/core';

const homeStore = useHomeStore();
const categoryList = computed(() => homeStore.categoryList)
const scroll = ref(null)
const content = ref(null)
const innerLeft = ref('0px')

onMounted(async () => {
    let scrollWidth = scroll.value.offsetWidth
    let contentWidth = content.value.offsetWidth
    // console.log(scrollWidth,contentWidth);
    await homeStore.getCategoryList() 
    let bs = new BScroll(scroll.value, {
        scrollX: true,
        probeType: 3
    })
    const onScroll = position => {
        // console.log(position);
        let percent = Math.abs(position.x) / (contentWidth - scrollWidth)
        // // console.log(percent);
        let moveLeft = percent * 14
        innerLeft.value = `${moveLeft}px`
    }
    bs.on('scroll',onScroll)
})
</script>

<style lang="stylus" scoped>
@import '../common/style/mixin.styl';
.category
    white-space nowrap
    // border 1px solid red
    overflow hidden
    position relative
    width 360px
    margin .2rem -0.2rem 
    .category_content
        // border 1px solid red
        width 720px
        display inline-block
        .category_inline
            display inline-block
            width 360px
            .category_item
                fj()
                flex-wrap wrap
                padding .24667rem 0
                div
                    fj()
                    flex-direction column
                    width 65px
                    align-items center
                    img
                        wh(1rem, 1rem)
                        margin .1rem 0
    .category_scroll
        position absolute
        bottom 0
        width 24px
        height 4px
        background-color #DDD
        border-radius 90px
        left 50%
        margin-left -12px
        .category_scroll__inner
            position absolute
            bottom 0 
            width 10px
            height 100%
            background-color #939393
            border-radius 90px
</style>