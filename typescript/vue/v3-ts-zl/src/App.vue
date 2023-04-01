<script setup lang="ts">
// ref reactive 私有状态 computed
import { computed } from 'vue';
import { useStore } from 'vuex' // hooks函数式编程
// 1. pinia hooks更好 defineStore  2. vuex对ts支持不如pinia
import { GlobalDataProps } from './types';
import GlobalHeader from './components/GlobalHeader.vue'
import { getColumn } from './api/column'

const store = useStore<GlobalDataProps>()
const currentUser = computed(() => store.state.user)

// fetch('/api/columns?currentPage=1&pageSize=3')
//     .then(data => data.json())
//     .then(data => {
//         console.log(data);
//     })
getColumn().then(data => {
    console.log(data);
    
})
</script>

<template>
    <div class="container-fluid px-0 flex-shrink-0">
        <global-header :user="currentUser"/>
    </div>
    <router-view></router-view>
</template>

<style scoped>
</style>
