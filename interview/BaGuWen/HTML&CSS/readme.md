- HTML5新特性
  - 语义化标签
    - header footer nav aside main article(文章列表) section(区域)  
    - 语义化的优点
      - 代码结构清晰，易于阅读，利于开发和维护 
      - 有利于搜索引擎优化（SEO）
  - 媒体标签
    - audio 
    - video
    - canvas
    - form 
  - 本地存储 localStorage sessionStorage IndexDB    
  - history API  pushState popState 单页应用 
  - drag and drop 拖拽 github 代码拖拽上传  
  - web worker 多线程  
  - websocket 实时聊天 双向通信  
  - geolocation 地理定位 美团
  - getUserMedia 摄像头和麦克风

- 盒子模型
  - content、padding、border、margin
  - 标准盒模型 width = content 
  - IE盒模型 width = content + padding + border
  - 切换 box-sizing: content-box | border-box 

- 选择器和优先级
  - !important 100万 > 
  内联样式style 1000 > 
  ID选择器#id 100 > 
  (类选择器.class、属性选择器[]、伪类: 10) > 
  (标签选择器div、伪元素:: 1) > 
  全局选择器* 0

- em/px/rem/vh 区别?
  - 绝对长度单位
    - px，表示像素，就是像素点
  - 相对长度单位
    - em 相对于当前对象内文本的字体尺寸。如当尺寸未被人为设置，则相对于浏览器的默认字体尺寸（1em = 16px）
    - rem 相对于HTML根元素font-size 的大小
    - vw ，就是根据窗口的宽度，分成100等份

- css中，有哪些方式可以隐藏页面元素？区别？
              display:none	visibility:hidden	 opacity:0
  页面中	      不存在	        存在	            存在
  重排	        会	            不会	            不会
  重绘	        会	            会	            不一定
  自身绑定事件	不触发	        不触发	          可触发
  transition	  不支持	         支持	           支持

