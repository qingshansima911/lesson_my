// http 服务
// 提供 /banners 路由服务
// js 宿主环境 browser document
// node linux 命令行 http
// node 后端开发太快了 中小型项目开发 弱类型 不太壮， 单线程（简单）
// require 模块化 commonjs 老点
// import from '' es6模块化
const http = require("http"); //node js 在后端的实现
const { indexOf } = require("lodash");
// web server
// 一个网站其实就是一个web server 单例
// 当有用户请求的时候 req
// 回调函数就会运行
// res 响应用户的请求， 结束
const server = http.createServer(function (req, res) {
    console.log(req.url, '//////');
    // req.url  == "/banners"
    if (req.url == '/banners') {
        const data = {
            "data": [
                {
                    "id": 1,
                    "pic": "https://ts1.cn.mm.bing.net/th?id=ORMS.5f001e8663d19da5d186539120c46fc2&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1&p=0"
                },
                {
                    "id": 2,
                    "pic": "https://ts1.cn.mm.bing.net/th?id=ORMS.955e92bb70e1f032c83b37d6dbe9694a&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1&p=0"
                },
                {
                    "id": 3,
                    "pic": "https://ts1.cn.mm.bing.net/th?id=ORMS.9d7630de94aff27ee1ba6184482e2401&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1&p=0"
                }
            ]
        }
        res.end(JSON.stringify(data));
    } else if (req.url.indexOf('/detail') >= 0) {
        // detail
        const data = {
            "id": 1,
            "title": "百度胡总面试之旅",
            "desc": "五个月，冲击毕业前大厂就业。"
        }
        res.setHead('Content-Type','application/json;charset=utf-8');
        res.end(JSON.stringify(data));
    }
})// web 服务
server.listen(3000)  