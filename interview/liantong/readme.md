# 中国联通 

- 脸皮厚
    早期面试， 心里障碍 面试官当一般朋友， 平等交流    
    - 面试准备 
        1. 无准备面试 
            暴露出来， 针对性复习   
            录音    
        2. 结束面试后， 马上记题目 复盘  
        3. 继续投继续面  
            多平台 多投递    

-  项目的亮点和难点？ 90%+  
    准备  
    - 技术栈    
        1. 全家桶 vue-router启用了组件懒加载， 路由守卫， 实现了jwt的登录全流程  
        2. 使用了pinia或vuex 数据流管理， 将应用开发分为数据管理和界面开发两部分  
        3. 组件化思维，按页面组件，通用组件， 父子组件， 来模块化开发
            按需使用了vant组件库  
        4. 全面使用composition api + hooks 函数式编程。 自定义了
            useLocation useRequest   
        5. 结合路由守卫和transition 组件 实现了页面切换动画
        6. 使用lodash 在搜索界面节流搜索， 之后升级为useDeboumce hooks 实现
        7. 基于弹性布局， 每列的高度计算， 将数据绑定先算好， 完成瀑布流效果的开发
        8. betterscroll 实现丝滑滚动 
        9. axios 拦截器， 请求拦截添加token 到header authorization
            响应拦截解除data， 和做错误处理  
        10. mockjs 请求模拟 使用了较复杂的Mock. Random()
            随机生成图片，标题  
        11. 使用了fiexible 移动端 rem 适配
    难点：   
    介绍在项目实现中遇到的技术难点和如何应对  
    - 瀑布流  
        数据绑定，高度计算，mockjs高度和图片   
    - stylus mixin混合的使用、
        1px  wh  jwt登录 jsonwebtoken  pinia 模块化 状态设计  ts 功能   node mvc    
        -  v-if和v-show是Vue.js框架中常用的两个指令，用于控制元素的显示和隐藏。它们的区别如下：
            - v-if指令
                1. v-if指令在渲染时是否出现在DOM中是根据表达式的真假值来决定的。如果表达式的值为真，则该指令所在的元素会渲染到DOM中，否则该元素将不被渲染。
                2. 使用v-if指令的优点是，减少了不必要的DOM操作。当表达式的值为假时，该元素不会被渲染到DOM中，可以减少页面的加载时间和内存占用。
                3. 缺点是，在页面中频繁地切换v-if指令所在元素的显示状态时，可能会导致Vue.js重复创建和销毁组件实例，造成不必要的性能损失。
            - v-show指令
                1. v-show指令也用于控制元素的显示和隐藏，但是它不同于v-if。无论表达式的值是真还是假，该指令所在的元素都会被渲染到DOM中，只是通过设置元素的display属性来控制元素的隐藏和显示。
                2. 使用v-show指令的优点是，不会重复创建和销毁组件实例，性能相对于v-if指令更好，而且在频繁切换元素的显示状态时，也不会影响到DOM的渲染。
                3. 缺点是，由于元素始终存在于DOM中，无论表达式的真假，因此可能会占用一定的内存空间。

    - 鉴权
        理清思路 条理清晰  请教面试官  
        1. 在路由配置数组中， 使用meta 对象配置是否需要登录，还有角色，
            - 登录 isLogin boolean 没有登陆， 去到这个页面， redirect 到login
            - 角色 role 数值型1/2/? 未来根据用户角色拥有的权限数组是否包含该值，看是否要forbidden403
        2. 配置路由守卫
            每次路由的切换， 都会执行beforeEach钩子函数    
            三个参数 to from next  如果不需要鉴权 next 放行  
            to 也就是 路由对象，表示要去到的地址， 读取meta 里的isLogin 或 role 属性做相应判断，或是需要登录，没登录就304 redirect 到login  
            当前role 没有to 的访问权限送去首页 或显示403 forbidden  
        3.  axios 请求拦截 判断当前localStorage中是否有token
            有就在header中Authorization字段 值为token   
        4. 后端鉴权
            分cookie/session  通过cookie 拿到session 缺点不安全 session内存中的对象，session中间件帮我们做 ctx.session 上下文   
            jwt 解析前端请求中的Authorization头， jwt decode拿到currentUser对象 在任何需要前端的路由控制器中间件浅加上鉴权auth 中间件  
            如果没有， 就返回403 如或有， 返回json 数据  
            router.post('/post',auth,postsController.add)  

                