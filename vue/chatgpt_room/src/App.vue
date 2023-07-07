<script setup lang="ts">
</script>

<template>
  <suspense>
    <template #default>
      <router-view></router-view>
    </template>
    <template #fallback>
      loading
      <!-- <LoadingSpinner /> -->
    </template>
  </suspense>
</template>

<style></style>
