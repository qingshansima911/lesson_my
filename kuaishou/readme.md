- 小程序能拿到dom api吗？
    - 相对于大厂的APP，依附于他们的
        - 微信小程序， 支付宝小程序， 抖音小程序，快手小程序
    - iso/android 原生开发中 商品的详情页
        webview的控件，带url的html页面显示  
    - 为了把开发效率提升，基于webview vue等可以跨平台的应用程序
        html体验不好  
    - wxml wxss js 前端开发的体验，跨平台编译成APP能显示的小程序
    - wx. 拿到原生app的功能  
    - 拿不到dom api的

- 微信小程序的缺点？
    有学习成本  
    HBase uniapp  
    vue -> vdom -> html/小程序/原生app  
    taro  

- canvas
    小游戏/three.js  WebAR/VR  

- finally有什么用 npm i log4js  
    大型语言 try{} catch{} finally  
    不需要  
    1. 当promise失败后
    - 应用场景
    all race any allSettled finally Promise.resolve/reject   
    2. 有些应用不只是耗时
        i/o 操作要关闭文件句柄...  

- Promise then 第二个参数和catch的区别是？
    - catch  
        .then(()=>{},(reason)=>{  
  
        })  
        更简介，推荐  
