<template>
  <div class="communityHeader">
    <i class="iconfont icon-sousuo"></i>
    <div class="communityTitle">
      <router-link class="communityTitle_text" to="/communitySubscrible">关注</router-link>
      <router-link class="communityTitle_text" to="/communitySquare">广场</router-link>
      <router-link class="communityTitle_text" to="/communityGroup">小组</router-link>
    </div>
    <div class="communityHeader_right" v-for="item in data" v-if="data">
      <i class="iconfont icon-liwu"></i>
      <el-avatar :size="30" :src="item.headImg" />
    </div>
    <div class="communityHeader_right" v-else>
      <i class="iconfont icon-liwu"></i>
      <el-avatar :size="30" src="https://i.328888.xyz/2023/05/16/ViAu1C.jpeg" />
    </div>
  </div>
  <router-view :loginMsg="loginMsg"></router-view>
</template>

<script setup>
import { computed } from 'vue'
import { useMyStore } from '@/store/my.js'

const myStore = useMyStore();
const loginMsg = computed(() => myStore.loginMsg)
const { data } = loginMsg.value
</script>

<style lang="stylus" scoped>
@import '../../common/style/mixin.styl';
.communityHeader
    fac()
    margin .2rem .2rem 
    font-size .4rem
    .iconfont
      font-size .7rem
    .communityTitle
      fac()
      width 80%
      fj(space-around)
      margin 0 .4rem
      .communityTitle_text
        &.router-link-active
          font-size .6rem
    .communityHeader_right
      fac()
      .icon-liwu
        margin-right .3rem
</style>