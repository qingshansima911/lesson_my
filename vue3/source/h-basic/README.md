# snabbdom + vue需求

- component -> template -> compiler -> h(三个参, babel 抽象语法构建) -> VNode + Renderer
    -> DOM  
    let c = a + b  
    词法分析 token 以树状结构组织  AST抽象语法树  

- h() 函数 模式
    - 返回的VNode设计
    - 参数 三个
        tag data children 

- vue源码学到了什么？
    - 处处性能优化
        1. VNnodeFlags ChildrenFlags 
            位运算 &  
            render 到底是走DOM API 还是 Component   
            render 位 & VNode flags & VNodeFlags.ELEMENT
        2. element VNode 真实的DOM
    - 模块化
        flags单独放  
        reactive  
        compiler  
        renderer  
    - 测试驱动开发
        实现一个小目标慢慢推进打目标
    - 面向对象设计
        1. Component组件设计
            继承 render必须有 vue2.0  
            基类 throw super