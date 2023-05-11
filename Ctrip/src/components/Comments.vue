<template>
    <div class="comments">
        <div class="comments_text">共88条评论</div>
        <div class="comments_profile">
            <el-avatar :size="40" src="https://i.328888.xyz/2023/03/18/LsjPF.jpeg"/>
            <div class="comments_profile__input">喜欢就给个评论支持一下</div>
        </div>
        <div 
            :key="index"
            v-for="item,index in props.comments"
            class="comment">
                <el-avatar :size="40" :src="item.headImg"></el-avatar>
                <div class="comment_text">
                    <div class="comment_text__name">{{ item.name }}</div>
                    <div class="comment_text__comment">{{ item.comment }}</div>
                </div>
        </div>
    </div>
</template>

<script setup>

import { reactive } from 'vue';
const props = defineProps(['comments'])
const state = reactive({
    Img: 'https://i.328888.xyz/2023/03/18/LsjPF.jpeg'
})
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
        .comment_text
            width 90%
            margin-left .1rem
            .comment_text__name
                color gray
                margin-bottom .2rem
</style>