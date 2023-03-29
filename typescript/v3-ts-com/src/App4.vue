<template>
    <div>

    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
// ts 如果没有定义类型的话 会做一个推导
// 类型的推导
// let a : number | string = 1;
// a = '2'
interface Book {
    title : string
    year?:number
}
const book:Book = reactive({title: 'vue3'})
// book.title = 1
</script>

<style scoped>

</style>