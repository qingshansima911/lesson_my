const Koa = require('koa'); // node 里的框架 npm i koa commonjs 模块
const router = require('koa-router')(); // npm i koa-router
const app = new Koa();  // 拿到服务器端应用
router.get('/login', async (ctx) => {
    // 伺服状态，怎么响应用户请求 respense
    // ctx 本次服务的上下文环境对象 = request + response
    ctx.body = {
        msg:'hello,login'
    }
}) // 后端的登录页面 传统的web网站开发
app.listen(8080, ()=>{
    console.log('server is running 8080');
})
