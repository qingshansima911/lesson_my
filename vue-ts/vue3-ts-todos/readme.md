# vue3 + TS  
- vue以前对typescript类型系统支持的不是很友好  
    vue框架本身是用typescript写的   
- vue借鉴了react的hooks函数式编程 setup + composition API  抛弃落后的类式组件  
- proxy响应式代理  vue2 defineProperty  
- react单向数据流 vue双向 v-model  
- vue有指令，语法更优雅 react门槛更高
- MVVM

- vue3 + ts注意的地方  
    - 项目架构会有types目录类型的声明，多半为数据接口  
    - alias vite.config.ts + tsconfig.json 
        path @types/node  
        @types/vue-router  
    - reactive对象 ts的重点 
        <{todos: Todos[]}>  