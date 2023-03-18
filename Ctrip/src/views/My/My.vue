<template>
    <div class="page">
        <div class="page_center">
            <ScanHeader />
            <div class="login">
                <div class="text">登录携程，开启旅程</div>
                <div class="register" @click="gotoLogin">登录/注册</div>
            </div>
        </div>
        <AllOrder/>
        <Wallet/>
        <Tools/>
        <NavBar/>
    </div>
</template>

<script setup>
import ScanHeader from '../../components/ScanHeader.vue';
import AllOrder from '~/AllOrder.vue';
import Wallet from '~/Wallet.vue';
import Tools from '~/Tools.vue';
import NavBar from '~/NavBar.vue';
import router from '@/router/router'

const gotoLogin = () => {
    router.push({
        path: '/login'
    })
}

</script>

<style lang="stylus" scoped>
@import '../../common/style/mixin.styl';
.page
    background-color #F2F2F2
    wh(100vw,100vh)
    .page_center
        background-image url('https://i.328888.xyz/2023/03/02/660JX.jpeg')
        background-size cover
        padding .5rem 0
        .login  
            fd()
            align-items center
            .text
                font-size .5rem /* 30/37.5 */
                color #F4F8FA
                margin .3rem
            .register
                padding .3rem .5rem
                background-color #FF8001
                border-radius .153333rem /* 2/37.5 */
                color #F4F8FA
</style>