# 前端工程化

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
           