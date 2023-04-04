<template>
    <div>
        <input type="text" v-model="state.name">
        <input type="text" v-model="state.color">
        <input type="text" v-model="state.size">
        <input v-model.number="state.count" type="range" min="0" step="0.01" max="1000">
    </div>
</template>

<script setup lang="ts">
// import { reactive } from 'vue';
// const state = reactive({
//     name: '',
//     color: '',
//     size: ''
// })

import { useStorage } from '@vueuse/core'

const theDefault = {
    name: 'Bannana',
    color: 'Yellow',
    size: 'Medium',
    count: 0
}
const state = useStorage('vue-use-local-storage', theDefault)
</script>

<style scoped></style>