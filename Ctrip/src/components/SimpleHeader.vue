<template>
    <header class="simple-header">
        <div class="left">
            <span v-if="!noback" class="iconfont icon-fanhui" @click="goBack"></span>
            <div v-for="item in articleLeft">
                <el-avatar :size="30" :src="item.author_img" v-if="item.ar_id == id"/>
            </div>
            <div v-for="item in articleRight">
                <el-avatar :size="30" :src="item.author_img" v-if="item.ar_id == id"/>
            </div>
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
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute(); // 当前的路由
const props = defineProps({
    detail: {
        type: Object,
        value: {}
    },
    articleLeft: {
        type: Object,
        value: {}
    },
    articleRight: {
        type: Object,
        value: {}
    },
    noback: {
        type: Boolean,
        value: false
    }
})
const goBack = () => {
    router.go(-1)
}
const { id } = route.params
</script>

<style lang="stylus" scoped>
@import '../common/style/mixin';

.simple-header
    position fixed
    z-index 999
    background-color #fff
    top 0
    left 0
    fj()
    wh(100%, 1.17333rem)
    // padding 0 .26667rem
    color #252525
    align-items center
    .left
        fj()
        align-items center
        img
            wh(.8rem,.8rem)
            margin 0 .2rem 0 .4rem
        .icon-font
            font-size .6rem
    span 
        margin 0 .266667rem /* 10/37.5 */
        font-size .38rem
    .right
        fj()
        align-items center
        .subscribe
            border 1px solid #DDD
            border-radius .533333rem /* 20/37.5 */
            padding .1rem .4rem 
            font-size .38rem
        .icon-font
            font-size .7rem
.block
    height 1.1733rem
</style>