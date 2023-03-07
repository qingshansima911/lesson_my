<template>
    <div class="page">
        <div class="page_header">
            <span class="page_header__text">请输入</span>
            <span class="page_header__search">搜索</span>
        </div>
        <div class="page_body">
            <div class="category-list">
                <div 
                    :key="index"
                    v-for="(item,index) in categoryList">
                    <img :src="item.imgUrl">
                    <span>{{item.name}}</span>
                </div>
            </div>
            <div class="home-swiper">
                <swiper :swiperList="swiperList"/> 
            </div>
            <van-skeleton title :row="3" :loading="state.loading">
                <div class="post-wrapper">
                    <div class="post-col">
                        <post 
                            v-for="item in articleList"
                            :key="ar_id"
                            @click="gotoDetail(item.ar_id)"
                            :post="item"/>
                    </div>
                    <div class="post-col">
                        <post 
                            v-for="item in articleImg"
                            :key="ar_id"
                            @click="gotoDetail(item.ar_id)"
                            :post="item"/>
                    </div>
                </div>
            </van-skeleton>
        </div>
        <nav-bar></nav-bar>
    </div>
</template>

<script setup>
import NavBar from '~/NavBar.vue'
import Swiper from '~/Swiper.vue'
import Post from '~/Post.vue'
import { reactive, onMounted, computed } from 'vue'
import { showLoadingToast, closeToast } from 'vant'
// import { getSwiperList , getCategoryList, getArticleList, getArticleImg } from '@/service/home';
import { useHomeStore } from '@/store/home.js'
import { useRouter } from 'vue-router'

const homeStore = useHomeStore();
const swiperList = computed(()=>homeStore.swiperList)
const categoryList = computed(()=>homeStore.categoryList)
const articleList = computed(() => homeStore.articleList)
const articleImg = computed(() => homeStore.articleImg)

const state = reactive({
    loading: true,
})
const router = useRouter()
const gotoDetail = (id) => {
    // /detail/:id
    // console.log(id, 'gotoDetail');
    // console.log(router, '///////');
    router.push({
        path: `/detail/${id}`
    })
}

onMounted(async () => {
    showLoadingToast({
        message:'加载中'
    })
    await homeStore.getSwiperList() 
    await homeStore.getCategoryList() 
    await homeStore.getArticleList() 
    await homeStore.getArticleImg()

    state.loading = false
    closeToast()
})

</script>

<style lang="stylus" scoped>
@import '../../common/style/mixin.styl'
.page
    padding 0rem .3333rem 1.5rem .3333rem
    // padding-bottom 2rem 
    .page_header 
        background-color #fff
        position fixed
        z-index 9999
        wh(94%,35px)
        border-radius 50px
        // margin-top 10px
        border 1px solid red
        fj()
        justify-content center
        align-items center
        .page_header__text
            flex 1
        .page_header__search
            wh(15%,35px)
            border-radius 50px 
            color white
            background-color red
            fj()
            justify-content center
            align-items center
    .page_body 
        padding-top 35px
        .home-swiper
            height 3rem /* 300/37.5 */
        .category-list
            fj()
            flex-wrap wrap
            padding .34667rem 0
            div
                fj()
                flex-direction column
                width 20%
                align-items center
                // padding .333rem
                img
                    wh(1rem, 1rem)
                    margin .146667rem 0 
        .post-wrapper
            fj()
            overflow-y: scroll;
            .post-col
                width 48%
                height 100%
                padding .3rem 0 
</style>