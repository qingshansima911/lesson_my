<template>
    <div>
        <p>Value: {{ value ? 'ON' : 'OFF' }}</p>
        <button @click="toggle()">
            Toggle
        </button>
        <button @click="value = true">
            Set On
        </button>
        <button @click="value = false">
            Set Off
        </button>
    </div>
</template>

<script setup lang="ts">
import { useToggle } from '@vueuse/core'
const [value, toggle] = useToggle()
</script>

<style scoped></style>