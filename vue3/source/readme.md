# 源码
[文章](https://time.geekbang.org/column/article/470089)
- vue3响应式
    B站 视频
    - 看视频
    - 笔记
    - 演练
- 虚拟DOM
- diff算法

- reactive 了解effect是什么？更新依赖收集
- 响应式的好处
    - 远离DOM API的约束，专注业务开发，更好更快
        组件之间通过响应式来通知 effect

    - 单个组件的视角
        reactive({
            list: []
        })
        组件挂载在页面之前 {{ list}} -> proxy get

        - template {{ list }} proxy set 自动更新
            get添加依赖 set时执行依赖

        - computed
        - watch watchEffect
            proxy get 回调函数

        - onUpdated
            组件挂载前发生了什么

## 平台无关性

- uniapp vue 做小程序   
- react native ios/android app  
- SPA vue      
    相同点都是响应式、UI界面 大前端？  
    不同点在于不同产品和平台  
    template{{list}} <-> VDOM(VNODE 内存快, proxy)  -> mounted(DOM/WXML/XML,  随意编译)   

模板  
<ul>  
    <li v-for="item in list">  
        {{item}}  
    </li>  
</ul>  
前端 UI(用户界面) 前端/小程序/APP 开发  
VDOM UI语义  
    {   
        type: 'ul | component',   
        props: {   
            id: '',  
            class: '',   
            data-: ''    
        },    
        children: [  
            {    
                type: 'li | component',   
                props: {    
                    id: '',   
                    class: '',    
                    data-: ''   
                },   
                children: ['1']  
        ]    
    } 
VDOM -> DOM API(document.createElement('ul') | document.createElement('view') -> DOM   
JSON对象 -> UI 字符串的过程  
平台无关性    
<ul>  
    <li>1</li>   
    <li>2</li>   
</ul>  

- vue 的响应式 平台无关性
    - vue npm 包 node 环境    
    - proxy get set 读写 代理后 get 依赖收集 set 回调运行 effect  
        包裹、包装 track 收集依赖 跟踪？   
        trigger 触发依赖函数的执行  
        Map/WeakMap  
        targetMap Map? { object : {
            "num1": [effect(), effect2()],
            "num2": [effect3()]} 
            }    

- 更新时
    prev state template vdom dom    
    current { val1, val2 } 一次性同时更新vdom -> 一次性更新dom  
         