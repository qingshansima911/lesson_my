<template>
    <div>
        <ul>
            <router-link to="home">
                <i class="iconfont .icon-31xiaoxi"></i>
                <div>首页</div>
            </router-link>
            <router-link to="community">
                <i></i>
                <div>社区</div>
            </router-link>
            <router-link to="message">
                <i></i>
                <div>消息</div>
            </router-link>
            <router-link to="journey">
                <i></i>
                <div>行程</div>
            </router-link>
            <router-link to="my">
                <i></i>
                <div>我的</div>
            </router-link>
        </ul>
    </div>
</template>

<script setup>

</script>

<style lang="stylus" scoped>
@import '../common/style/mixin.styl'
</style>