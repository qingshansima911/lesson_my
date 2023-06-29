<template>
  <div id="app">
    <!-- 单页应用 头部标签 -->
    <app-header :activeIndex="acitveIndex"></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
export default {
  name: "App",
  data() {
    return {
      acitveIndex: 1
    }
  },
  components: {
    'app-header': Header
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
