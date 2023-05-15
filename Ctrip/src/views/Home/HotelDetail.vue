<template>
    <div class="hotel_detail">
        <header class="detail_header">
            <div class="left">
                <span class="iconfont icon-fanhui" @click="goBack"></span>
                <span class="hotel_header__name">酒店</span>
            </div>
            <div class="right">
                <span class="iconfont icon-more"></span>
            </div>
        </header>
        <div class="block"></div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router'

const route = useRoute(); // 当前的路由
onMounted(async () => {
    const { id } = route.params 
    console.log(id);
    await homeStore.getHotelDetail(id)
})
</script>

<style lang="stylus" scoped>
@import '../../common/style/mixin.styl'
.hotel_detail
    .detail_header
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
</style>