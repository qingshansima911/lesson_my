# 组件

- 从何而来
    js/DOM API等 -> jQuery(高效、兼容) -> template lodash compiler -> VUE template/script/css  

    html -> template业务的focus -> 数据驱动 -> reactive -> mounted + updated -> effect(compiler)
    -> vnode -> diff前后状态的差异 -> dom更新 

- 组件生成什么？
    - render template {{}} v-if  : VDOM产出 -> createElement
    - reactive ref setup  
    - 生命周期
    - VDOM
    - diff

- Component 类 函数 -> render -> 真实的DOM
    组件化思想 -> reactive diff 数据驱动思想 -> final createElement  

- 组件的本质
    组件的前身是一个组件就是一个函数，根据数据得到html内容   
    VDOM   
    Component(VDOM)   
        +   
    render方法  {type, props, children} createElement   
    npm i snabbdom

- 组件的产出是VDOM
    - 分层
        平台无关性 VDOM -> patch -> html/wxml/xml  SSR 服务器端渲染  
    - 性能优化
        查找VDOM 比对比较快 在内存收集差异

- 函数式组件(Functional component)和有状态组件(Stateful component)
    - 展示为主 函数式组件 StatelessComponent props
        function MyComponent(props) {}
        - 是一个纯函数 一个props状态对应唯一的template
        - 没有自身的状态  
        - 产出VNode的方式 单纯的函数调用
    - 数据业务 父组件
        class MyComponent {}   
        是一个类，可实例化  
        可以有自身状态  
        产出VNode的方式：render方法

- 组件是怎么挂载到页面上的？ VNode + Renderer
- 当更新时，组件是如何effect？
- DOM VDOM
    - document.createElement('div') <div> h('div')  
    - Component.$vnode = h('div')   
    // 标签 属性 子节点   
    - tag, props({ class:'sd', id:'d1' }, children: [  
        { tag: ele, { list: list }, children: [] }  
        { tag: div, children: ['hello world'] }  
    ]) 
        树   
        class TreeNode {    
            constructor(data) {    
                this.left = null;   
                this.right = null;    
                this.value = value;    
            }   
        }  
        ```js
            <div class="sd">  
                <ele :list="list"></ele>  
                <div>hello world</div>  
            </div>  
        ```  
    VDOM  
    h(tag, data, children) VNode  
        h(tag, data, children) VNode  
            null  
    - 我们可以通过检查tag属性是否是字符串来确定一个VNode是否是普通标签
        - tag 
            - function -> statelessComponent h(template)
            - class -> StatefulComponent h(component.render)
            - .text -> document.createTextNode
        - Fragment document.createDocumentFragment 性能优化组件
            <template>
                <Fragment>
                    <td></td>
                    <td></td>
                    <td></td>
                </Fragment>
            </template>
        - Portal 指定目标地 弹出层
            <Dialog>
                <p>
                    <Portal target="body">
                </p>
            </Dialog>
            flags 枚举是什么类型的节点  
            const elementVNode = {
                tag: 'div',
                flags: 0/1/2/3/4,
                data: null,
                children: {
                    tag: MyComponent,
                    data: null
                }
            }

    - VNode种类 {  
        html/svg 标签     
        组件 {   
            有状态组件 {   
                普通的有状态组件     
                需要被keepAlive的有状态组件   
                已经被keepAlive的有状态组件  
            }   
            函数式组件     
        }  
        纯文本     
        Fragment     
        Portal    
    }   

    - flags设计
        - 优化手段，缓存，不需要每次都判断 
        - 区分html元素、组件、普通文本
            1. 拿到VNode后先把它当做组件去处理，如果成功创建，说明是组件的VNode；
            2. 如果没有成功创建，则检查vnode.tag是否由定义，如果有则当做普通标签 
                includes html标签校验  HTMLElement    
            3. 如果vnode.tag没有定义则检查是否是注释节点  
            4. 如果不是注释节点，则把它当做文本节点处理  
        - 用位运算提升了运行时性能  
            flags 2(10) 4(100) 8(1000) 16...  
        - { tag, data, children, flags, childFlags }  
        - { _isVNode, el, tag, data, children, flags, childFlags }  

    - template -> 写出h -> VNode -> Renderer


    
