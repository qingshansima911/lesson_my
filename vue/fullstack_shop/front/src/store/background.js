import { defineStore } from 'pinia'
import { reactive } from 'vue'

const useBackgroundStore = defineStore('goods', () => {
  const state = reactive({
    loadUrl: null
  })
  const changeLoadUrl = (loadUrl) => {
    state.loadUrl = loadUrl
  }
  return {
    state,
    changeLoadUrl
  }
})

// const useBackgroundStore = defineStore('goods', {
//   state: () => {  //放响应式数据源
//     return {
//       loadUrl: null
//     }
//   },
//   actions: {
//     changeLoadUrl(loadUrl) {
//       this.loadUrl = loadUrl
//     }
//   }
// })

export default useBackgroundStore
