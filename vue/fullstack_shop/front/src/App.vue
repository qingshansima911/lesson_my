<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script setup>
</script>

<style lang="less">
// 全局通用样式 移动端垂直滚动 水平不超出 
html,
body {
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
}

#app {
  height: 100%; /* 单屏应用 */
  font-family: "Avenir", Arial, Helvetica, sans-serif;
  color: #2c3e50;
}
</style>
