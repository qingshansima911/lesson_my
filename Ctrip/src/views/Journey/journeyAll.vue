<template>
    <div class="journeyAll">
        <div class="journeyAll_wrapper">
            <div class="journeyAll_header">
                <div class="journey_type">酒店</div>
                <div class="journey_status">待支付</div>
            </div>
            <div class="journeyAll_body" v-for="item in room" :key="item.room_id">
                <div class="journey_location">{{ item.hotel_title }}</div>
                <div class="journey_time">05-16 06:00 至 12:00</div>
                <div class="journey_room">{{ item.room_title }}</div>
                <div class="journey_des">一间 · 一晚</div>
                <div class="journey_price">在线支付<div class="journey_num">￥78</div>
                </div>

            </div>
            <div class="journeyAll_foot">
                <div class="reserve_again">再次预定</div>
                <div class="cancel">取消</div>
                <div class="pay">去支付</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useJourneyStore } from '@/store/journey.js'

// console.log(route.query.id);
const journeyStore = useJourneyStore();
const room = computed(() => journeyStore.room)
</script>

<style lang="stylus" scoped>
@import '../../common/style/mixin.styl'
.journeyAll
    background-color #F3F3F3
    padding .3rem
    .journeyAll_wrapper
        border-radius .2rem
        padding .3rem
        background-color white
        .journeyAll_header
            fj()
        .journeyAll_body
            padding .3rem
            .journey_location
                font-size .4rem
                font-weight 700
            .journey_time
                color gray
                margin .1rem 0
            .journey_room
                color gray
                margin .1rem 0
            .journey_des
                color gray
                margin .1rem 0
            .journey_price
                fc()
                justify-content flex-end
                .journey_num
                    font-size .45rem
                    font-weight 700
        .journeyAll_foot
            fj()
            justify-content flex-end
            .reserve_again
                border 1px solid gray
                border-radius .1rem
                padding .1rem .2rem
                margin 0 .1rem
            .cancel
                border 1px solid gray
                border-radius .1rem
                padding .1rem .2rem
                margin 0 .1rem
            .pay
                border-radius .1rem
                padding .1rem .2rem
                margin 0 .1rem
                background-image linear-gradient(to right, #F5A417,#FF7900)
</style>