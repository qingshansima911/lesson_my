<script setup>
import Input from './components/Input.vue'
import { ref } from 'vue';

const tel = ref('')
// tel 跟 Input 组件双向绑定 而不是标签
// 父子组件之间props 单向的   props  ->
// 子组件 emits 将 input 标签的change 传回来 修改tel
setTimeout(() => {
    // tel.value = '18288888888'
}, 1000);

</script>

<template>
    <!-- <Input :modelValue="tel" @update:modelValue="tel=$event"/> -->
    <Input v-model="tel" :disabled="false" placeholder="请输入手机号"/>
    {{ tel }}
</template>

<style scoped>
</style>
