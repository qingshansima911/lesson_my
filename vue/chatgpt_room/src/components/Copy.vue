<template>
  <div class="flex items-center cursor-pointer" @click="copyToClipboard()">
    <span class="text-xs ml-0 5 text-gray-500 leading-none">
      {{ btnTips[btnStatus] }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{ content: string }>()
const btnTips = {
  copy: "复制",
  loading: "",
  success: "已复制到剪贴板",
  error: "复制失败!"
}
const btnStatus = ref<"copy" | "loading" | "success" | "error">("copy");
const copyToClipboard = () => {

}
</script>

<style scoped></style>