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
      nginx 配置 /* -> 跳转到index.html  \

- vue 修饰符
  - 表单修饰符
    v-model.lazy 
      lazy 修饰符作用是，改变输入框的值时value不会改变，当光标离开输入框时，v-model绑定的值value才会改变  
    v-model.trim  
      把v-model绑定的值的首尾空格给过滤掉  
    v-model.number  
      将值转成数字，先输入数字的话，只取前面数字部分；先输入字母的话，number修饰符无效
  - 事件修饰符
    @click.stop 阻止冒泡
    @click.enter 按了enter键
    @click.capture 由外网内捕获
    @click.self 只有点击事件绑定的本身才会触发
    @click.once 只执行一次
    @click.prevent 阻止默认事件
    @click.native 加在自定义组件的事件上，保证事件能执行
    @click.left，right，middle
    @click.passive 给onscroll事件整了一个.lazy修饰符 @scroll.passive="onScroll"
  - 键盘修饰符
    无论按什么按钮都会触发事件 keyCode解决
    @keyup.keyCode="shout()"
    enter tab delete space esc up ...
  
- 请编写一个focus 指令  
  vue常用的自定义指令有哪些，请用Vue.directive()写出来
  指令是会绑定DOM 的
  Vue.directive() 创建自定义指令
  Vue.directive('focus',{
    当被绑定的元素插入到DOM中时
    inserted: function(el) {
      el.focus();
    }
  })
  <input v-focus /> 自动聚焦

- 点击回到顶部
  - 锚链接
    <div id="top"></div>  
    <a href="#top">回到顶部</a>  
  - js  
    window.scrollTo({  
      top: 0,  
      behavior: 'smooth'  
    })  

- html input 如何上传多个文件
  <input type="file" multiple>  

- display 有哪些
  元素的盒行为  inline block inline-block  
  常用的布局文案 flex table grid   
  离开文档流 none  

- 什么是事件委托
  利用事件冒泡机制，提升程序性能，降低内存空间的技术手段  

- 宏任务、微任务有哪些
  - 宏任务
    ajax、setTimeout、setInterval、script、requestAnimationFrame、UI渲染、setTmmediate、一些浏览器api，I/O操作（例如网路请求、文件读写等异步操作）
  - 微任务
    promise.then、then  
  




