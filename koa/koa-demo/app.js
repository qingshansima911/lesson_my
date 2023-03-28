const config = require('./config/default.js')
const Koa = require('koa')
const app = new Koa()
// mvc 注册signup路由
const signupRouter = require('./routers/signup.js')
const postsRouter = require('./routers/posts.js')

const views = require('koa-views')
const path = require('path')
const staticCache = require('koa-static-cache')
const bodyParser = require('koa-bodyparser')

app.use(views(path.join(__dirname, './views'), {
    extension: 'ejs'
}))
app.use(staticCache(path.join(__dirname, './public'), { dynamic: true }, {
    maxAge: 15*24*60*60
}))
app.use(bodyParser({
    formLimit: '1mb'
}))
// 洋葱模型
// 中间件为其服务 餐厅
// blog 网站 复杂事情
// 一个函数解决一个事情
// app.use((ctx,next) => { // 服务员
//     console.log(1);
//     next() // compose
//     // 向下传
//     // ctx.response.body = 'hello'
//     console.log(6);
// })
// app.use((ctx,next) => { // 厨师
//     console.log(2);
//     next()
//     console.log(5);
// })
// app.use((ctx,next) => { // 经理
//     console.log(3);
//     ctx.response.body = 'hello'
//     next()
//     console.log(4);
// })


// 如何记录一个请求所花时间
// 第一个 计时开始
// app.use(async(ctx,next) => {
//     console.log('中间件1');
//     const start = new Date().getTime()
//     await next()
//     const end = new Date().getTime()
//     console.log('请求所花时间为',end - start,'ms');
// })
// app.use(async(ctx,next) => {
//     console.log('中间件2');
//     const data = await getData()
//     ctx.body = { data }
// })
// const getData = async () => {
//     await new Promise((resolve) => {
//         setTimeout(() => {
//             resolve()
//         }, 1000);
//     })
// }

app.use(signupRouter.routes()) // koa-router 会next()
app.use(postsRouter.routes())
app.listen(config.port)
console.log(`listen on port ${config.port}`);