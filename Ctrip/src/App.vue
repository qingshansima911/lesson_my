<script setup>
import router from './router/router';
import { reactive } from 'vue'

router.beforeEach((to, from) => {
    // console.log(to,from);
    // JSON.stringify(localStorage) === '{}'
    if (localStorage.getItem('token')) {
        switch (to.meta.isLogin) {
            case 1: router.push('/loginMy'); break
            case 2: router.push('/loginMessage'); break
        }
    }
    if (to.meta.index > from.meta.index) {
        // 从主页面 去到子页面
        state.transitionName = 'slide-left'
    } else if (to.meta.index < from.meta.index) {
        // 子页面回到主页面
        state.transitionName = 'slide-right'
    } else {
        // 平级
        state.transitionName = ''
    }
})

const state = reactive({
    transitionName: 'slide-left',
    currentPath: '/',
})

</script>

<template>
    <router-view v-slot="{ Component }">
        <transition :name="state.transitionName">
            <component :is="Component" />
        </transition>
    </router-view>
</template>

<style>
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
    height: 100%;
    /* 提前告知浏览器，即将会有transform 渐变 */
    will-change: transform;
    transition: all 500ms;
    position: absolute;
    backface-visibility: hidden;
}

.slide-right-enter-from {
    opacity: 0;
    transform: translate3d(-50%, 0, 0);
}

.slide-right-leave-to {
    opacity: 0;
    transform: translate3d(50%, 0, 0);
}

.slide-left-enter-from {
    opacity: 0;
    transform: translate3d(50%, 0, 0);
}

.slide-left-leave-active {
    opacity: 0;
    transform: translate3d(-50%, 0, 0);
}
</style>
