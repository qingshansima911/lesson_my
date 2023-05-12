<template>
    <div class="comments">
        <div class="comments_text">共88条评论</div>
        <div class="comments_profile">
            <div v-for="item in articleLeft">
                <el-avatar :size="40" :src="item.author_img" v-if="item.ar_id == id"/>
            </div>
            <div v-for="item in articleRight">
                <el-avatar :size="40" :src="item.author_img" v-if="item.ar_id == id"/>
            </div>
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

import { useRoute } from 'vue-router'

const props = defineProps({
    articleLeft: {
        type: Object,
        value: {}
    },
    articleRight: {
        type: Object,
        value: {}
    },
    comments: {
        type: Object,
        value: {}
    },
})
const route = useRoute(); // 当前的路由
const { id } = route.params
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