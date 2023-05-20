<template>
    <div class="category" ref="scroll" @click="gotoHotel">
        <div class="category_content" ref="content">
            <div class="category_inline">
                <div class="category_item">
                    <div v-for="item in categoryList" :key="item.categoryId" @click="gotoHotel">
                        <img :src="item.imgUrl">
                        <span>{{ item.name }}</span>
                    </div>
                </div>
            </div>
            <div class="category_inline">
                <div class="category_item">
                    <div v-for="item in categoryList" :key="item.categoryId">
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
import ObserveDOM from '@better-scroll/observe-dom'
import { useRouter } from 'vue-router'
import _ from 'lodash'
// 实现动态数据滚动
BScroll.use(ObserveDOM)

const homeStore = useHomeStore();
const categoryList = computed(() => homeStore.categoryList)
const scroll = ref(null)
const content = ref(null)
const innerLeft = ref('0px')
let scrollWidth = 0
let contentWidth = 0
let bs = null
const router = useRouter()
const gotoHotel = () => {
    router.push({
        path: '/hotel'
    })
}

onMounted(async () => {
    scrollWidth = scroll.value.offsetWidth
    contentWidth = content.value.offsetWidth
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
    bs.on('scroll', _.throttle(onScroll,1000))
})
</script>

<style lang="stylus" scoped>
@import '../common/style/mixin.styl';
.category
    white-space nowrap
    // border 1px solid red
    overflow hidden
    position relative
    margin 1.6rem 0 .6rem 0
    .category_content
        // border 1px solid red
        width 200vw
        display inline-block
        .category_inline
            display inline-block
            width 50%
            .category_item
                fj()
                flex-wrap wrap
                padding .24667rem 0
                div
                    fj()
                    flex-direction column
                    width 20%
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