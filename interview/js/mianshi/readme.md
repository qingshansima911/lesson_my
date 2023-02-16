- js 面试准备思路
    1. 覆盖高频考点
    2. 全面 准确 深度的介绍
- 扁平化 flatten 
    将多维数组转化为一维数组   
    1. 递归思想
        遍历 + Array.isArray递归 push进新数组 传统解决   
    2. API 
    3. reduce 可以优化命令式，解决更优美
        [] result pre 已经扁平化的部分数组， cur Array.isArray 递归   
    4. 将数组序列化(JSON.stringify)后，得到字符串，正则替换掉[]
        接着使用split切割成数组 或 最外层加[]再反序列化   
    5. es10 Array.flat(Infinity)  
    6. 为了兼容性，不重复造轮子，lodash库   
    

- localStorage 本地存储 html5 重要功能
    localStorage.setItem('item',o)  '[object Object]'   
    localStorage.setItem('item',JSON.stringify(o))  序列化  
    JSON.parse(localStorage.getItem('item'))  反序列化   
    - cookie 身份状态 随着http每次发送  
        HTTP 无状态协议  Stateless  cookie弥补这个缺憾  
        HTTP 头部信息  长度 < 4KB  
        域名 同一个域名下的所有请求都会带上cookie  服务器解析cookie  
        1. 每次请求响应是独立的  
            快 服务器响应简单  
        2. 没有事务记忆能力  
            基于请求响应  公平  
            登录 购物车 评论 点赞 
        3. cookie  
            字符串 a=1;b=2   
            domain  
        4. 缺点：对请求的性能有影响  
    - localStorage 不需要每次http 请求都发送 
        本地存储 domain   
        大小为5M，用于存储用户的设置、草稿箱、首页列表   
        JSON.stringify() 序列化   
        JSON.parse() 反序列化  

- reduce map some filter find 高阶函数
    如果函数的参数是函数，或者返回值是函数  
    - 闭包 高阶函数 返回值是函数  
    - map... 参数是函数   
    - map 
        es6 数组的API，基于一个数组每一项执行一个函数，返回值组成一个新的数组  
        1. 数组中的每一项都调用一个提供的函数，返回的结果组成新的数组  
        2. 全新的函数式编程风格，更好理解  
        3. 原来的数组不会受到影响  

- call 手写 apply bind
    核心是把原来的方法作为带指定的this对象方法来执行  
    1. 方法作为指定this对象的方法来调用，动态添加方法
    2. Symbol唯一值，动态添加方法，不会覆盖 
    3. delete删除Symbol,不修改对象
    4. 参数类数组 数组化，展开交给函数
    5. 函数运行拿到返回值返回

- 拷贝
    

 
