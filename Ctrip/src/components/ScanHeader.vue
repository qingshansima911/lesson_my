<template>
    <div class="page_header">
        <div class="page_header__item">
            <i class="iconfont icon-scan"></i>
        </div>
        <div class="page_header__item">
            <i class="iconfont icon-qiandao"></i>
            <i class="iconfont icon-10"></i>
            <i class="iconfont icon-settings"></i>
            <i class="iconfont icon-gengduo"></i>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="stylus" scoped>
@import '../common/style/mixin.styl';
.page_header
        fj()
        padding .3rem
        // background-color green
        .page_header__item
            fj()
            width 50%
            .iconfont
                font-size .533333rem /* 20/37.5 */
</style>