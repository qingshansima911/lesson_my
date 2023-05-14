<template>
    <div class="CommunitySquareFound">
        <div :key="index" v-for="item, index in communitypostText" class="CommunitySquareFoundPost">
            <div class="communityPostHeader">
                <el-avatar :size="40" :src="item.headImg">
                </el-avatar>
                <div class="communityPoster">
                    <div class="communityPosterName">{{ item.name }}</div>
                    <div class="communityPostTime">{{ item.time }}</div>
                </div>
                <Subscrible />
            </div>
            <div class="communityPostText">
                <div class="communityPostTextTitle">{{ item.text_title }}</div>
                <div class="communityPostTextContent">{{ item.text_content }}</div>
            </div>
            <div class="communityPostImgs">
                <div v-for="i in communityPostImg" class="communityPostImg">
                    <img :src="i.img" v-if="item.id == i.postText_id">
                </div>
            </div>
            <div class="communityComments">
                <div class="commnunityPostInput">
                    <el-avatar :size="30" :src="props.loginMsg.data[0].headImg"></el-avatar>
                    <input type="text" placeholder="发表评论">
                </div>
                <el-badge :value="state.praise" :max="10000">
                    <i class="iconfont icon-praise" @click="addPraise" :class="{ active: state.type }"></i>
                </el-badge>
                <el-badge :value="632" :max="10000">
                    <i class="iconfont icon-comments"></i>
                </el-badge>
            </div>
        </div>
    </div>
</template>

<script setup>
import Subscrible from '~/Subscrible.vue'
import { computed, onMounted, reactive } from 'vue'
import { useCommunityStore } from '@/store/community.js'
const communityStore = useCommunityStore()
const communitypostText = computed(() => communityStore.communityPostText)
const communityPostImg = computed(() => communityStore.communityPostImg)

const state = reactive({
    type: false,
    praise: 200
})
const addPraise = () => {
    state.type = !state.type
    if (state.type == false) {
        state.praise = 200
    } else {
        state.praise = 201
    }
}
const props = defineProps({
    loginMsg: {
        type: Object,
        value: {}
    }
})
// console.log(props.loginMsg.data[0].headImg);
onMounted(async () => {
    await communityStore.getCommunityPostText()
    await communityStore.getCommunityPostImg()
})
</script>

<style lang="stylus" scoped>
@import '../../common/style/mixin.styl'
.CommunitySquareFound
    background-color #F7F8FA
    padding .1rem 0 2rem 0
    .CommunitySquareFoundPost
        margin .3rem 
        background-color #fff
        border-radius .4rem
        box-shadow 0 0 10px 4px #DDD
        padding .3rem 0
        .communityPostHeader
            fac()
            margin .3rem
            .communityPoster
                wh(50%,100%)
                margin 0 .3rem
                .communityPosterName
                    font-size .4rem
                    color black
                    margin .1rem 0
                .communityPostTime
                    color gray
        .communityPostText
            margin .3rem 
            font-size .38rem
            .communityPostTextContent
                color gray
        .communityPostImgs
            display: flex
            margin .3rem
            .communityPostImg
                img 
                    margin .12rem
                    wh(100px,100px)
        .communityComments
            fac()
            margin .3rem 
            .commnunityPostInput
                display flex
                background-color #F2F2F2
                border-radius .8rem
                padding .1rem .3rem
                margin-right .1rem 
                input
                    width 4rem
                    font-size .4rem
                    padding 0 .2rem
                    border none
                    background-color #F2F2F2
            .el-badge
                margin-right .9rem
                .iconfont
                    &.active
                        color red 
            .el-badge >>> .el-badge__content--danger
                background-color #fff
                color black
                margin -.12rem -.05rem 
</style>