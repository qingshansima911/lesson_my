<template>
  <div class="home">
    <!-- 主要内容 -->
    <div class="content">
      <!-- 页面内容 -->
      <SearchBox />
      <Question :square="square" />
      <!-- <van-tabs>
        <van-tab title="知道广场">
          <Question :square="square" />
        </van-tab>
        <van-tab title="情感">情感</van-tab>
        <van-tab title="生活">生活</van-tab>
        <van-tab title="娱乐">娱乐</van-tab>
        <van-tab title="教育">教育</van-tab>
        <van-tab title="法律">法律</van-tab>
        <van-tab title="道德">道德</van-tab>
        <van-tab title="社会">社会</van-tab>
      </van-tabs> -->
    </div>
    <!-- 底部导航栏 -->
    <NavBar></NavBar>
  </div>
</template>

<script setup lang="ts">
import NavBar from '~/NavBar.vue'
import SearchBox from '~/SearchBox.vue'
import Question from '~/Question.vue'
import { useHomeStore } from '@/store/home'
import { computed } from 'vue';

const homeStore = useHomeStore()
homeStore.getSquareData()
const square = computed(() => homeStore.state.square)

</script>



