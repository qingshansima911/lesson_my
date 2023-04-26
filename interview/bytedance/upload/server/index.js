const http = require('http')

const server = http.createServer();
// on eventEmitter实例(事件发射器)
server.on('request', async (req, res) => {
    // cors跨域方案， cors库
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', '*')
    // 与HEAD类似 客户端查看服务器端的性能等指标
    // POST Ajax跨域 OPTIONS 
    if (req.method === 'OPTIONS') {
        res.status = 200;
        res.end();
        return
    }
    res.end('hello world')
    // 1. post data 2. 文件上传
})
server.listen(8888, () => console.log('listen port 8888'))