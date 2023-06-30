- Go是现代C语言
  - C语言的编写风格
    C++面向对象 性能 更高级的写法  
  - 云时代的开发语言
  - 编译
    二进制 go build  
    运行 go run  
  - go和node相比
    go性能吊打node vite  

- CRUD
  koa gin  
  go env -w GO111MODULE=on  
  go env -w GOPROXY=https://goproxy.cn,direct  
  go env -w GOSUMDB="sum.golang.org"  
  go get -u github.com/gin-gonic/gin   
- 准备工作
  npm init -y  
  go语言有模块化系统  
    go mod init GinHello 一个项目就是一个模块GinHello  
    main.go 入口文件  
    go run main.go 运行入口文件  
    go build main.go 打包入口文件为一个二进制文件  

- gin框架跟koa类似

- go get -u github.com/gin-gonic/gin = npm install
  go的包不想npm 托管到github  

- mvc分离
  - module GinHello  
    - package 
      GinHello/router GinHello/controller

