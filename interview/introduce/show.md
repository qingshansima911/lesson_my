# 展示点 啊哈时刻
- cookie session
  - cookie前端后端都能种 Cookie数据存储在用户的浏览器（危险）4KB  
  - session只在后端，是内存对象 Session数据存储在服务器上（安全）5MB  
  session_id uid sid -> session找回来我们的用户JSON KV 查找   
  auth / session 中间件 ctx.user = ctx.session  

- cookie 或者本地存储
  - httpOnly true 只在http请求过程中传输 默认是js也可以读取
    XSS攻击的原理：通过在网页中植入一段js代码，把cookie读取，发送到黑客，获取了身份，比如session_id这种cookie一定要设置为true，一些username等js需要访问，安全性没问题的业务cookie不设置
  - secure    
    https 可靠连接才会发送

- 本地存储
  - 有效时间
    cookie 可以设置过期时间，每次请求都会传输，要考虑性能和安全问题   
    localStorage 一直都在，不会传输 只存在客户端，默认不参与与服务端的通信  
    sessionStorage 关闭就没有  只存在客户端
  - 存储大小
    cookie最小4KB  
    localStorage sessionStorage 5MB
    IndexedDB 数据库 更大 

- 同源策略
  - 沙箱
  - 跨域

- 状态码
  301表示永久重定向，客户端应该使用新的URL  
  302表示临时重定向，客户端应该使用新的URL    
  307表示临时重定向，但要求客户端保持请求方法一致  302的缺点是重定向后的方法会变成get  

- 从url输入到页面显示的具体过程
  1. 浏览器进程检查url，组装协议，构成完整的url，服务器返回https://www.baidu.com 307 
  2. 浏览器进程通过进程间通信（IPC）把url请求发送给网络进程
  3. 网络进程接收到url请求后检查本地缓存是否缓存了该请求资源，如果有则将该资源返回给浏览器进程
  4. 如果没有，网络进程向web服务器发起http请求 
  5. 网络进程解析响应流程。
  6. 浏览器进程准备渲染进程。