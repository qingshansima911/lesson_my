// 依赖收集器 fn  响应式对象改变之后， fn 要重新运行
// options lazy scheduler
const targetMap = new WeakMap()
let activeEffect = null
export function effect(fn, options = {}) {
    const effectFn = () => {
        // 容错
        try {
            activeEffect = effectFn
            //fn执行的时候，内部读取响应式数据的时候，就能在get配置里读取到activeEffect
            return fn()
        } finally {
            activeEffect = null   // 打扫战场
            // 无论在try块中是否发生异常，finally块中的代码都会执行  
        }
    }
    if (!options.lazy) {
        // 同步运行
        effectFn() // 触发 proxy 的 get
    }
    effectFn.scheduler = options.scheduler // watchEffect
    return effectFn
}

export function tarck() {

}

export function trigger() {

}