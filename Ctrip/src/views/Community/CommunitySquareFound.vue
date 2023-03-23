<template>
    <div class="CommunitySquareFound">
        <div 
            :key="index"
            v-for="item,index in communitypostList"
            class="CommunitySquareFoundPost">
                <div class="communityPostHeader">
                    <el-avatar 
                        :size="40" src="https://i.328888.xyz/2023/03/18/LsjPF.jpeg">
                    </el-avatar>
                    <div class="communityPoster">
                        <div class="communityPosterName">{{ item.name }}</div>
                        <div class="communityPostTime">{{ item.time }}</div>
                    </div>
                    <Subscrible/>
                </div>
                <div 
                    :key="index"
                    v-for="i,index in item.text"
                    class="communityPostText">
                    <div class="communityPostTextTitle">{{ i.text_title }}</div>
                    <div class="communityPostTextContent">{{ i.text_content }}</div>
                </div>
                <div class="communityPostImgs">
                    <div 
                        :key="index"
                        v-for="i,index in item.img"
                        class="communityPostImg">
                            <img :src="i.Img" alt="">
                    </div>
                </div>
                <div class="communityComments">
                    <div class="commnunityPostInput">
                        <el-avatar 
                            :size="30" src="https://i.328888.xyz/2023/03/18/LsjPF.jpeg">
                        </el-avatar>
                        <input type="text" placeholder="发表评论">
                    </div>
                    <el-badge :value="1224542" :max="10000">
                        <i class="iconfont icon-praise"></i>
                    </el-badge>
                    <el-badge :value="63224242" :max="10000">
                        <i class="iconfont icon-comments"></i>
                    </el-badge>
                </div>
        </div>
    </div>
</template>

<script setup>
import Subscrible from '~/Subscrible.vue'
import { computed, onMounted } from 'vue'
import { useCommunityStore } from '@/store/community.js'
const communityStore = useCommunityStore()
const communitypostList = computed(() => communityStore.communityPostList)

onMounted(async() => {
    await communityStore.getCommunityPostList()

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
            fj()
            margin .3rem
            .communityPostImg
                img 
                    wh(100px,100px)
        .communityComments
            fac()
            margin .3rem 
            .iconfont
                font-size .7rem
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
            .el-badge >>> .el-badge__content--danger
                background-color #fff
                color black
                margin -.12rem -.05rem 
</style>