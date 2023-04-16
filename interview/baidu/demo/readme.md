# 百度的前端基础一面
[掘金文章](https://juejin.cn/post/7178783712363708475)  
- 扎实的基础  
- 场景题    
- 灵活理解  
- 底层思想 一直问  
- 面试是当面展示自己    
- 表达逻辑  1 2 3 4 首先 其次  
- 留坑  无形  

- 扎实的前端基础  
    1. 新手引导功能实现  
        实战能力，面向对象 代码   
        html + css + js 原生开发能力  
    2. 添加遮罩层，在图片上方添加一张只有人脸的照片  
        css position 居中
    3. echarts 动画实现原理
        canvas / svg  
        requestAnimationFrame  + canvas的绘图API  
        黑板擦  
        svg dom编程  
    4. 了解canvas吗？
        html5绘图标签，有丰富的绘制api，游戏、数据可视化、AR/VR/WebGL方向的利器  
        WebGL？ 3D方向  
        - echarts 数据可视化 折线图那些  
        vue后台管理系统  
        - canvas绘图API结合requestAnimation手写饼状图什么的，但由于事件，去搞vue node算法  
        - html5 file处理上传头像中 canvas图片压缩和剪裁  
    5. 如何实现组件滑动切换效果？
        - vue内置了transition组件
        - v-if v-show组件的切换
        - 移动端的事件 pinch + tap hammer.js
        - name给我们css的钩子和事件的钩子  wave  
        wave-enter-active wave-enter-to   
        wave-leave-active wave-leave-to   
    6. 语义化的理解
        - html5有一些语义化标签
            header footer main aside nav section article  
        - SEO友好 百度的排名 
            #root MVC template + data ssr  
            SPA 前端render  
        - 代码的可读性
    7. less、stylus多出用到px转换为vw如何实现
        - 兼容性的复用
            1. 公司的设计稿 iphone 375pt 750px  蓝湖 前端设计稿
            2. mixin
                pxToVW($px, $attr=width)
                    $vw=($px / 750) * 100
                    $attr {$vw}vw
                .box {
                    pxToVW(150, height)
                }
    8. vue-router中router和route的区别
        如何让面试官开心？ 埋坑  面试是当面展示自己
        激情、谦虚、好学、心理素质好  
        router是前端路由管理对象
        route是当前路由对象  
        router push等跳转操作  
            路由守卫 meta isLogin  
        route 取params qs等参数
    9. vue单页应用无刷新更新组件怎么实现
        - vue-router routes数组配置单页应用
        - app.use(router)启用路由
        - vue router-view组件
            path -> 页面级别组件 显示到router-view中
        - 当点击a标签切换路由时，原组件卸载，匹配新路径的页面级别组件显示在router-view
            ```js
            <Component is={component}>  
            <router-view v-slot="{Component}">
                <component :is="Component"/>
            <router-view>
            ```
        - hashChange(#兼容)和history(后端路由一样好理解)两种模式不需要刷新
            IE时代已经过去了 PC兼容  
    10. vue在页面中如何监听回到上一页的操作
        ```js
        mounted() {
            // DOM ready 事件监听
            // 浏览器嗅探 history api 
            if(window.history && window.history.pushState) {
                // 当前路由入栈
                history.pushState(null, null, document.URL);
                window.addEventListener('popstate', this.goBack, false)
            }
        }
        ```