<template>
  <div>
    <div class="login">
      <div class="text">登录</div>
      <div class="register" @click="gotoLogin">登录/注册</div>
    </div>
    <NavBar></NavBar>
  </div>
</template>

<script setup lang="ts">
import NavBar from '~/NavBar.vue'
import router from '@/router/index'

const gotoLogin = () => {
  router.push({
    path: '/login'
  })
}
</script>

<style scoped></style>