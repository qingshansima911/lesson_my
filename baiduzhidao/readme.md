- baiduzhidao  
  - server 
    - npm init -y 初始化为后端项目  
    - 创建tsconfig.json文件 复制代码   
    - npm i 安装node_modules包  
      - src  
        - main.ts    
    - 启动后端1314端口服务器  
      - package.json中 "start": "tsc-watch --onSuccess \"node dist/main.js\""  
      - npm install tsc-watch --save-dev 安装tsc-watch 它是一个用于在TypeScript项目中进行自动编译和监视的工具。    
      - 在main.ts里面使用koa框架启动后端接口  
      - npm start进入伺服状态  
    - 设置公共前缀 /api/v1    
    - 在main.ts中添加其他中间件  
      静态服务器中间件staticServer、错误处理中间件、跨域中间件cors、解析post请求体中间件bodyParser   
      npm i koa-static koa-cors  
      npm i koa-bodyparser @types/koa-bodyparser --save-dev  
    - 连接mongodb数据库  
      dependencies里面添加旧版本的  "mongoose": "^5.7.5"  npm i     
      - 什么是mongoose和mongodb  
        MongoDB 是一个独立的数据库管理系统，而 Mongoose 是用于在 Node.js 中与 MongoDB 进行交互的工具和库。Mongoose 提供了对 MongoDB 数据库的抽象和封装，使开发人员能够更轻松地定义数据模型、执行查询和操作数据。  
    - 用MVC模式在mongodb中对users进行增删改查操作  
      - main.ts中增加user用户路由  
      - router  
        user.ts中配置路由接口    
      - controller  
        userController.ts编写增删改查函数    
        User.findByIdAndDelete().findById().find()  user.save()    
      - model  
        user.ts定义模式Schema({})和模型model()  
    - 用MVC模式在mongodb中对squareAnswer进行users,squareComments collection的联合查询
      


      
      
      
