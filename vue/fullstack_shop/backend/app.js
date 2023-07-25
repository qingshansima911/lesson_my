const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const cors = require('koa2-cors')

const index = require('./routes/index')
const users = require('./routes/users')
const carts = require('./routes/carts')
const addresses = require('./routes/addresses')
const auth = require('./middleware/auth')

app.use(cors()) //告诉浏览器不要跨域
// error handler
onerror(app)
// middlewares
app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(auth)
// public 文件夹是静态资源
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'ejs'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  // 洋葱模型
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(carts.routes(), carts.allowedMethods())
app.use(addresses.routes(), addresses.allowedMethods())

// error-handling
// app.on('error', (err, ctx) => {
//   console.error('server error', err, ctx)
// });

module.exports = app
