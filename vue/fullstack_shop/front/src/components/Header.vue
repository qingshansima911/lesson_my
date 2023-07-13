<template>
  <van-nav-bar :title="props.title" />
</template>

<script setup>
const props = defineProps({
  title: {
    type: String
  }
})
</script>

<style lang="less" scoped></style>