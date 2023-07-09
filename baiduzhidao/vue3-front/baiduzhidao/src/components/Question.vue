<template>
  <div class="container bg-gray-100">
    <!-- 提问列表 -->
    <div class="grid gap-2">
      <div v-for="item in square" :key="item.id" class="p-4 mx-2 bg-white shadow-md rounded-lg">
        <div class="text-sm">
          <i class="iconfont icon-huangguan"></i>
          成为首个回答者
        </div>
        <h2 class="text-lg">{{ item.question }}</h2>
        <div class="flex items-center mt-2 justify-between">
          <span class="text-gray-500 text-sm">
            <span>{{ item.answer }}</span>
            回答</span>
          <span class="ml-2 text-gray-500 text-sm">
            <i class="iconfont icon-dati"></i>
            写回答
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(['square'])

</script>

<style></style>
