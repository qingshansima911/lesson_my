import { createStore } from './gvuex.js';
// - createStore ? 创建单一状态树
// const { createStore } = Vuex;
// console.log(PI);
const store = createStore({
    state() {
        return {
            count: 1
        }    
    },
    mutations: {
        add(state) {
            state.count++;
        }
    }
})
export default store