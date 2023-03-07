<template>
    <div class="home">
        <header class="header">
            <Header />
        </header>
        <aside>
            <SideBar />
        </aside>
        <main class="main" :class="{cover:isCover}">
            <div class="main-page" id="mainPage" ref="mainRef">
                <router-view></router-view>
            </div>
        </main>
    </div>
</template>

<script setup lang="ts">
import Header from '@/layout/header/Header.vue'
import SideBar from '@/layout/SideBar.vue'
import { useRoute } from 'vue-router';

import { computed,ref } from 'vue';
const route = useRoute()
const mainRef = ref(null)

const isCover = computed(()=>route.meta.isCover)
</script>

<style lang="stylus" scoped>
@import "../assets/css/variable.styl"
.main {
    position: fixed;
    top: $header-height;
    right: 0;
    bottom: $player-height;
    left: $sidebar-width;
    z-index: -1;
    padding-left: 30px;
    box-sizing: border-box;
    .main-page {
      height: 100%;
      padding-top: 60px;
      padding-right: 20px;
      overflow-y: scroll;
      box-sizing: border-box;
    }
    &.cover {
      padding-left: 0;
      .main-page {
        padding-top: 0;
        padding-right: 0;
      }
    }
  }

</style>