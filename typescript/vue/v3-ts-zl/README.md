# vue + TS
- vue3以前对ts类型系统支持不友好
- vue3框架本身是由ts写的
- vue3借鉴react的hooks函数式编程 使用setup + composition API 抛弃落后的类式组件
- proxy响应式代理 vue2 defineProperty 
- react单向数据流 vue双向 v-model
- vue有指令 语法更加优雅 react门槛高
- MVVM 

- vue3+ts注意的地方
  - 项目架构会有types目录类型的声明  多半为数据接口
  - alias vite.config + ts + tsconfig.json path 
    - @types/node @types/vue-router
  - reative ts的重点
    - 泛型约束
    - <{e:E[]}>

- 数据接口怎么做？
    - /api表示接口地址   
    http://api.vikingship.xyz/api/columns?currentPage=1&pageSize=3   
    /api/columns?currentPage=1&pageSize=3  
    /api 后端工程师 接口的路径开始，约定  
        /columns 列表  
    - 前后端分离
        前端 vue 3000  
        后端 koa 8080  
        跨域 cors JSONP 代理proxy  
        A   C   B    后端接口已存在，且在线上  
 
- proxy代理解决跨域问题
    前后端分离  
        - 服务器端接口已上线，本地通过proxy解决跨域  
        - 服务器端接口未上线 mockjs + online fastmock 按约定的接口文档  
        分头开发前 在一起约定接口文档，哪些接口/api restful url params qs json 返回是什么  
        等前后端都独立写完的时候，联调，本地的axios baseUrl -> serverUrl  
    vite.config.ts可以帮我们的前端请求做代理  
    nginx高性能服务器，负载均衡服务器，服务器集群的ip地址和忙闲算法，代理服务器  
    :3000 proxy :80 http默认端口    
    http://localhost -> http://localhost:80 -> nginx -> http://localhost:30   

    /api/column -> http://localhost:3000 -> proxy -> http://api.vikingship.xyz/api/columns?currentPage=1&pageSize=3  跨域  