- 你做过的项目有什么难点，你是怎么解决的
  1. 图片懒加载 
    vant 内置了Lazyload v-lazy
  2. 路由切换的动画效果
    vue 内置了transition 组件
  3. 瀑布流布局
  4. 水平滚动 better-scroll  
  5. 回到顶部

- 从输入ur1到页面返回过程
  1. 用户输入url并回车
  2. 浏览器进程检查url，组装协议，构成完整的url，服务器返回https://www.baidu.com 307 
  3. 浏览器进程通过进程间通信（IPC）把url请求发送给网络进程
  4. 网络进程接收到url请求后检查本地缓存是否缓存了该请求资源，如果有则将该资源返回给浏览器进程
  5. 如果没有，网络进程向web服务器发起http请求   
    5.1 进行DNS解析，获取服务器ip地址，端口
    5.2 利用ip地址和服务器建立tcp连接
    5.3 构建请求头信息
    5.4 发送请求头信息  
    5.5 服务器响应后，网络进程接收响应头和响应信息，并解析响应内容 
  6. 网络进程解析响应流程
    6.1 检查状态码，如果是301/302，则需要重定向，从Location自动中读取地址，重新进行第4步，如果是200，则继续处理请求。  
    6.2 200响应处理： 
      检查响应类型Content-Type，如果是字节流类型，则将该请求提交给下载管理器，该导航流程结束，不再进行  
      后续的渲染，如果是html则通知浏览器进程准备渲染进程准备进行渲染。   
  7. 准备渲染进程  
      7.1 浏览器进程检查当前url是否和之前打开的渲染进程根域名是否相同，如果相同，则复用原来的进程，如果不同，则开启新的渲染进程   
  8. 传输数据、更新状态  
    8.1 渲染进程准备好后，浏览器向渲染进程发起“提交文档”的消息，渲染进程接收到消息和网络进程建立传输数据的“管道”  
    8.2 渲染进程接收完数据后，向浏览器发送“确认提交”  
    8.3 浏览器进程接收到确认消息后更新浏览器界面状态：安全、地址栏url、前进后退的历史状态、更新web页面。

- 水平垂直居中的方法有哪些？
  <div class="wp">
      <div class="box size">123</div>
  </div>
  .wp {
    background: red;
    width: 300px;
    height: 300px;
  }
  .box {
    background: blue;
  }
  .box.size {
    width: 100px;
    height: 100px;
  }

  - 弹性布局：
    .wp {
      display: flex;
    }
    .box {
      margin: auto
    }
  - 弹性布局
    .wp {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  - 网格布局
    .wp {
      display: grid;
    }
    .box {
      justify-self: center;
      align-self: center;
    }
  - 使用表格布局：
    .wp {
      display: table-cell;
      text-align: center;
      vertical-align: middle;
    }
    .box {
      display: inline-block;
    }
  - 绝对定位和负边距：
    .wp {
      position: relative
    }
    .box {
      position: absolute;
      left: 50%;
      top: 50%;
      margin-left: -50px;
      margin-top: -50px;
    }
  - 绝对定位和计算属性：
    .wp {
      position: relative
    }
    .box {
      position: absolute;
      top: calc(50% - 50px);
      left: calc(50% - 50px)
    }
  - 绝对定位 + transform
    .wp {
      position: relative;
    }
    .box {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  - 绝对定位和外边距为 0：
    .wp {
      position: relative
    }
    .box {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto
    }
  - 行高等于高度
    .wp {
      line-height: 300px;
      text-align: center;
    }
    .box {
      display: inline-block;
      line-height: initial;
      text-align: left;
      vertical-align: middle;
    }

- 样式优先级
  !important 100万> 内联样式style 1000 > ID选择器#id 100> [ 类选择器.class、属性选择器[]、伪类: 10] > [ 标签选择器div、伪元素:: 1] > 全局选择器* 0
  HTML中应用CSS的三种方式: 内联样式表 > 内部样式表 = 外部样式表  
  组合选择器(空格>+~) 并集选择器, 
  组合选择器的优先级由其各个组成部分的选择器决定，而并集选择器的优先级由具有最高优先级的选择器决定。

- 重排重绘
  JavaScript > Style > Layout > Paint > Composite  
  重排：重新构建渲染树
  重绘：将重新构建的渲染树渲染到屏幕上

- 为什么JS文件建议放在body的最后，而CSS文件建议放在前面？
  - DOM树 -> CSSOM树 -> Render Tree html必须放最前面，JS会阻塞DOM树的解析，所以要放在后面，因为JS也有操纵CSS的能力，所以要放在CSS文件的后面，即JS文件建议放在body的最后。
  - 因为CSS文件不会阻塞DOM树的生成，越早开始下载，就能越早构建出CSSOM树，才能更快的渲染出内容来。

- 盒模型
  标准盒模型：width = content  
  IE盒模型：width = content + padding + border  

- BFC
  块级格式化上下文(Block Formatting Context)
  - BFC的规则:
    块级元素会在垂直方向一个接一个的排列
    垂直方向的距离由margin决定，属于同一个BFC的两个相邻的盒子margin会发生重叠
  - 怎样触发BFC:
    - 弹性布局(flex | inline-flex)
    - 网格布局(grid | inline-grid)
    - 表格布局(table | table-cell | table-caption | inline-table)
    - 定位 (absolute | fixed)
    - 浮动 (float:left|right)
    - 溢出：overflow:auto|hidden|scroll|overlay
    - 行内块：display:inline-block
  - BFC解决了什么问题:
    - 使用float脱离文档流，父容器高度塌陷
    - margin边距重叠

- vue2和vue3的区别
  - 挂载方式:
    vue3.0可以通过解构的方式拿到createApp方法，通过该方法得到app调用mount进行挂载。这也是vue3函数式编程的设计理念，这种设计方式可以按需引入资源，更好的利用tree-shaking来减小打包体积。
    vue2.0 是通过new Vue创建实例，通过参数el确定挂载的dom进行挂载，也可以不传el直接使用app.$mount('#app')。
  - 生命周期函数
    vue3中移除了beforeCreate 和 created，增加了setup函数。选项式Api与组合式Api，vue3.0采用函数式编程方式，打破了this的限制，能够更好的复用性。
  - 数据响应方式
    vue2.0是利用object.defineProperty，vue3.0是利用Proxy和Reflect。

- v-if v-show的区别
  v-show隐藏是display:none，dom元素还在；v-if隐藏是将dom元素删除。
  如果需要频繁地切换，则使用v-show；如果不需要，则使用 v-if 较好
  v-if PC登录模态框；v-show ajax搜索列表建议  

