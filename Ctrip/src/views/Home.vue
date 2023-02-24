<template>
    <div class="container">
        <div class="input">
            <input type="text" placeholder="请搜索">
        </div>
        <nav-bar></nav-bar>
    </div>
</template>

<script setup>
import NavBar from '~/NavBar.vue';

</script>

<style lang="stylus" scoped>
@import '../common/style/mixin.styl'
.container
    wh(100%,100%)
    background-color pink
</style>