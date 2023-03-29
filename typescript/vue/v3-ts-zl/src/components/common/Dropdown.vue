<template>
    <div class="dropdown" ref="dropdownRef">
        <a href="#" 
            @click.prevent="toggleOpen"
            class="btn btn-outline-light my-2 dropdown-toggle">
                {{ title }}
        </a>
        <ul class="dropdown-menu" :style="{display: 'block'}" v-if="isOpen">
            <slot/>
        </ul>
    </div>
</template>

<script lang="ts">
// setup 类似组件里的方法， composition-api
import { defineComponent, ref } from 'vue'

export default defineComponent({
    name: 'Dropdown',
    props: {
        title: {
            type: String,
            require: true
        }
    },
    setup() {
        // ref reactive
        const isOpen = ref(false) // 私有状态
        const toggleOpen = () => {
            isOpen.value = !isOpen.value
        }
        const dropdownRef = ref<HTMLElement | null>(null) // 联合类型
        return {
            isOpen,
            toggleOpen,
            dropdownRef
        }
    }
})
</script>

<style scoped></style>