<template>
  <div class="relative">
    <input type="text" v-model="state.searchText" class="border border-gray-300 rounded-lg
       px-4 focus:outline-none" placeholder="搜索">
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
const state = reactive({
  searchText: '',
})
</script>
<style scoped></style>