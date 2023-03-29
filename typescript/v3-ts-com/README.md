# vue3 + typescript + composition api

- js 和 ts 区别?
    js语言？ 弱类型语言 脚本 不需要提前编译  代码的编译在运行的一刹那
    ts语言 静态强类型  提前编译  做到语法检测 和 类型检测 专门的编译阶段
    .ts 的文件不能直接运行  -> .js -> 运行
    ts 比 js 更适合大型项目？ js 缺乏类型检测， 很多莫名奇妙的bug
    ts 可以解决90% 这些问题， 编译阶段就发现

- 为什么要用ts?
    1. 大型项目多人协作，接口， type 等 可以约束代码如何被使用
    ts 起到了文档 代码建议， 不容易出错
    2. js 弱类型 容易出现类似input  12 却是字符串 才会想起praseInt


- Props
    泛型约束 defineProps<{

    }>
    interface Props {
        bar?:number
    }
    defineProps<Props>
    interface 缺点是不支持提供默认值， 宏函数  withDefaults(defineProps,{}) 可以解决这个缺陷

- defineEmit
    运行时， const emit = defineEmits(['change', 'update'])
    基于类型 对触发事件有更好的控制

- ref
    vue 中 Ref 类型
    :Ref<number>
    ref<number>()


- reactive
    - 把对象变成响应式
        应该有哪些属性 interface
        const book: Book = reactive({ title: })

- computed
    计算属性 函数 返回值
    const double = computed<number>(() => {

    })

- template 事件
    - Event
    - ts 在编译
        event.target null 没有value
        - as HTMLInputElement vue所有html 标签都创建了类


- ref 标注dom 节点时
    - 由于 el.value 节点可能为null
    - 可能是任何dom 对象
        const el = ref<HTMLInputElement | null>(null)   只有input里面才有 value div里面是没有的
        el?.value.focus()
        ?. 兼容null