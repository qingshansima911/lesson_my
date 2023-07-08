- 来一个crud(增删改查) 来一个框架
  gin + react + vue 

- npm init vite 
  react/vue-demo ts
  axios 跨vue/react  "axios": "1.3.4"   
  react组件库ant design  "antd": "^5.6.1"  
  vue组件库element-plus  "element-plus": "^2.3.0"  

- go hello world
  package 每个文件都要声明 作用  
  import引入模块 fmt内置模块 第三方模块  
  func main 入口函数  

- 安装 gin 
  gin类似于vue里面的koa，是一个http web框架  
  npm init -y javascript初始化为一个后端项目  
  go env -w GO111MODULE=on  启用go模块的环境变量来管理依赖和版本  
  go env -w GOPROXY=https://goproxy.io,direct go模块代理服务器  
  go env -w GOSUMDB="sum.golang.org"  go使用官方的校验和数据库服务  
  go mod init 初始化一个新的模块，创建一个新的go.mod文件，该目录为模块的根目录，里面有模块名称、依赖项、版本  
  node 包在npm上，go get -u github.com/gin-gonic/gin go的包托管在github上，安装后多一个go.sum文件   
  go get -u gorm.io/gorm 模型映射 模型抽象  
  go get -u gorm.io/gorm/schema 
  go get -u gorm.io/driver/mysql 数据库驱动  

- go语言的基础知识 rust
  - go mod init name  
  - 变量的声明
    :=  
    fmt.Println("") 格式化输出  
    es6解构一样 左侧输出多个值
  - & 取值运算符
    现代C语言  
  - go语言是同步的
  - go不用class
    首字母大写的函数是public方法 表示包内可用  

- 数据库开发要素
  - 连接
    url  
    user:password@tcp(ip)/database  
  - driver
  - schema
  - orm
  - migrate
    完成数据库和表的迁移  
  - seeds
    测试数据  