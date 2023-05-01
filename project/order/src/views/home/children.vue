<template>
    <div class="home_tuijian">
        <router-link to="changdian" class="home_tuijian__item">常点</router-link>
        <router-link to="tuijian" class="home_tuijian__item">推荐</router-link>
    </div>
    <router-view></router-view>
</template>

<script setup>

</script>

<style lang="stylus" scoped>
@import '../../common/style/mixin.styl'
.home_tuijian
    fj(space-around)
    font-size .4rem
    .home_tuijian__item
        color white
    .router-link-active
        color white
        font-size .55rem
</style>