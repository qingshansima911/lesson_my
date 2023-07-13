import { defineStore } from 'pinia'
import { reactive } from 'vue';
// 提供响应式的状态和修改的方法 老版本
// const useGoodsStore = defineStore('goods', {
//   state: () => {  //放响应式数据源
//     return {
//       id: 0
//     }
//   },
//   actions: {
//     changeId(id) {
//       this.id = id
//     }
//   }
// })
export const useGoodsStore = defineStore('goods', () => {
  const state = reactive({
    id: 0
  });
  const changeId = (id) => {
    state.id = id;
  };
  return {
    state,
    changeId
  };
});

export default useGoodsStore