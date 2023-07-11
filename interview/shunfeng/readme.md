- vue 
- 工程化
- js/css基础
- 简单算法数据结构

- vue router 哪几种方案 原理是什么
  - url 改变，但页面无刷新，单页应用，优化了体验
    传统的基于后端路由，访问请求，白屏，重新请求
    动态修改页面
  - hash 路由 
    当井号 # 后面的路径发生变化时，浏览器并不会重新发起请求，而是会触发 hashchange 事件。
    优点：兼容性好，连IE8都支持  
    缺点：路径在井号 # 的后面，比较丑
  - history 路由 
    history API 是 H5 提供的新特性，允许开发者直接更改前端路由，即更新浏览器 URL 地址而不重新发起请求。
    优点：路径比较正规，没有井号 #
    缺点：兼容性
    - history API 
      history.go(-1) 后退一次
      history.forward() 前进
      history.back() 返回
      history.replaceState(state, title, url) // 替换路由
      history.pushState(state, title, url) // 路由压栈
      history.popState(state, title, url) // 路由出栈
    后端支持 nginx 配置  
    回车，history 去服务器请求index.html  
      hash 不需要服务器端做额外的设置 localhost:3000/#about   
      localhost:3000/about  /about 没有这个页面 koa router做的  
      nginx 配置 /* -> 跳转到index.html  