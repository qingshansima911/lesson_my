<template>
    <div class="container_wallet">
        <div class="container_wallet__top">
            <div class="wallet">钱包</div>
            <div class="cash">礼品卡·现金 ></div>
        </div>
        <div class="container_wallet__bottom">
            <div class="container_wallet__item">
                <div class="num">1.08万</div>
                <div class="text">财富赚钱</div>
                <div class="text2">新人体验金</div>
            </div>
            <div class="container_wallet__item">
                <div class="num">1026券</div>
                <div class="text">拿去花</div>
                <div class="text2">先享后负</div>
            </div>
            <div class="container_wallet__item">
                <div class="num">20万</div>
                <div class="text">信用贷</div>
                <div class="text2">最高可借</div>
            </div>
            <div class="container_wallet__item">
                <div class="num">1.8万</div>
                <div class="text">白金卡</div>
                <div class="text2">预估额度</div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="stylus" scoped>
@import '../common/style/mixin.styl'
.container_wallet
        padding .3rem 
        background-color #fff
        border-radius  .266667rem
        margin .3rem 
        .container_wallet__top
            fj()
            padding-bottom .3rem
            .wallet
                font-weight 700
                font-size .36rem /* 15/37.5 */
        .container_wallet__bottom
            fj()
            .container_wallet__item
                fd()
                align-items center
                .num 
                    font-weight 700
                    font-size .46rem /* 15/37.5 */
                    // padding .05rem 0
                .text
                    font-weight 700
                    padding .05rem 0
</style>