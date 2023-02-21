import { ref } from 'vue' // 响应式 使用共享状态依然会热更新  
// 单页应用 -》 组件 + 数据流管理
import { defineStore } from 'pinia'
// 定义一个仓库
export const useCartStore = defineStore('cart', () => {
    const count = ref(10)
    async function updateCount() {
        const p = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve()
            }, 2000)
        })
        await p
        count.value++
    }
    return {
        count,
        updateCount,
    }
})
export const useCartStore2 = defineStore('cart2', () => {
    const isLogin = ref(false)
    async function updateLogin() {
        const p = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve()
            }, 2000)
            })
        await p
        isLogin.value = true
    }
    return {
        isLogin,
        updateLogin
    }
})
