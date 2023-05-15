<template>
    <div class="hotel_list" v-for="item in hotelList" @click="gotoHotelDetail">
        <img :src="item.hotel_img">
        <div class="hotel-des">
            <div class="hotel_title">{{ item.hotel_title }}</div>
            <div class="hotel_evaluation">
                <span class="hotel_score">{{ item.hotel_score }}</span>
                <span class="hotel_comment">{{ item.hotel_comment }}</span>
                <span class="hotel_collection">{{ item.hotel_collection }}</span>
            </div>
            <div class="hotel_location">{{ item.hotel_location }}</div>
            <div class="hotel_description">{{ item.hotel_description }}</div>
            <div class="hotel_price">￥<span class="hotel_num">{{ item.hotel_num }}</span>起</div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, computed } from 'vue';
import { useHomeStore } from '@/store/home.js'
import { useRouter } from 'vue-router'

const homeStore = useHomeStore()
const hotelList = computed(() => homeStore.hotelList)
// console.log(hotelList.value[0].hotel_img);
onMounted(async () => {
    await homeStore.getHotelList()
})
const router = useRouter()
const gotoHotelDetail = () => {
    router.push({
        path: '/hotelDetail'
    })
}
</script>

<style lang="stylus" scoped>
@import '../../common/style/mixin.styl'
.hotel_list
    wh(95%, 100%)
    // border 1px solid red
    margin .3rem 
    display flex
    img
        width 30%
        height 3.413333rem /* 128/37.5 */
        margin-right .2rem
    .hotel-des
        .hotel_title
            font-weight 700
            font-size .45rem
            margin-bottom .1rem
        .hotel_evaluation
            fj()
            margin-bottom .1rem
            .hotel_score
                color white
                background-color #0065f1
                padding .05rem
                border-radius 0 .1rem .2rem 0
        .hotel_description 
            color #007ACC
            margin .1rem 0 .3rem 0
        .hotel_price
            display flex
            margin-left 4rem
            color blue
            .hotel_num 
                font-size .55rem
</style>