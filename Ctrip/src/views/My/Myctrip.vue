<template>
    <div class="container">
        <AllOrder/>
        <div class="container_center">
            <div class="container_center__item">
                <div class="num">0</div>
                <div class="collection">我的收藏</div>
            </div>
            <div class="container_center__item">
                <div class="num">24</div>
                <div class="browsing-history">浏览历史</div>
            </div>
            <div class="container_center__item">
                <div class="num">0</div>
                <div class="score">积分</div>
            </div>
            <div class="container_center__item">
                <div class="num">0</div>
                <div class="coupon">优惠券</div>
            </div>
        </div>
        <Wallet/>
        <Tools/>
        <div class="container_square">
            <div class="container_square__top">
                <div class="square">活动广场</div>
                <div class="more">更多 ></div>
            </div>
            <div class="container_square__bottom">
                <div class="container_square__item">
                    <i class="iconfont icon-qiapai"></i>
                    <div class="text">打牌领话费</div>
                </div>
                <div class="container_square__item">
                    <i class="iconfont icon-liwu"></i>
                    <div class="text">领福利</div>
                </div>
                <div class="container_square__item">
                    <i class="iconfont icon-hongbao"></i>
                    <div class="text">现金红包</div>
                </div>
                <div class="container_square__item">
                    <i class="iconfont icon-chongzhi"></i>
                    <div class="text">手机充值</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import AllOrder from '~/AllOrder.vue'
import Wallet from '~/Wallet.vue'
import Tools from '~/Tools.vue'
</script>

<style lang="stylus" scoped>
@import '../../common/style/mixin.styl'
.container
    .container_center
        fj()
        margin .3rem 
        padding .3rem 
        background-color #fff
        border-radius  .266667rem
        .container_center__item
            fd()
            align-items center
            .num
                font-weight 700
                font-size .46rem /* 15/37.5 */
    .container_square
        padding .3rem 
        background-color #fff
        border-radius  .266667rem
        margin .3rem 
        .container_square__top
            fj()
            padding-bottom .3rem
            .square
                font-weight 700
                font-size .4rem /* 15/37.5 */
        .container_square__bottom
            fj()
            .container_square__item
                fd()
                align-items center
                .text
                    color #666
                    padding .1rem 0
                .iconfont
                    font-size 26px
                    color #666
</style>