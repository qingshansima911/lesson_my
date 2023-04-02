# 手写jsonp
- 跨域
    后端的处理
    1. Access-Control-Allow-Origin  
        cors ajax 同源策略
        res.setHeader('Access-Control-Allow-Origin', '*')
    2. 不受同源机制限制的script标签
        <script src="外网地址"></script>   
        img  
        link  
    3. app.use(cors())

- CORS Policy
    cross origin resource share 跨域资源共享  
    - 为了安全性 
        企业内部， baidu.com api.baidu.com zhidao.baidu.com  
        前后端分离 3000 8080 跨域是家常便饭  
        cors方案适用于比较保守的跨域解决方案 适用于公司内部或友商

- script 门户开放型 jsonp
    开放给全网用的 github api douban api  
    origin起始在用户的浏览器端 ，它会绕过同源策略  
    1. script可以请求跨域资源 不受同源策略的影响，前提是返回js  
    2. 提前写好callback回调函数 返回的js会执行
        json资源外面包一个函数，成为js函数调用