<template>
    
</template>

<script setup lang="ts">
// const emit = defineEmits(['change', 'update'])
const emit = defineEmits<{
    (e: 'change', id:number):void    //就是一个函数 这个函数是没有返回值的
    (e: 'update', value:string):void
}>()
emit('change', 12)
emit('update', '12')
</script>

<style scoped>

</style>