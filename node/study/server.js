const http = require('http')
const url = require('url')
const server = http.createServer((req, res) => {
    const reqUrl = req.url
    let query = JSON.stringify(url.parse(reqUrl, true).query);
    obj = JSON.parse(query);
    console.log(obj.username, obj.password);
    res.writeHead(200, { 'Content-Type': 'text/html;charset=utf8' })
    res.end('用户名' + obj.username + '密码' + obj.password)
})
server.listen(8080)