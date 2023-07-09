<template>
  <div class="home">
    <!-- 主要内容 -->
    <div class="content">
      <!-- 页面内容 -->
      <SearchBox />
      <el-tabs v-model="state.activeTab">
        <el-tab-pane label="知道广场" name="Tab 1">
          <Question :square="square"/>
        </el-tab-pane>
        <el-tab-pane label="情感" name="Tab 2">情感</el-tab-pane>
        <el-tab-pane label="生活" name="Tab 3">生活</el-tab-pane>
        <el-tab-pane label="娱乐" name="Tab 4">娱乐</el-tab-pane>
        <el-tab-pane label="教育" name="Tab 5">教育</el-tab-pane>
        <el-tab-pane label="法律" name="Tab 6">法律</el-tab-pane>
      </el-tabs>
    </div>
    <!-- 底部导航栏 -->
    <NavBar></NavBar>
  </div>
</template>

<script setup lang="ts">
import NavBar from '~/NavBar.vue'
import SearchBox from '~/SearchBox.vue'
import Question from '~/Question.vue'
import { reactive } from 'vue';
import { useHomeStore } from '@/store/home'
import { computed } from 'vue';

const state = reactive({
  activeTab: 'Tab 1'
})

const homeStore = useHomeStore()
homeStore.getSquareData()
const square = computed(() => homeStore.state.square)

</script>

<style scoped>
/* 样式代码 */
</style>

