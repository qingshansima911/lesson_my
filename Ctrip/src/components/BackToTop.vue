<template>
    <div   
        class="backtop" 
        :style="{ bottom: `${bottom}px`, right: `${right}px` }" 
        @click="toTop"
        v-show="show">
        <div class="back">
            <i class="iconfont icon-huidaodingbu"></i>
        </div>
    </div>
    <div class="box"></div>
</template>

<script setup>
import { ref, reactive } from 'vue'
const show = ref(false)
const bottom = ref(80)
const right = ref(20)
const state = reactive({
    duration: 500
})

window.addEventListener('scroll', () => {
    if (window.pageYOffset > window.innerHeight) {
        show.value = true
    }
    if (window.pageYOffset == 0 ) {
        show.value = false
    }
})

const toTop = () => {
    const sTop = document.documentElement.scrollTop || document.body.scrollTop
    // console.log(sTop);
    scrollTop(window, sTop, 0 , state.duration)
}
const scrollTop = (el, from , to , duration ) => {
    const difference = Math.abs(from - to)
    const step = difference / duration * 50
    function scroll(start, end, step) {
        if (start <= end) {
            return
        }
        let d = (start + step > end) ? end : start + step;
        if (start > end) {
            d = start - step < end ? end : start - step
        }
        window.scrollTo(d, d)
        window.requestAnimationFrame(() => scroll(d, end, step))
    }
    scroll(from , to , step)
}
</script>

<style lang="stylus" scoped>
@import '../common/style/mixin.styl';
.backtop
    position fixed
    z-index  9999
    .back
        padding .2rem
        // background-color #20BDCB
        background-image: linear-gradient(to bottom right, #29CDC4, #038FEF);
        width 50px
        height 50px
        border-radius 50%
        fc()
        i
            font-size 20px 
            color #FFFEF9 
            font-weight bold
            text-align center
.box
    height 400vh
</style>