<template>
    <div :style="fontstyle">
        <div class="rate" @mouseout="mouseOut">
            <span 
                @mouseover="mouseOver(num)" 
                v-for="num in 5" 
                :key="num">☆</span>
            <span class="hollow" :style="fontwidth">
                <span 
                    v-for="num in 5" 
                    :key="num" 
                    @click="onRate(num)"
                    @mouseover="mouseOver(num)">★</span>
            </span>
        </div>
    </div>
</template>

<script setup>
import { defineProps, computed, ref, defineEmits } from 'vue';
let emits = defineEmits(['update-rate'])
let props = defineProps({
    value: Number,
    theme: {
        type: String,
        default: 'orange'
    }
})
let width = ref(props.value)
const mouseOut = () => { 
    width.value = props.value
}
const mouseOver = (i) => {
    width.value = i
}
const themeObj = {
    'black': '#000',
    'white': '#fff',
    'red': '#f5222d',
    'orange': '#fa541c',
    'yellow': '#fadb14',
    'green': '#73d13d',
    'blue': '#40a9ff'
}
const fontstyle = computed(() => {
    return `color:${themeObj[props.theme]}`
})
const fontwidth = computed(() => `width:${width.value}rem;`)
const onRate = (num) => {
    emits('update-rate', num)
    // console.log(num);
}
</script>

<style scoped lang="stylus">

.rate 
    position relative
    display inline-block
    span 
        display inline-block
        width 1em
        height 1em
.hollow 
    position absolute
    display inline-block
    top 0
    left 0
    width 0
    overflow hidden
</style>