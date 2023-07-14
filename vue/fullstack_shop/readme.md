# 全栈项目及vue 考点表达

- front + backend
  1. 前后端分离  
  2. 前端使用vue + vite 全家桶单页应用开发
  3. 后端使用node + mysql 提供接口

- 如何介绍vue 项目架构
  - 使用vite + vue 全家桶开发单页应用  
    - vite 比webpack 快，不需要全部打包，vite可以按需加载，转移，执行 
      vite默认启用esm  
    - composition api + setup 语法 将雷士组件函数化，hooks编程
      更好理解，更好复用，更好tree-shaking  
  - 移动商城使用lib-flexible rem适配，assets/main.css 组织了css的模块化
    (reset 样式组件 (1px)css 变量)
  - 使用better-scroll实现移动端的滚动(性能，体验)
  - 使用axios 封装http 请求，拦截器，请求错误处理，请求loading  
  - 使用less css 预处理器，mixin，变量，嵌套等css 增强和模块化能力 
  - 使用vant ui 组件库，按需加载，减少打包体积
  - 使用three.js 数据可视化，3D 看商品

- 项目做了哪些优化
  - 按需加载vant 组件库，减少打包体积
  - tree-shaking 不用的代码不打包
  - 路由的懒加载，按需加载，减少打包体积
    原理：将需要进行懒加载的子模块打包成独立的文件（children chunk）使用ES6提供的import()；借助函数来实现延迟执行子模块的加载代码
    webpack splitChunks
  - iconfont 使用CDN 加载，未来打包后的静态资源都会发布到cdn 服务器

- 组件化介绍
  - 项目封装了HomeHeader、Footer、Header、AllTypes、GoodsList、Model 等组件，页面由组件构成，而不是标签，组件树用vue-devtools 查看
  - 组件封装的指导思想是复用和封装(为了隐藏细节，合作调用)
  - UI 组件库(vant)、通用组件(components)、路由组件(pages)、
    状态组件、无状态组件、父子组件 、共享组件、Layout 组件、Suspense(异步处理)组件、Fragment组件、Portal 组件

- 功能细节
  - css 架构
     - css 入口文件mian.css 模块化 base.css / theme.css ...
     - css 4变量，有利用复用和维护
     - 移动端IE盒模型更好打理宽高
     - app.vue 全局样式，最外侧容器水平方向不超出，垂直方向可以一直滚动，通用滑屏阅读模式
  - better-scroll 用法
    - 横向、竖向
    - 移动端优化滚动的必备组件，接近原生的android/ios 
    - 滚动容器 ref 标记
    - nextTick 实例化，配置方向和容器
    - update
  - 路由管理
    - history or hash
      原理 history.pushState popState  
    - 路由懒加载
    - useRouter useRoute hooks 函数
      router 路由管理对象 做跳转  
      route 当前路由对象 params  
    - 路由守卫
      登录校验跳转   
      页面切换特效  
  - 状态管理设计
    - 采用pinia 更简单，函数化，性能更好
    - 分离式状态，而不是全局的
    - pinia 语法老版本 类似于vuex
    - 步骤
      - defineStore 
      - 第二个参数如果是对象是vuex 写法，如果是函数是setup 写法
  - vant 组件库使用总结
    - 使用van-pull-refresh 实现下拉刷新
    - 首页幻灯片使用van-swipe  
    - van-tabbar
    - van-pull-refresh
    - van-action-bar
    - van-submit-bar
    - van-icon
    - van-form
    - van-button

- 功能设计
  - 登录 注册
  - 搜索
    - 使用van-swipe 垂直滚动搜索热词
    - 使用lazyload 防抖搜索
    - mysql like 查询返回
    - 升级到openai 接口查询
  - 首页幻灯片使用van-swipe 

- 考点
  - vuex 和pinia 的区别
    - vuex 全局共享状态
      state mutations actions getters module 
      dispatch commit 
      缺点：vuex 过于复杂，函数式编程hooks崛起
    - pinia
      pinia 是新时代的vuex
      vuex 是全局状态树，pinia 是分离式的
  - computed 和watch 的区别
    计算属性有返回值 
    监听没有返回值，监听一个或多个，执行复杂业务
  - 工程化
    webpack entry output bundle.js
    - 懒加载 
      bundle.js(小了) + chunks(n个，异步加载)  
      optimization: {
        splitChunks: {
          chunks: 'all'
        }
      }

