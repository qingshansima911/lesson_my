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
                <img src="https://i.328888.xyz/2023/03/18/Lousd.jpeg">
            </div>
            <div class="container_message__item">
                <div class="title">登录后查看消息</div>
                <span class="text" @click="gotoLogin">登录/注册</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import NavBar from '../../components/NavBar.vue';
import router from '@/router/router'
const gotoLogin = () => {
    router.push({
        path: '/login'
    })
}

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
        margin 2rem
        .container_message__item
            text-align center
            img
                wh(3rem,3rem)
            .title
                margin .4rem 0
            .text
                color #66B5F7
                font-size .4rem /* 20/37.5 */
                border 1px solid #B6D3FA
                padding .2rem 
                border-radius .16rem
</style>