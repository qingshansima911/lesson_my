<template>
    <div class="CommunitySquare">
        <van-tabs>
            <van-tab title="发现">
                <CommunitySquareFound :loginMsg="props.loginMsg"/>
            </van-tab>
            <van-tab title="城市">内容 2</van-tab>
            <van-tab title="福利">内容 3</van-tab>
            <van-tab title="去海边">内容 4</van-tab>
            <van-tab title="樱花雨">内容 5</van-tab>
            <van-tab title="逛公园">内容 6</van-tab>
            <van-tab title="热门">内容 7</van-tab>
            <van-tab title="玩乐">内容 8</van-tab>
        </van-tabs>
    </div>
</template>

<script setup>
import CommunitySquareFound from './CommunitySquareFound.vue'

const props = defineProps({
    loginMsg: {
        type: Object,
        default: {}
    }
})
</script>

<style lang="stylus" scoped>
.CommunitySquare
    .van-tabs>>>.van-tab__text 
        font-size .4rem
    .van-tabs>>>.van-tabs__line
        bottom .6rem
    .van-tabs>>>.van-tab--active>.van-tab__text 
        font-size .5rem
</style>