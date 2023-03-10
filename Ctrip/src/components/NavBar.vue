<template>
    <div class="navbar">
        <ul class="nav-list">
            <router-link to="home" class="nav-list-item">
                <i class="iconfont icon-shouye"></i>
                <div>首页</div>
            </router-link>
            <router-link to="community" class="nav-list-item">
                <i class="iconfont icon-shequ-weijihuo"></i>
                <div>社区</div>
            </router-link>
            <router-link to="message" class="nav-list-item">
                <i class="iconfont icon-31xiaoxi"></i>
                <div>消息</div>
            </router-link>
            <router-link to="journey" class="nav-list-item">
                <i class="iconfont icon-SX_015"></i>
                <div>行程</div>
            </router-link>
            <router-link to="my" class="nav-list-item">
                <i class="iconfont icon-zuanshi"></i>
                <div>我的</div>
            </router-link>
        </ul>
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
    padding .266667rem /* 10/37.5 */ 0 0 0
    box-shadow 0px -1px 1px 1px #F2F2F2
    .nav-list
        fj()
        .nav-list-item
            flex 1
            flex-direction column
            text-align center
            &.router-link-active
                color $primary
</style>