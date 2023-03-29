<template>
    <div>
        <input type="text" ref="el">
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const el = ref<HTMLInputElement | null>(null)
onMounted(() => {
    el.value?.focus()  // ? 运算符 如果有就运行，没有就不运行
})
</script>

<style scoped>

</style>