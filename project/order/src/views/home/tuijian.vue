<template>
    <div class="home_dizhi">
        <div>东华理工大学</div>
        <div>
            <i class="iconfont icon-gouwuche"></i>
            <i class="iconfont icon-xiaoxi"></i>
        </div>
    </div>
    <search/>
    <fenlei/>
</template>

<script setup>
import search from './search.vue'
import fenlei from './fenlei.vue'
</script>

<style lang="stylus" scoped>
@import '../../common/style/mixin.styl'
.home_dizhi
    fj()
    font-size .45rem
    color white 
    margin .2rem
    i 
        color white
        margin 0 .2rem
        font-size .6rem
</style>