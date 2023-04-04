<script setup lang="ts">
import useMouse from './hooks/mouse'
const { x, y } = useMouse()
</script>

<template>
    <div>
        x:{{ x }}
        y:{{ y }}
    </div>
</template>

<style scoped></style>
