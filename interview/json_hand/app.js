const express = require('express')  // 简单的node服务器开发框架 koa的爸爸
const app = express()

// const cors = require('cors') // cors的封装
// let whiteList = ['http://127.0.0.1:5500', 'http://localhost:5500']
// // 解决跨域
// app.use(cors({
//     origin: function (origin, callback) {
//         if (whiteList.indexOf(origin) !== -1) {
//             callback(null, true)
//         } else {
//             callback(new Error('Not allowed by CORS'))
//         }
//     }
// })) 

// let whiteList = ['http://127.0.0.1:5500']
// 中间件 node在所有的请求和响应中间加上的功能
// app.use((req, res, next) => {
//     // 哪些跨域请求通过 请求头
//     let origin = req.headers.origin
//     // console.log(origin);
//     if (whiteList.includes(origin)) {
//         // 设置响应头
//         // 告诉用户浏览器使用utf-8来显示
//         res.setHeader('Content-Type', 'text/json;charset=utf-8',) 
//         res.setHeader('Access-Control-Allow-Origin', origin) // 解决跨域
//         res.setHeader('Access-Control-Allow-Methods', 'GET,POST')
//         res.setHeader('Access-Control-Allow-Credential', true)
//     }
//     next()
// })

app.get('/say', (req, res) => {
    // console.log(req.query);
    let callback = req.query.callback || 'callback'
    // console.log(callback);
    let obj = {
        name: '况总',
        spec: '家里有矿，有水塘'
    }
    // res.end(JSON.stringify(obj))
    res.send(`${callback}(${JSON.stringify(obj)})`)
})
app.get('/other', (req, res) => {
    let obj = {
        name: '胡总',
        spec: '来包池子'
    }
    res.end(JSON.stringify(obj))
})
app.listen(3000)
