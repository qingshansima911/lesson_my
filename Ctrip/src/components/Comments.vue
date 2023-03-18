<template>
    <div class="comments">
        <div class="comments_text">共88条评论</div>
        <div class="comments_profile">
            <img src="https://i.328888.xyz/2023/03/18/LsjPF.jpeg" alt="">
            <div class="comments_profile__input">喜欢就给个评论支持一下</div>
        </div>
        <div 
            :key="index"
            v-for="item,index in props.comments"
            class="comment">
            <img :src="item.headImg" alt="">
            <div class="comment_text">
                <div class="comment_text__name">{{ item.name }}</div>
                <div class="comment_text__comment">{{ item.comment }}</div>

            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['comments'])
</script>

<style lang="stylus" scoped>
@import '../common/style/mixin.styl';
.comments
    margin 0 .2rem
    .comments_text
        border-top 1px solid #DDD
        padding .2rem 0 0 0 
        margin-top .3rem
    .comments_profile
        display flex
        margin .2rem 0
        img
            wh(.8rem,.8rem)
            margin-right .3rem
        .comments_profile__input
            fc()
            background-color #F4F4F4
            border-radius 1rem
            padding .2rem 2rem .2rem .4rem
            color gray
    .comment
        margin .4rem 0
        border-bottom 1px solid #DDD
        padding-bottom .2rem
        fj()
        img
            wh(1rem,1rem)
            margin-right  .2rem
        .comment_text
            .comment_text__name
                color gray
                margin-bottom .2rem
</style>