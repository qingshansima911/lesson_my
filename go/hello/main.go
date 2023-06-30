// 入口文件
package main

import (
	"fmt"
	"GinHello/router"
	"log"
)

// 入口函数
func main() {
	fmt.Println("Hello World!")
	// 声明变量的方式 声明的同时赋值:=
	router := router.InitRouter()
	err := router.Run() //启动服务器
	if err != nil { // nil = null
    log.Fatalln("gin run error", err)
  }
}