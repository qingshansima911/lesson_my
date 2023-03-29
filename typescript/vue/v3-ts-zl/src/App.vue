<script setup lang="ts">
// ref reactive 私有状态 computed
import { computed } from 'vue';
import { useStore } from 'vuex' // hooks函数式编程
// 1. pinia hooks更好 defineStore  2. vuex对ts支持不如pinia
import { GlobalDataProps } from './types';
import GlobalHeader from './components/GlobalHeader.vue'

const store = useStore<GlobalDataProps>()
const currentUser = computed(()=>store.state.user)
</script>

<template>
    <div class="container-fluid px-0 flex-shrink-0">
        <global-header :user="currentUser"/>
    </div>
    <router-view></router-view>
</template>

<style scoped>
</style>
