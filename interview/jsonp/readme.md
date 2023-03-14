# json with padding 

- 跨域 
    npm i express  
    npm i nodemon  持续更新  
    1. 以后服务器端脚本 
        会以api.baidu.com/say  后端接口域名  
        www.baidu.com 前端域名  
        url http(s)://domain.com:8888/path?a=1#b  
        只要协议 域名 端口不一样，都叫跨域  严格  
        cross origin = 协议 + domain + 端口  
        跨域为了安全  双方  
            前端不信任后端返回的资源  
            后端 No Access  
        跨域却是常态  
            前后端分离是主流  8888 3000  
            大公司的协作  
            api ,baidu.com  ai.baidu.com   
            taobao.com cainiao.com  
    
- 浏览器会自动进行CROS(跨域)通信
    实现CROS通信的关键是后端  
    服务器设置Access-Control-Allow-Origin 为 *   后端牺牲很大   
    白名单  

- 什么是同源策略及其限制内容
    同源策略是一种约定，是浏览器最核心也最基本的安全功能。  
    如果没有浏览器很容易收到XSS,CSRF攻击   
    js里面不能执行非同源的代码  
    - cookie localStorage origin  沙箱隔离  
    - DOM节点  
    - AJAX请求 js内容  CROS  
    
    