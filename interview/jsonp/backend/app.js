let express = require('express')
let app = express() // 后端应用APP

// 添加路由
// HTTP是个简单协议，基于TCP/IP 基于请求响应
// 使用上网代理(浏览器)，输入地址 http://localhost:3000/say
// 请求行 get http://localhost:3000/say 1.1
// 请求头 cookie Authorization
// 后端放水
// let whiteList = ['http://127.0.0.1:5500']
// app.use((req, res, next) => {
//     let origin = req.headers.origin
//     // console.log(origin,'||||||||');
//     // 哪些跨域请求通过
//     // console.log('中间件'); origin 不太了解 *所有都通过
//     // res.setHeader('Access-Control-Allow-Origin', '*')
//     if (whiteList.includes(origin)) {
//         res.setHeader('Access-Control-Allow-Origin', origin)
//         // 不能删改：DEL PUT整个替换 PATCH部分修改 
//         // Restful 一切皆资源 请求资源时候，使用相应的请求方法
//         res.setHeader('Access-Control-Allow-Methods', 'GET,POST')
//         res.setHeader('Access-Control-Allow-Credential', true)
//     }
//     next()
// }) // 使用中间件

app.get('/say', function (req, res) {
    let jsonData = {
        name: '蔡总',
        favor: ['喝酒', '泡吧']
    }
    // 修改响应头 解决乱码问题
    res.setHeader('Content-Type', 'text/json;charset=utf-8',)
    // res.end('hello')
    // res.send(JSON.stringify(jsonData))
    // JSONP格式
    res.send('callback(' + JSON.stringify(jsonData) + ')')
})

app.listen(3002)