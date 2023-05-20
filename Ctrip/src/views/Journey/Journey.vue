<template>
    <div class="journey">
        <header class="journey_header">
            <div class="left">
                <span class="iconfont icon-fanhui" @click="goBack"></span>
                <span class="journey_header__name">全部订单</span>
            </div>
            <div class="right">
                <i class="iconfont icon-sousuo"></i>
                <i class="iconfont icon-more"></i>
            </div>
        </header>
        <div class="block"></div>
        <van-tabs>
            <van-tab title="全部">
                <journeyAll/>
            </van-tab>
            <van-tab title="待付款">内容 2</van-tab>
            <van-tab title="未出行">内容 3</van-tab>
            <van-tab title="待点评">内容 4</van-tab>
        </van-tabs>
        <nav-bar></nav-bar>
    </div>
</template>

<script setup>
import NavBar from '../../components/NavBar.vue';
import journeyAll from './journeyAll.vue';
import { useRouter } from 'vue-router'

const router = useRouter()
const goBack = () => {
    router.go(-1)
}
</script>

<style lang="stylus" scoped>
@import '../../common/style/mixin.styl'
.journey
    .journey_header
        position fixed
        z-index 999
        background-color #fff
        padding 0 .3rem
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
            .journey_header__name
                margin-left 3.5rem
                font-size .45rem
        .right
            fj()
            align-items center
            .iconfont
                margin-left .3rem
    .block
        height 1.1733rem
    .van-tabs>>>.van-tab__text 
        font-size .4rem
    .van-tabs>>>.van-tabs__line
        bottom .55rem
    .van-tabs>>>.van-tab--active>.van-tab__text 
        font-size .5rem
        color #2790FA
</style>