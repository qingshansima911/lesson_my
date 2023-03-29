<script setup lang="ts">
// 运行时申明
// 对props 的静态类型约束？
// const props = defineProps({
//     foo: { type:String, required: true, default:'dfdfdf'},
//     bar:Number
// })
// 宏函数
interface Props {
    foo:string;
    bar?:number
}
const props = withDefaults(defineProps<Props>(), {
    foo:'hello',
    bar: 2
})

// {
//     foo:string  // 必填的
//     bar?:string  // 有个问号 表示是可选的
// }>()
// composition api 常用的
// ref
// reactive
// computed
// watch
// mounted
// props
// emit
</script>

<template>
  
</template>

<style scoped>

</style>
