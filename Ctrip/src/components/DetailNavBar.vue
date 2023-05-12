<template>
    <div class="comment">
        <div class="comment-input">来条神评</div>
        <div class="comment-items">
            <i class="iconfont icon-praise"></i>
            <div class="praise">1144</div>
        </div>
        <div class="comment-items">
            <i class="iconfont icon-comments"></i>
            <div class="comments">130</div>
        </div>
        <div class="comment-items">
            <i class="iconfont icon-share"></i>
            <div class="share">分享</div>
        </div>
        <div class="comment-items">
            <i class="iconfont icon-collection"></i>
            <div class="collection">181</div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="stylus" scoped>
@import '../common/style/mixin.styl'
.comment    
    display flex
    wh(100%,1rem )
    align-items center
    position fixed
    z-index 9999
    bottom 0
    background-color #FFF
    .comment-items
        fj()
        flex-direction column
        align-items center
        margin 0 .35rem
    .comment-input
        border 1px solid #DDD
        padding .15rem 1rem .15rem .4rem
        border-radius 50px
        background-color #F4F8FB
        color #999A99
</style>