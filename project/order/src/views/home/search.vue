<template>
    <div class="home_search">
        <i class="iconfont icon-scan"></i>
        <div class="home_search__text">古茗 | 益禾堂</div>
        <div class="home_search__search">搜索</div>
    </div>
</template>

<script setup>

</script>

<style lang="stylus" scoped>
@import '../../common/style/mixin.styl'
.home_search
    fac()
    background-color #fff
    border-radius .5rem
    wh(100%, .8rem)
    padding 0 .05rem 0 .3rem
    .home_search__text
        color black
        flex 1
        padding 0 .2rem
        font-size .4rem
        color gray
    .home_search__search
        border-radius .5rem
        background-color red
        color white
        padding .1rem .4rem
        font-size .4rem
</style>