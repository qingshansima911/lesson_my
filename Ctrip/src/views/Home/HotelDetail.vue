<template>
    <div class="hotel_detail">
        <div class="hotel_detail__header" v-for="item in hotelDetail">
            <header class="detail_header">
                <div class="left">
                    <span class="iconfont icon-fanhui" @click="goBack"></span>
                    <span class="hotel_header__name">{{ item.hotel_title }}</span>
                </div>
                <div class="right">
                    <div class="right_item">
                        <i class="iconfont icon-shoucang"></i>
                        收藏
                    </div>
                    <div class="right_item">
                        <i class="iconfont icon-fenxiang"></i>
                        分享
                    </div>
                    <div class="right_item">
                        <i class="iconfont icon-more"></i>
                        更多
                    </div>
                </div>
            </header>
            <div class="block"></div>
        </div>
        <div class="hotel_picture">
            <swiper :swiperList="hotelDetailPic"/>
        </div>
        <div class="hotel_reserve" v-for="item in hotelDetail">
            <div class="hotel_name">{{ item.hotel_title }}</div>
            <div class="hotel_description">
                <div class="hotel_description__item">5月16日</div>
                <div class="hotel_description__item">一间 · 一人</div>
            </div>
            <div class="hotel_room">
                <div class="room_list" v-for="item in roomList" :key="item.room_id">
                    <img :src="item.room_img">
                    <div class="room_des">
                        <div class="room_title">{{ item.room_title }}</div>
                        <div class="room_reserve_time">{{ item.reserve_time }}</div>
                        <div class="room_description">{{ item.room_description }}</div>
                        <div class="room_price">￥
                            <span class="room_num">{{ item.room_num }}</span>
                            <img src="https://i.328888.xyz/2023/05/16/ViA39J.jpeg" @click="addCart(item.room_id)">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router'
import { useHomeStore } from '@/store/home.js'
import Swiper from '~/Swiper.vue'
import { showFailToast } from 'vant'
import { useJourneyStore } from '@/store/journey.js'

const route = useRoute(); // 当前的路由
const router = useRouter()
const homeStore = useHomeStore();
const journeyStore = useJourneyStore();
const hotelDetail = computed(() => homeStore.hotelDetail)
const hotelDetailPic = computed(() => homeStore.hotelDetailPic)
const roomList = computed(() => homeStore.roomList)

const goBack = () => {
    router.go(-1)
}
onMounted(async () => {
    const { id } = route.params
    // console.log(id);
    await homeStore.getHotelDetail(id)
    await homeStore.getHotelDetailPic(id)
    await homeStore.getRoomList(id)
})
const addCart = async (id) => {
    await journeyStore.getRoom(id)
    showFailToast('预订成功')
    setTimeout(() => {
        router.push({
            path: '/journey',
        })
    }, 2000);
}
</script>

<style lang="stylus" scoped>
@import '../../common/style/mixin.styl'
.hotel_detail__header
    .detail_header
        position fixed
        z-index 999
        background-color #fff
        top 0
        left 0
        fj()
        wh(100%, 1.17333rem)
        // padding 0 .26667rem
        color #252525
        align-items center
        .left
            fj()
            align-items center
            .hotel_header__name
                margin-left 1rem
                font-size .45rem
                font-weight 700
        span 
            margin 0 .266667rem /* 10/37.5 */
            font-size .38rem
        .right
            fj()
            align-items center
            .right_item
                fd()
                align-items center
                margin-left .2rem
    .block
        height 1.1733rem
.hotel_reserve
    margin 0 .3rem
    .hotel_name
        font-size .45rem
        font-weight 700
    .hotel_description
        fj()
        .hotel_description__item
            font-size .45rem
            font-weight 700
.hotel_room
    .room_list
        wh(95%, 100%)
        // border 1px solid red
        margin .3rem 0
        display flex
        img
            width 30%
            height 3.413333rem /* 128/37.5 */
            margin-right .2rem
        .room_des
            .room_title
                font-weight 700
                font-size .45rem
                margin-bottom .1rem
            .room_description 
                color #007ACC
                margin .1rem 0 .3rem 0
            .room_price
                display flex
                justify-content flex-end
                // margin-left 3rem
                color blue
                .room_num 
                    font-size .55rem
                img
                    wh(15%, 15%)

</style>