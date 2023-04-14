// const { reactive, effect } = require("@vue/recativity")

// jest 提供的api
// vue 达成了 99.99% 用例测试的框架
import { reactive } from "../reactive"
import { effect } from "../effect"

describe('测试响应式', () => { // 测试分组
    // item 一个测试用例
    it('测试', () => {
        // expect  toBe  断言
        expect(1 + 2).toBe(3)
    })
    it('reactive 基本使用', () => {
        // expect(1 + 2).toBe(3)
        let obj = { num: 0 }
        const ret = reactive(obj)
        // const ret1 = reactive(obj)
        let val
        effect(() => {
            val = ret.num // 收集依赖
        })
        expect(val).toBe(0)
        // ret.num++
        // expect(val).toBe(1)
        // ret.num = 10
        // expect(val).toBe(10)
    })
})

// describe('虚拟DOM', () => {
//     it('测试', () => {
//         expect(1 + 2).toBe(3)
//     })
// })