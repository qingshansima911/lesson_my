- 滴滴的难度如何？  
    - 比较简单  
    - 比发展快，薪资高德公司 容易  
    - 扎实的前端基础  
        20%的高质量 完整度 惊喜讲出来  

- 投递策略  
    1. 定向投  
    2. 投多个  

- css的布局有哪些？ 
    回答思路：文档流 -> 两列/三列布局 -> 新的BFC(弹性/网格) -> 相对(定位) -> table布局  
    - 流式布局 Flow  
        默认布局方式 元素从上到下，从左到右布局  
    - 浮动布局  
    - 三列布局  
        - 块级元素默认从上到下  
        - 脱离文档流或开辟新的BFC(Flex, inline-flex, inline宽度高度不可以, inline-block font-size:0)  
        - 浮动 
            圣杯和双飞翼  
            - 中间列要能够宽度自适应
            - 中间列要优先渲染  
        - 弹性布局
            简单 兼容性 flex:1  
    - 弹性布局 阮一峰  
    - 网格布局 display:Grid  
        复杂的行列布局  九宫格  
    - 绝对定位布局  
        通过设置元素的position属性为absolute或fixed,在父级元素中的位置即使改变也可以不变  
    - 表格布局  

- es6 symbol bigint   
    新的数据结构 Map/Set WeakMap WeakSet  
    js七种数据类型    
    - symbol的方法，应用场景  
        唯一的  
        - 对象属性名的定义  
            大型多人项目中 不会覆盖原有属性和方法  
        - 不重要的属性不出现在对象遍历中
            Object.getOwnPropertyNames(object)  
            Object.getOwnPropertySymbols(object)  
        - 类的私有属性和方法
            1. es6目标js成为大型企业级开发语言，需要提供private能力  
                有class extends  没有private关键字
            2. 约定大于一切 _method()  
            3. private的本质是类的开发者和使用者的解耦
                类复杂的话，开发者没必要，隐藏一些复杂的细节，不能被调用者随便调用  
                公有方法 简单的，好用的  
                私有方法，难得，有规矩的，使用者没必要去搞的  
                Symbol() 使用者不可能去 加大了使用者犯错的难度   
    - js 判断类型的方法
        - typeof
            null Array Object 子类型  
        - instanceof
            构造函数在对象的原型链上  
        - Object.prototype.toString.call() 
            子类型  
        之外，假如我们还要添加新的数据结构判断能力  
        - isSet isMap
