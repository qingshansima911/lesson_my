package router 

import (
	"github.com/gin-gonic/gin"
	"GinHello/controllers"
)

// go语言不太容易class 面向对象
// 要public函数就要大写
// 返回值 * 指针
// gin.Engine = App
func InitRouter()*gin.Engine {
	router := gin.Default()//默认web引擎
	// resful 配置路由
	router.GET("/", controller.ShowIndex)
	return router //返回引擎
}