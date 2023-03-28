const WebSocket = require('ws') // 基于tcp/ip 
// const http = require('http') // node 内置的
// 在某个端口启动的程序
// ip定位服务器 ：3000 (某个金恒 -> 某个程序)
const wss = new WebSocket.Server({
    port: 3000
})
var arr = []
wss.on('connection', (ws) => {
    // console.log(ws);
    ws.on('message', (message) => {
        console.log(message,'???????'); // 前端发送来的json信息
        let msgData = JSON.parse(message)
        // console.log(msgData, '/////'); // 拿到信息
        arr.push(msgData)
        // console.log(arr);
        wss.clients.forEach(client => {
            client.send(message) // 发送回前端 双向通信
        })
    })
})