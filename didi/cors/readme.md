# 跨域方案
- JSONP
    DOM script 不受跨域限制的  
    只能发GET 请求  
    服务器端 返回js XSS 跨站脚本攻击  
- CORS
    Access-Control-Allow-Origin  
    Access-Control-Allow-Method 更多方法  
- postMessage
    - html5 postMessage 实现跨域消息通信  
    - 主页面通过window.open 或 iframe启动一个他域的页面
    - 消息通信 基于订阅发布者模式
        targetWindow.postMessage(msg, targetOrigin)  
    - addEventListener('message')  
        event.origin 白名单  
        e.source.postMessage(msg, e.origin)  
        postMessage  要用户授权  知情权  
    - websocket 双工的 不受跨域限制  