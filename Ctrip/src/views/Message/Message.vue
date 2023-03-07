<template>
    <div class="container">
        <nav-bar></nav-bar>
        <div class="container_nav">
            <div class="container_nav__item left">
                <div class="message">消息</div>
            </div>
            <div class="container_nav__item">
                <i class="iconfont icon-10"></i>
                <div class="text">客服</div>
            </div>
            <div class="container_nav__item">
                <i class="iconfont icon-settings"></i>
                <div class="text">设置</div>
            </div>
        </div>
        <div class="container_header">
            <div class="container_header__item">
                <img src="https://s.yezgea02.com/1604041127880/%E5%85%A8%E9%83%A8%402x.png">
                <div class="order">订单出行</div>
            </div>
            <div class="container_header__item">
                <img src="https://s.yezgea02.com/1604041127880/%E5%85%85%E5%80%BC%402x.png">
                <div class="uncheck">互动消息</div>
            </div>
            <div class="container_header__item">
                <img src="https://s.yezgea02.com/1604041127880/9.9%402x.png">
                <div class="untrip">账户通知</div>
            </div>
            <div class="container_header__item">
                <img src="https://s.yezgea02.com/1604041127880/%E9%A2%86%E5%88%B8%402x.png">
                <div class="uncomment">会员服务</div>
            </div>
        </div>
        <div class="container_message">
            <div class="container_message__item">
                <img src="https://s.yezgea02.com/1604041127880/%E9%A2%86%E5%88%B8%402x.png">
            </div>
            <div class="container_message__item">
                <div class="title">消息号动态</div>
                <div class="text">特价专区：婺女周度假区故园里酒店</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import NavBar from '../../components/NavBar.vue';
</script>

<style lang="stylus" scoped>
@import '../../common/style/mixin.styl'
.container
    // background-color #EEF8FF
    background-color #EFF9FE
    wh(100%,100vh)
    .container_nav
        fj()
        padding .3rem /* 10/37.5 */
        .container_nav__item
            fd()
            align-items center
            width 10%
            &.left
                flex 1
                padding 0 0 0 1.8rem
            .message
                font-size .533333rem /* 20/37.5 */

    .container_header
        fj()
        padding 0.3rem .3rem
        background-color #fff
        border-radius  .266667rem
        margin 0 .3rem
        .container_header__item
            fd()
            align-items center
            img
                wh(1rem,1rem)
    .container_message
        display flex
        background-color #fff
        margin  .3rem 0
        align-items center
        .container_message__item
            fd()
            padding .3rem
            img
                wh(1rem,1rem)
            .title
                font-size .433333rem /* 20/37.5 */
                color #2B5A9B
                padding .1rem 0
            .text
                color #B7B7B7
</style>