package controller 

import (
	"github.com/gin-gonic/gin"
	"net/http"//引入内置的http模块
)

func ShowIndex(context *gin.Context) {
	context.String(http.StatusOK, "hello ginssss")
}