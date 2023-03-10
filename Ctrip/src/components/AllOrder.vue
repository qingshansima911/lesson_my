<template>
    <div class="container_header">
            <div class="container_header__item">
                <img src="https://s.yezgea02.com/1604041127880/%E5%85%A8%E9%83%A8%402x.png">
                <div class="order">全部订单</div>
            </div>
            <div class="container_header__item">
                <img src="https://s.yezgea02.com/1604041127880/%E5%85%85%E5%80%BC%402x.png">
                <div class="uncheck">待付款</div>
            </div>
            <div class="container_header__item">
                <img src="https://s.yezgea02.com/1604041127880/9.9%402x.png">
                <div class="untrip">未出行</div>
            </div>
            <div class="container_header__item">
                <img src="https://s.yezgea02.com/1604041127880/%E9%A2%86%E5%88%B8%402x.png">
                <div class="uncomment">待评论</div>
            </div>
        </div>
</template>

<script setup>

</script>

<style lang="stylus" scoped>
@import '../common/style/mixin.styl'
.container_header
        fj()
        padding 0.3rem .3rem
        background-color #fff
        border-radius  .266667rem
        margin .3rem
        .container_header__item
            fd()
            align-items center
            img
                wh(1rem,1rem)
</style>
