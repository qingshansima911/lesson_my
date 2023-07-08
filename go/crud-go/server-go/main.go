package main

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"gorm.io/gorm/schema"
	"strconv"
)

func main() {
	// fmt.Println("Hello, 全栈工程师")
	// 用户名:密码@tcp(ip:port)/数据库
	// 数据库连接字符串（Database Source Name）
	// 包含了数据库的类型、用户名、密码、主机地址、端口号、数据库名称
	dsn := "root:mysql@tcp(127.0.0.1:3306)/crud?charset=utf8mb4&parseTime=True&loc=Local"
	// 连接数据库  连接了模型的对应关系
	// 数据库句柄 成功 &取址符
	// 同步执行
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{
		// 解决表名复数
		NamingStrategy: schema.NamingStrategy{
			// 单数
			SingularTable: true,
		},
	})
	if err!= nil {
    fmt.Println(err)
    return
  }else{
		fmt.Println("数据库连接成功",db)
	}
	// 声明数据库变量
	sqlDB, err := db.DB()
	// 最大空闲
	sqlDB.SetMaxIdleConns(10)
	// 最大连接数
	sqlDB.SetMaxOpenConns(100)
	//10 秒超时
	sqlDB.SetConnMaxLifetime(10 * 1000)

	// type类型 struct结构体
	type List struct {
		// 模型层
		gorm.Model
		ID      uint8  `json:"id"`
		Name    string `json:"name"`
		Age     uint8  `json:"age"`
		School  string `json:"school"`
		Phone   string `json:"phone"`
		Address string `json:"address"`
	}
	// 自动迁移
	// List{} 实例化了一个List类型的对象 
	db.AutoMigrate(&List{})

	// fmt.Println("db:", db)//&{0xc000172480 <nil> 0 0xc000332000 1}
	// fmt.Println("err:", err)//Error 1049 (42000): Unknown database 'crud'
	//&{0xc000172240 <nil> 0 0xc000332000 1}  <nil> = null
	r := gin.Default()
	// r.Use(func(c *gin.Context){ //*gin.Context 类型 
	// 	c.JSON(200, gin.H{//返回的数组或对象
  //     "msg": "hello",
	// 		"code": 0,
  //   })
	// })

	// 向数据库表list中添加数据
	r.POST("/list/add",func(c *gin.Context){
		var data List
		// &data已经绑定了数据
		err := c.ShouldBindJSON(&data)
		// fmt.Print(data)
		if err!= nil {
			c.JSON(200, gin.H{
        "msg": "添加失败",
				"code": 400,
      })
      return
    }else {
			// 向数据库表list中添加数据 ORM
			db.Create(&data)
			c.JSON(200, gin.H{
				"msg": "添加成功",
        "code": 200,
      })
		}
	})
	// 向数据库表list中查找数据
	// http://localhost:8081/list/query?name=任&pageSize=2&page=2
	r.GET("/list/query",func(c *gin.Context){
    var dataList []List
		// 分页查找 从url queryString解析出来pageSize
		// strconv.Atoi()将字符串转换为整数的函数
		pageSize,_ := strconv.Atoi(c.Query("pageSize"))
		page,_ := strconv.Atoi(c.Query("page"))

		offset := (page - 1) * pageSize
		limit := pageSize
		var total int64
		name := c.Query("name")
		fmt.Printf("查询条件：%s\n", name)//任
		fmt.Printf("offset: %d\n", offset)//0
    fmt.Printf("limit: %d\n", limit)//4

		// 对List表进行操作 统计符合查询条件的记录数量，并将结果保存到total变量中
		db.Model(&List{}).Where("name LIKE ?",fmt.Sprintf("%%%s%%",name)).
		Count(&total)

		db.Model(&List{}).Where("name LIKE ?",fmt.Sprintf("%%%s%%",name)).
		Offset(offset).
		Limit(limit).
		Find(&dataList)

		if len(dataList) == 0 {
			c.JSON(200, gin.H{
        "msg": "查询失败",
        "code": 400,
				// make = new 返回一个空数组
				"data": make([]int,0),
      })
      return
    }else {
      c.JSON(200, gin.H{
        "msg": "查询成功",
        "code": 200,
				"data":dataList,
				"total":total,
      })
		}
  })
	// 删除
	r.DELETE("/list/delete/:id",func(c*gin.Context){
		var data  []List
		// 接收前端传过来的ID
		id := c.Param("id")
		// 判断ID是否存在
		db.Where("id =?",id).Find(&data)
		// ID存在则进行删除、不存在则进行报错
	if len(data)==0{
		c.JSON(200,gin.H{
			"msg":"id没有找到,删除失败",
			"code":400,
		})
	}else{
		// 操作数据库
		db.Where("id=?",id).Delete(&data)
		c.JSON(200,gin.H{
			"msg":"删除成功",
			"code":200,
		})
}

})

	PORT := "8081"
	r.Run(":" + PORT)
}
