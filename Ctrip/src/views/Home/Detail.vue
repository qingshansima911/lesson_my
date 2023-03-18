<template>
    <div class="article-detail">
        <simple-header 
            v-for="item in detail"
            :key="item.ar_id"
            :detail="item"/>
        <div class="detali-wrapper">
            <div class="detail-swiper">
                <swiper 
                    :swiperList="item.secondImg"
                    v-for="item in detail"
                    :key="item.ar_id"/>
            </div>
            <div 
                class="introduce"
                v-for="item in detail"
                :key="item.ar_id">
                {{ item.text }}
            </div>
            <Comments :comments="comments"/>
            <DetailNavBar/>
        </div>
    </div>
</template>

<script setup>
import { onMounted, computed } from 'vue';
import { closeToast, showLoadingToast } from 'vant';
import { useRoute } from 'vue-router'
import { useHomeStore } from '@/store/home.js'
import { getDetail } from '@/service/detail'
import SimpleHeader from '~/SimpleHeader.vue';
import Swiper from '~/Swiper.vue'
import DetailNavBar from '~/DetailNavBar.vue'
import Comments from '~/Comments.vue'

const route = useRoute(); // 当前的路由
const homeStore = useHomeStore();
const detail = computed(() => homeStore.detail)
const comments = computed(() => homeStore.comments)
// console.log(detail.value);

onMounted(async () => {
    const { id } = route.params 
    // console.log(id);
    showLoadingToast({
        message: '加载中'
    })
    await homeStore.getDetail(id)
    await homeStore.getComments()
    closeToast()
})
</script>

<style lang="stylus" scoped>
.detali-wrapper
    width 100% 
    padding-bottom 1.5rem
    .introduce
        padding .266667rem  .26667rem
    .detail-swiper
        width 100%
        height 13.333333rem /* 500/37.5 */
</style>