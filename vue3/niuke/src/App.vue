<script setup>
import { reactive, onMounted, ref } from 'vue'
import { showLoadingToast, closeToast } from 'vant'
import Rate from './components/Rate.vue'
const state = reactive({
    hotwords: []
})
const score = ref(0)

function update(num) {
    score.value = num
    console.log(num);
}

onMounted(async () => {
    // showLoadingToast({
    //     message: '加载中',
    //     duration: 0
    // })
    // const sleep = (t) => {
    //     return new Promise((resovle, reject) => {
    //         setTimeout(() => {
    //             resovle()
    //         }, t);
    //     })
    // }
    // await sleep()
    // state.hotwords = [
    //     {
    //         id: 1,
    //         text: '百度面试题1'
    //     },
    //     {
    //         id: 2,
    //         text: '百度面试题2'
    //     },
    //     {
    //         id: 3,
    //         text: '百度面试题3'
    //     },
    // ]
    // const [a, b, c] = await Promise.all([sleep(2000),sleep(1000),sleep(2000),])
    // console.log(a, b, c);
    
    // closeToast()
})
</script>

<template>
    <header>
        <div class="search_wrapper">
            <van-swipe class="search-swipe" 
                vertical :autoplay="1000" 
                :show-indicators="false"
                v-if="state.hotwords.length">
                    <van-swipe-item v-for="word in state.hotwords" :key="word.id">
                        {{ word.text }}
                    </van-swipe-item>
            </van-swipe>
            <Rate :value="score" theme="red" @update-rate="update"/>
        </div>
    </header>
</template>

<style lang="stylus">
*
    padding 0
    margin 0
body
    background-color gray
header
    padding 30px 18px
.search_wrapper
    width 20rem
    height 40px
    border-radius 40px
    padding-left 40px
    background-color white
    display flex
    align-items center
.search-swipe
    height 30px
    line-height 30px
    font-size 14px
</style>
