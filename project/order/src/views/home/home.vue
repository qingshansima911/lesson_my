<template>
    <div class="home">
        <children/>
        <navbar/>
    </div>
</template>

<script setup>
import navbar from '~/navbar.vue'
import children from './children.vue'

</script>

<style lang="stylus" scoped>
.home
    padding .2rem
    background-image linear-gradient(to bottom, red, orange)
</style>