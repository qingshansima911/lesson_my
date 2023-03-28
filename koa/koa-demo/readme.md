- MVC
    - Model 数据层  
    - View 视图层  
        职责分离  MV不能直接通信  
    - Control 来负责  逻辑 参数的校验 中间计算 用户session ...
        路由 后端路由 用户从哪条路哪个method 进来，交给control
- KOA
    极简的node开发框架  
    - context = req + res  
    - 中间件  
        函数  

## 后端思维
    MVVM -> MVC  
    view html 有完整的html  + DOM( 原生js jquery)  
- 3000  
    后端安全的一部分  
    配置化  

- 洋葱模型 
    koa 提供服务和架构的本质，node服务器编程的简单  
    123456  
    - 每个函数，交给app.use调用都是中间件，middleware  
    - 每个middleware中都能拿到ctx next 等参数  
    - 按照顺序执行，从上到下  
    - 如果遇到ctx.response.body 响应
        如果不是最后一个，要给next  
        不同的用户，不同的任务，不同的中间件需求  
        数组  数据库中间件 肯定要在路由中间件前面  
    - 如果到了最后一个中间件仍然没有结束，他会沿着洋葱模型回溯执行  

- koa 路由
    1. app.js 单点路口  模块化
    2. routes 目录 定义路由  
        使用restful-api 名词 + 动词  
        /posts GET POST DELETE PATCH PUT  
    3. 路由是作为中间件 启用  
        ctx.req 请求行 http 版本号  url method  
        多个路由中间件  
        如果url method 和当前的洋葱模型执行顺序里的路由中间件匹配，进入控制器函数执行  

- koa view 层
    1. 传统的MVC
        经典的后端架构方案和设计模式  
        router ->交给 controller(数据准备，逻辑) ->调用 views(html)  
    2. ctx.render
        ctx 代表上下文环境 req + res  
        省略 response  
        ctx.render = ctx.response.render  
    3. views 目录和view层  
        配置一下  
    4. 使用ejs 模板引擎
        {{}}  
        <%= %>  
        for  
        模板编译后会完整的输出给浏览器  
        前后端分离 只有一个挂载点 vue  
        component 动态  
        - MVVM 大型项目，大公司团队协作  
            前后端分离 更适合 应用打开更快 体验更好 不用白一下   
        - 前后端分离缺点
            SEO搜索引擎极其差 只有一个#root 百度不会解析js ajax 数据  
            对于手机app里面 无所谓的体验为先  Moble First  
            掘金 csdn 搜狐 非常在乎SEO不适合  
            难道掘金就要舍弃vue 、MVVM，回归MVC吗   
            服务器端渲染的VUE Nuxt  
        - MVC 有点SEO 
        - koa-views views 中间件 挂载在app上  
            - 配置views所在  
                ctx.render 指定模板的名字  
            - 指定模板引擎 ejs pug  
                <%= %>  
            - 洋葱模型  views 中间件 功能准备中间件放在路由中间件前面  
        - ctx.render 
            模板在服务器端编译返回所有的html对SEO很友好  
                爬虫也是通过发送请求来建立内容分析  curl  
        - PC端入口在百度
        - 移动端在应用市场MVVM  

- meta viewport
    head 里面 meta通常用来丰富页面的信息和属性  
    description  描述  
    keywords 掘金，稀土，Vue.js,前端面试题,Python   
    viewport 适配 PC端不用  
    移动端 initial-scale = 1 width = device-width user-scalable = no  
    乔布斯iphone开创了移动时代，PC更多，user-scalable两个手指缩放页面  
    1024px pc -> 750 手机 很小？ 放大页面  
    现在过时了 Mobile First user-scalable = no 禁用缩放  
    缩放有时候会误操作 触发回到上一页 下一页  

- 静态资源Koa处理
    - css js image 
        - 不归路由管(逻辑，数据库，服务器内存等) 服务器集群中  
        - 前端写的绝大部分都是静态资源   webpack vite 打包到/dist  
            未来会单独放在cdn 服务器  前端缓存
    - 单独处理静态资源路由
    - http://localhost:3000/index.css
        静态服务器 + 缓存  koa-static-cache
        - / 动态服务器路由，首页  
        - / 静态服务器 静态服务器中间件放在路由前面  
            / -> 配置的 /public
        - 时间内，客户端不用再请求，http优化的重要理解  
            200 第一次  
            2.. 304 Not Modified  
            maxAge 一定会去服务器再请求，再更新  

- 登录的用户体验
    - keyup事件 enter 提交 手机 Enter 虚拟键盘  
    - 做好校验
        前端做了（用户体验，及时提醒），后端还要做（js可以被禁用，后端不信任前端传的任何东西)，为了数据安全    
        密码重复在前后端都要做 后端对数据安全负第一责任  
    
- 文件对象是html5的重大功能
    - 提供了File对象
        文件在上传到服务器之前，就可以访问本地的文件、类型、大小等  
    - 提供了FileReader对象
        异步的从硬件读取内容到内存，以url，base64 blob  
        看到图片，上传  
        文件大小比较大，用户要等很久才能上传完，如果没有交互体现正在上传的话，用户会焦虑  

- bodyParser中间件
    post请求和get请求不一样 
    get查询参数在请求行就已到位，post请求体分段传输  
    路由中间件之前要加请求体数据包收集中间件  
    bodyParser await 收集 == length next()  
    1 next() 2  

- node做后端
    优点是异步，与其他后端语言不一样的  性能好，no blocking 不阻塞  
    一台服务器，上线是同时在线5000人，服务器是并发的nginx/tomcat  
    php/Java/python  同步的 blocking 在sql请求(I/O)耗时任务中 占据线程  
    node 异步的 有event loop 在请求耗时任务中进入event loop  
    nginx/tomcat 线程就会被释放 不会阻塞 no blocking  
    省点很多服务器，支持高并发  
    java c++ 多线程  
    node 单线程 跟法师一样脆  服务器会崩 无法响应  try catch解决  
    pm2进程管理工具   
