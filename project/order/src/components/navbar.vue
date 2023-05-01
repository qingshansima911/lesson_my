<template>
    <div class="navbar">
        <router-link to="home" class="navbar_item">
            <i class="iconfont icon-shouye"></i>
            <div>首页</div>
        </router-link>
        <router-link to="supermarket" class="navbar_item">
            <i class="iconfont icon-chaoshi"></i>
            <div>全能超市</div>
        </router-link>
        <router-link to="order" class="navbar_item">
            <i class="iconfont icon-dingdan"></i>
            <div>订单</div>
        </router-link>
        <router-link to="my" class="navbar_item">
            <i class="iconfont icon-wode"></i>
            <div>我的</div>
        </router-link>
    </div>
</template>

<script setup>

</script>

<style lang="stylus" scoped>
@import '../common/style/mixin.styl'
.navbar
    position fixed
    bottom 0
    left 0
    width 100%
    z-index 9999
    background-color #fff
    box-shadow 0px -1px 1px 1px #F2F2F2
    fj()
    .navbar_item
        flex 1
        flex-direction column
        text-align center
        padding .1rem
        &.router-link-active
            color $primary
</style>