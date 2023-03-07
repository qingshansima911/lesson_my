<template>
    <div class="container">
        <div class="container_header">
            <div class="container_header__item">
                <img src="https://s.yezgea02.com/1604041127880/%E5%85%A8%E9%83%A8%402x.png">
                <div class="order">有奖任务</div>
            </div>
            <div class="container_header__item">
                <img src="https://s.yezgea02.com/1604041127880/%E5%85%85%E5%80%BC%402x.png">
                <div class="uncheck">旅行中心</div>
            </div>
            <div class="container_header__item">
                <img src="https://s.yezgea02.com/1604041127880/9.9%402x.png">
                <div class="untrip">创作中心</div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="stylus" scoped>
@import '../../common/style/mixin.styl'
.container
    padding 0 .3rem /* 10/37.5 */
    .container_header
        fj()
        padding 0.3rem .3rem
        background-color #fff
        border-radius  .266667rem
        .container_header__item
            fd()
            align-items center
            img
                wh(1rem,1rem)
</style>