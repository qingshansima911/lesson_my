- 不用vite如何让代码跑起来
    模块化  
    vite webpack 企业级的工程化工具  
    中小型工程化工具  不需要那么复杂 立马把项目跑起来  
    npm i @babel/core parcel-bundler(打包器) --save-dev  

- 二次更新渲染细节
    - 如何更新 首先比对节点
        1. 比tag
            tag类型都不一样
        2. 比data
        3. 比children

- vue源码学到了什么？
    - 模块化,职责划分
        一个函数、文件只做一件事  
        - h.js
        - render.js
            - patchData.js
            - diff.js
    - 抽象能力
    - 逻辑能力
        严谨且完整  

- 虚拟DOM算法操作真实DOM，性能高于直接操作真实DOM
    虚拟DOM算法 = 虚拟DOM + Diff算法  
    使用虚拟DOM算法的损耗计算： 总损耗 = 虚拟DOM增删改 +（与Diff算法效率有关）真实DOM差异增删改 +（较少的节点）排版与重绘  
    直接操作真实DOM的损耗计算： 总损耗 = 真实DOM完全增删改 +（可能较多的节点）排版与重绘  

- 映射关系
    0 1 2   
    2 0 1 递增？  
    [  
        h('li', { key: 'a' }, 1),   
        h('li', { key: 'b' }, 2),  
        h('li', { key: 'c' }, 3)   
    ]    
    [  
        h('li', { key: 'a' }, 3),   
        h('li', { key: 'b' }, 2),   
        h('li', { key: 'c' }, 1)  
    ]  
    0 1 2 递增  
    递增 -> 不递增 -> 调整位置
    2 是最大索引值，遍历旧的children，凡是比最大索引值小的节点，意味着该节点需要移动  

- diff算法核心原理
    [文章](https://juejin.cn/post/6994959998283907102#heading-11)   
    双端对比算法  

    
