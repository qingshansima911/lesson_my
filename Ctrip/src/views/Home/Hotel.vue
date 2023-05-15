<template>
    <div class="hotel">
        <header class="hotel_header">
            <div class="left">
                <span class="iconfont icon-fanhui" @click="goBack"></span>
                <span class="hotel_header__name">酒店</span>
            </div>
            <div class="right">
                <span class="iconfont icon-more"></span>
            </div>
        </header>
        <div class="block"></div>
        <van-tabs>
            <van-tab title="特色精选">
                <HotelList/>
            </van-tab>
            <van-tab title="限时特惠">内容 2</van-tab>
            <van-tab title="情侣约会">内容 3</van-tab>
            <van-tab title="影音电竞">内容 4</van-tab>
        </van-tabs>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import HotelList from './HotelList.vue'

const router = useRouter()
const goBack = () => {
    router.go(-1)
}
</script>

<style lang="stylus" scoped>
@import '../../common/style/mixin.styl'
.hotel
    .hotel_header
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
            .hotel_header__name
                margin 3.5rem
                font-size .45rem
        span 
            margin 0 .266667rem /* 10/37.5 */
            font-size .38rem
            
        .right
            fj()
            align-items center
    .block
        height 1.1733rem
    .van-tabs>>>.van-tab__text 
        font-size .4rem
    .van-tabs>>>.van-tabs__line
        bottom .5rem
    .van-tabs>>>.van-tab--active>.van-tab__text 
        font-size .45rem
        font-weight 600
</style>