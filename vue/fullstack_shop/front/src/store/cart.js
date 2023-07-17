import { defineStore } from 'pinia'
import axios from 'axios'
import { ref } from 'vue'

const useCartStore = defineStore('cart', () => {
  const badge = ref(0)
  const changeBadge = async () => {
    const res = await axios.post('/cartList', {  //获取购物车数据
      username: JSON.parse(sessionStorage.getItem('userInfo')).username
    })
    // console.log(res);
    // console.log(res.data.length);
    // badge.value = res.data.length
  }
  return {
    badge,
    changeBadge
  }
})

export default useCartStore