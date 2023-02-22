<template>
    <div>
        Cart
        <nav-bar/>
    </div>
</template>

<script setup>
    import { onMounted } from 'vue'
    import NavBar from '~/NavBar.vue'
    import { useCartStore2 } from '@/store/cart.js'
    import { useRouter } from 'vue-router'

    const cart2 = useCartStore2()
    // console.log(user.isLogin, '//////')
    const router = useRouter()
    const { updateLogin } = cart2;
    onMounted(() => {
        // if (!cart2.isLogin) {
        //     router.push({
        //         path: '/login'
        //     })
        // }
        // updateLogin()
    })
</script>

<style lang="stylus" scoped>

</style>