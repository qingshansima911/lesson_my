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

- didi面试题 Promise
    1. 异步 node 异步无阻塞
        同步 瞬间执行完 + cpu轮询的概念  
        异步 耗时的 eventloop js + 前端/后端  
        单线程 保证了预言的简单易学，无阻塞  
        callback带来执行的顺序得不到保障  
        并行带来回调地狱  顺序 代码的可读性提升  
    2. Promise thenable链 -> async await 多行  
    3. 并行，提升性能和效率  
        Promise.all([]) Promise  
        async await 没有try catch    
        Promise.allSetted 返回status + value/reason  

- nginx
    nginx是一款高性能的web服务器和反向代理服务器  
    1. www.baidu.com:3000  
        npm init vite vue 3000  
        www.baidu.com -> 80 http  
        https://      -> 443  
        ```   
        server {  
            listen:80;   
            location / {   
                proxy_pass http://localhost:3000     
            }   
        }  
        ```  
    2. 负载均衡 nginx 不负责应用的 只负责调度  
        upstream backend {
            server backend1.example.com;
            server backend2.example.com;
            server backend3.example.com;
            server backend4.example.com;
        }
    3. https的配置  
        用户 -> nginx -> restful(资源)  
        加载https SSL 证书和私匙 
        搭建静态网站，首先需要部署环境。下面的步骤，将告诉大家如何在服务器上通过 Nginx 部署 HTTP 静态服务。   
        yum install nginx -y  nginx  
        mkdir -p /data/www  
        nginx -s reload  

- 输入URL到页面显示
    提词器：网络 解析 渲染  
    - 网络
        1. DNS解析domains 
            分布式数据库  key value 缓存  拿到IP地址  
        2. TCP连接
            三次握手 SYN SYN/ACK ACK  
        3. HTTP
            请求头 请求体   
        4. 服务器资源处理，响应用户内容 
    - 渲染
        1. HTML解析
            DOM树   
            同时CSS JS 加载也发生  
        2. CSS解析
            CSS规则（CSS OM树）与DOM树绑定起来，生成渲染树（Rending Tree）  
        3. 布局和绘制
            每个元素在页面的确切位置和大小，将渲染树和布局信息进行合并，得到绘制树Painting Tree  
    - 强调优化策略
        1. 减少http请求数 图片的懒加载  
        2. 压缩资源文件 webp nginx gzip 压缩  
        3. 缓存 强 协商  
        4. CDN
        5. 骨架屏

- get post区别
    HTTP请求的两种方法，用于向服务器提交数据和获取数据  
    需要 安全性  
    1. get请求通过URL传递参数，post请求通过http请求体传递  
        get长度限制 post文件都可以   
    2. get请求在url中直接可见，不安全，中间人 https  
        post请求是加密的更安全  
    3. get请求可以被缓存的资源，post不可以被缓存

- 浏览器缓存
    - 主要针对前端静态资源，大大的减少了http请求数，提高了网站的性能（服务器CPU, 带宽， 内存）
    - 强缓存
        设置响应头 请求头  
        HTTP1.0 Expires  
        HTTP1.1 Cache-Control:max-age=xx  
    - 协商缓存
        1.0 Last-Modified(服) if-modified-since(客) 
        1.1 Etag if-none-match   
        - etag精确度更高，文件hash计算   
        - 缺点是计算成本高  

