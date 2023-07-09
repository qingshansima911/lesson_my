<template>
  <div class="fixed bottom-0 w-full bg-white">
    <nav class="navbar flex justify-around py-1 border-t rounded-t-lg border-gray-400">
      <router-link to="/" class="nav-link flex flex-col items-center text-gray-600" active-class="active">
        <i class="iconfont icon-dati text-xl font-bold"></i>
        <span class="text-xs mt-1">答题</span>
      </router-link>
      <router-link to="/featured" class="nav-link flex flex-col items-center text-gray-600" active-class="active">
        <i class="iconfont icon-jingxuan text-xl"></i>
        <span class="text-xs mt-1">精选</span>
      </router-link>
      <router-link to="/question" class="nav-link flex flex-col items-center text-gray-600" active-class="active">
        <i class="iconfont icon-wen text-3xl"></i>
      </router-link>
      <router-link to="/message" class="nav-link flex flex-col items-center text-gray-600" active-class="active">
        <i class="iconfont icon-xiaoxi text-xl font-bold"></i>
        <span class="text-xs mt-1">消息</span>
      </router-link>
      <router-link to="/profile" class="nav-link flex flex-col items-center text-gray-600" active-class="active">
        <i class="iconfont icon-wode text-xl font-bold"></i>
        <span class="text-xs mt-1">我的</span>
      </router-link>
    </nav>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>