<template>
  <div class="fixed top-0 left-0 w-full h-11 bg-green-500 z-1000 flex items-center justify-between px-3">
    <i class="iconfont icon-yingwen text-white text-[30px]"></i>
    <div class="w-[240px] h-8 flex items-center justify-between text-gray-700 bg-white rounded-lg leading-5 px-2.5">
      <i class="iconfont icon-sousuo text-gray-400 text-lg"></i>
      <router-Link to="/search" class="flex-1 h-full">
        <van-swipe class="swipe h-full leading-8 ml-1 text-gray-600" autoplay="4000" :show-indicators="false"
          style="height: 200px;" vertical>
          <van-swipe-item v-for="item in state.swipTitle">{{ item }}</van-swipe-item>
        </van-swipe>
      </router-Link>
      <i class="iconfont icon-zhaoxiangji text-gray-400 text-lg"></i>
    </div>
    <i class="iconfont icon-saomiao text-white text-[30px]"></i>
  </div>

  <div class="nav-wrap fixed top-[50px] left-0 w-screen h-[40px] bg-green-500 z-1000 whitespace-nowrap overflow-hidden"
    ref="navWrap">
    <ul class="nav-content inline-block">
      <li class="nav-item inline-block text-sm text-white px-2 py-1" v-for="item in navList" :key="item.id"
        @click="selectMenu(item.id)">
        {{ item.content }}
        <div
          :class="{ 'w-0 h-0 border-t-0 border-transparent border-l-4 border-r-4 border-b-4 border-white m-auto transition-all duration-500': currentId === item.id }">
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import BetterScroll from 'better-scroll'
import { reactive, nextTick, ref } from 'vue';
// import useGoodsStore from '@/store/goods.js'

const state = reactive({
  swipTitle: ['甲流？怎么防', '癌症隐患', '那些奇怪的职业', '薅羊毛攻略', '《狂飙》']
})

const navList =
  [
    {
      id: 0,
      content: '知道广场'
    },
    {
      id: 1,
      content: '情感'
    },
    {
      id: 2,
      content: '生活'
    },
    {
      id: 3,
      content: '娱乐'
    },
    {
      id: 4,
      content: '教育'
    },
    {
      id: 5,
      content: '法律'
    },
    {
      id: 6,
      content: '道德'
    },
    {
      id: 7,
      content: '社会'
    },
    {
      id: 8,
      content: '游戏'
    }
  ]

//BScroll
const navWrap = ref(null) //ref获取dom结构
let scroll = reactive({
  navScroll: {}
})
const _initScroll = () => {
  scroll.navScroll = new BetterScroll(navWrap.value, {
    click: true,
    scrollX: true,
    probeType: 3
  })
}
nextTick(() => {
  // 确保navWrap 一定可以了
  _initScroll()
})

setTimeout(() => {
  // betterscroll 通用动作
  scroll.navScroll.refresh()
}, 500)

// const store = useGoodsStore()
//点菜单的某一项
let currentId = ref(0)
const selectMenu = (id) => {
  // console.log(id);
  currentId.value = id
  // store.changeId(id)  //使点菜单的某一项的id传给pinia组件库
}
</script>

<style lang="less" scoped>
.swipe {
  height: 100% !important;
}
</style>