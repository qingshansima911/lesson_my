- ts -> js才能运行
    npm i typescript tsc-watch --save-dev  
    typescript tsc   tsc-watch 热更新  
    npm i @types/node --save-dev  
    tsconfig.json exclude target  
    npm i @types/express 类型声明文件  

- 新的架构
- dotenv 解决安全
    - 敏感信息放在.env中
    - dotenv.config()
        node 操作系统  
    - process.env解出来
    - .gitignore .env不上传
    - 在信得过的同事间共享