import Koa from 'koa';
import Router from 'koa-router';
import staticServer from 'koa-static';
import cors from 'koa-cors';
import bodyParser from 'koa-bodyparser';
import mongoose from 'mongoose';
import userRouter from './router/user';
import square from './router/square';
import emotion from './router/emotion';
import squareAnswer from './router/squareAnswer';
import squareComment from './router/squareComment';

// 创建Koa实例
const app = new Koa();

// 创建一个路由实例 并设置公共前缀
const router = new Router({
  prefix: '/api/v1',
});

// 静态服务器中间件 将public文件夹中的文件作为静态资源提供给客户端
app.use(staticServer('public'));

// 跨域中间件
app.use(cors());

// 解析post请求体中间件
app.use(bodyParser());

//连接mongodb 自动创建baiduzhidao数据库
mongoose.connect('mongodb://127.0.0.1:27017/baiduzhidao',
  { useNewUrlParser: true, useUnifiedTopology: true, })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

//添加其他路由器对象
router.use(userRouter.routes());
router.use(square.routes());
router.use(emotion.routes());
router.use(squareAnswer.routes());
router.use(squareComment.routes());

// 将路由注册到应用中间件
app.use(router.routes()); //主路由对象
app.use(router.allowedMethods());

// 添加错误处理中间件
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = 500;
    ctx.body = { error: 'Internal Server Error' };
    // 在这里可以记录错误日志或执行其他错误处理逻辑
  }
});

// 启动服务器
const port = 1314;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
