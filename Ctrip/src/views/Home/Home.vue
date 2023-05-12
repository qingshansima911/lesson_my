<template>
    <div class="page">
        <div class="page_header">
            <div class="page_header__input">
                <span class="page_header__text">请输入</span>
                <span class="page_header__search">搜索</span>
            </div>
            <div class="page_header__map">
                <i class="iconfont icon-ditu"></i>
                <span class="page_header__mapText">旅游地图</span>
            </div>
        </div>
        <div class="page_body">
            <HorizonScroll/>
            <div class="home-swiper">
                <swiper :swiperList="swiperList"/> 
            </div>
            <van-skeleton title :row="3" :loading="state.loading">
                <div class="post-wrapper">
                    <div class="post-col">
                        <post 
                            v-for="item in articleLeft"
                            :key="item.ar_id"
                            @click="gotoDetail(item.ar_id)"
                            :post="item"/>
                    </div>
                    <div class="post-col">
                        <post 
                            v-for="item in articleRight"
                            :key="item.ar_id"
                            @click="gotoDetail(item.ar_id)"
                            :post="item"/>
                    </div>
                </div>
            </van-skeleton>
        </div>
        <BackToTop/>
        <nav-bar></nav-bar>
    </div>
</template>

<script setup>
import NavBar from '~/NavBar.vue'
import Swiper from '~/Swiper.vue'
import BackToTop from '~/BackToTop.vue'
import HorizonScroll from '~/HorizonScroll.vue'
import Post from '~/Post.vue'
import { reactive, onMounted, computed } from 'vue'
import { showLoadingToast, closeToast } from 'vant'
// import { getSwiperList , getCategoryList, getArticleLeft, getArticleRight } from '@/service/home';
import { useHomeStore } from '@/store/home.js'
import { useRouter } from 'vue-router'

const homeStore = useHomeStore();
const swiperList = computed(()=>homeStore.swiperList)
const articleLeft = computed(() => homeStore.articleLeft)
const articleRight = computed(() => homeStore.articleRight)

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
    await homeStore.getArticleLeft() 
    await homeStore.getArticleRight()

    state.loading = false
    closeToast()
})

</script>

<style lang="stylus" scoped>
@import '../../common/style/mixin.styl'
.page
    // padding 0rem .3333rem 1.5rem .3333rem
    // padding-bottom 2rem 
    background-color #F7F8FA
    .page_header
        background-color #fff
        position fixed
        z-index 9999
        wh(100%,1.6rem /* 50/37.5 */)
        padding .4rem .3rem .2rem .3rem
        top 0
        fj()
        align-items flex-start
        background-image linear-gradient(to left bottom, #2FA2FE, #2282FA)
        .page_header__input
            wh(80%,100% /* 36/37.5 */)
            border-radius 1.3rem /* 50/37.5 */
            background-color #fff
            fac()
            font-size .38rem
            .page_header__text
                flex 1
                margin 0 .2rem
            .page_header__search
                wh(20%,90%)
                border-radius 50px 
                color white
                background-image linear-gradient(to left, #3AC3FE, #4AE7FF)
                fj()
                justify-content center
                align-items center
                margin-right .08rem
        .page_header__map
            fd()
            align-items center
            wh(20%,100% /* 36/37.5 */)
            color #fff
            .iconfont
                font-size .5rem
    .page_body 
        .home-swiper
            height 3rem /* 300/37.5 */
            margin 0 .3rem 
            box-shadow 0 0 10px 4px #DDD
        .post-wrapper
            fj()
            overflow-y: scroll
            padding .3rem 0 0 .3rem
            .post-col
                width 48%
                height 100%
                margin .3rem .3rem 0 0
</style>