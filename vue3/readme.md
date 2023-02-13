# Vue的世界  
    可以从小程序迁移过来  
    - 组件思想  components  
        wxml + wxss + javascript 可服用的组件  
        页面由组件构成， 比标签高一个级别  
    - 数据驱动思想  不需要找DOM 节点， setData() 自动更新？  
    - wx:for 指令 v-for  
    - 路由  
        /pages + app.json tabbar 目录下就是页面路由  
        wx.navigator({
            url:''
        })
        vue? vue-router  

- 现代web App单页应用 SPA Single Page Application  10年 6年  
    vue   
    https://unpkg.com/vue@next  
    根节点 启动我们的Web App

- Vue 
    1. 现代当红的前端框架，好学，简单
    2. 组件化， 数据驱动思想
    3. Vue 是命名空间
        Vue.
    4. Vue.version vue3 最新版
    5. 对照小程序， 迁移学习
        - template wxml
            模板 {{}} 组件 
        - js  data(){

        }

- v-on:click @click 代替
    this.content = ''    this 直接引用data 里的数据
    this.$data.content = ''
    vue ? 比react 更友好， 方便入门， 学习成本低
    API 设计人性化

- Vue 底层源码
    1. data {} 如何被监听， 重新编译模板？  proxy es6
    2. Vue 世界为什么要杜绝DOM 编程 #app?
        DOM 编程慢...

- 占位符与数据绑定的区别
    普通的html 里面输出的 占位符 {{}}  
    标签的属性 或组件的props 里 数据绑定 
    - 单向数据绑定  
        v-bind:value :value 绑定值   
        v-on:input @input 绑定事件  
    - 双向数据绑定  
        v-model  

- Object原型链上的方法
    Object.defineProperty() 定义一个属性    
        writable只读 enumerable可枚举  
    Object.freeze() 冰冻一个对象    
    Object.keys Object.getOwnPropertyNames  拿到对象上所有的key 不包括Symbol()     
    Object.getOwnPropertySymbols    拿到对象上所有的key 包括Symbol()        
    
- 生命周期 MVVM  创建create 挂载mount 更新update 卸载unmount
    Model View  
    - create 在内存中创建  
        创建前会先监听事件和生命周期钩子函数 beforeCreate  
        数据的绑定和响应式 get set defineProperty created   
    - mount 从内存中去到真是的DOM上     
        template 编译成dom string beforeMount   
        dom string -> app.mount('.app') mounted 
    - update 组件不是静态的     
        事件    
        数据请求    
        this.$data.counter this.counter beforeUpdate new dom string
        new dom string -> DOM显示 updated
    - unmount       
        命令 卸载 beforeUnmount
        unmounted 已经卸载 DOM removeChild	
- vue 数据模型 除了data props		
    data 私有属性  
    props 传参  
    computed 计算属性  

- 父子组件间的生命周期 
  局部和整体的概念来处理  
  v-show  隐藏
  v-if   	卸载

    

    
        
