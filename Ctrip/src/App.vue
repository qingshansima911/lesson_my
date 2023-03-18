<script setup>
import router from './router/router';

router.beforeEach((to, from) => {
    // console.log(to.meta.isLogin);
    if (localStorage.getItem('token')) {
        switch (to.meta.isLogin) {
            case 1: router.push('/loginMy'); break
            case 2: router.push('/loginMessage'); break
        }
    }
})

</script>

<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<style scoped lang="stylus">

</style>
