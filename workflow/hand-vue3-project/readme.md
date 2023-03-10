# 前端工程化
[文章](https://juejin.cn/post/6921161482663100423)
- webpack 5
- vue3
- npm init -y 
    初始化项目为node 后端项目  
- npm i -g yarn
    安装全局的yarn  
- npm i webpack
    安装到当前项目 dependencies  
- yarn 
    npm的替代品，来自facebook  
    yarn -version  
    yarn add webpack -D     
    yarn add vue      
    yarn add vue-router pinia   
    yarn global add nodemon  
    yarn add -D webpack-cli  
- 工程化在代码的开发阶段
    development  代码开发  
        搭建开发阶段的脚手架  devDependencies 
        vite webpack webpack-cli babel   
        npm i html-webpack-plugin -D      
        npm i webpack -D  
        npm i -D webpack-dev-server  在webpack 编译的同时，启动web server
        npm i vue-loader -D    
        npm i style-loader -D  
        npm i css-loader -D  
        npm i stylus loader -D  
        npm i clean-webpack-plugin -D  
        npm i file-loader url-loader -D  
        npm i babel-loader -D  
        npm i @babel/core  @babel/cli @babel/preset-env -D  
        npm i @babel/polyfill -D  
        npm i core-js@3 -D  
    test 测试阶段  
    production 上线阶段  vue  

- 工程化的套件 devDependencies
    - webpack webpack-cli 5.0
    - src 代码开发目录
        main.js 入口文件  
    - index.html 首页 root挂载点
    - 如何web-server 在：8888 index.html显示
    - main.js
        createApp App.vue 跟组件
    - package.json  
        "dev": "webpack --mode=development"  启动webpack工程化，为代码开发做准备  
        webpack-cli --mode-development 命令行参数  
        npm run dev  
        webpack webpack.config.js  

- webpack 配置
    - 最基本的就是entry output 的概念  

- loader的重要概念
    - 在webpack entry到output中间
        module匹配每个规则  
        再使用相应的loader去处理的过程

- webpack-dev-server
    为了性能，把代码放在内存中  

- hash
    在dist/js中根据文件内容进行计算，得到一个唯一值，留下打包历史记录  
    为了防止浏览器的缓存，用CleanWebpackPlugin清空以前的历史记录  

- --mode=
    development 开发阶段  
    production 上线阶段  代码压缩？ http 传输文件越小越好  

- vite完胜webpack
    更快 启动快 重新编译快  
    vite使用了GO(rust)代替node编译  
    webpack生态成熟  

- babel是什么？
    JS的编译器 正因为babel,es6+大胆的使用起来  
    @babel/core babel核心库  
    @babel/cli 命令行  
    @babel/preset-env 预处理方式 preset env 按照你的当前环境来编译  