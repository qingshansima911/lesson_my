<template>
    <header class="simple-header">
        <div class="left">
            <span v-if="!noback" class="iconfont icon-fanhui" @click="goBack"></span>
            <span class="iconfont icon-wode"></span>
            <span class="simple-header-name"> {{ detail.author }}</span>
        </div>
        <div class="right">
            <span class="subscribe">+&nbsp;关注</span>
            <span class="iconfont icon-more"></span>
        </div>
    </header>
    <div class="block"></div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const props = defineProps({
    detail: {
        type: Array,
        value: []
    },
    noback: {
        type: Boolean,
        value: false
    }
})
const goBack = () => {
    router.go(-1)
}
</script>

<style lang="stylus" scoped>
@import '../common/style/mixin';

.simple-header
    position fixed
    top 0
    left 0
    z-index 10000
    fj()
    wh(100%, 1.17333rem)
    padding 0 .26667rem
    color #252525
    align-items center
    span 
        margin 0 .266667rem /* 10/37.5 */
        font-size .2833rem
    .subscribe
        border 1px solid #DDD
        border-radius .533333rem /* 20/37.5 */
        padding .16rem /* 6/37.5 */
.block
    height 1.1733rem
</style>