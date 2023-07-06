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
- 重绘重排
- 盒模型
- BFC
- 两个盒子margin 100,怎么让他们之间的间距为200
- vue2和vue3的区别
- v-if v-show区别