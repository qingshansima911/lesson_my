const router = require('koa-router')()
//引入抛出的对象里的方法
const userService = require('../controllers/mySqlController.js')

router.prefix('/users')

//登录接口
router.post('/login', async (ctx, next) => {
  console.log(ctx.request.body);
  const { username, password } = ctx.request.body
  //去读取数据库中的users表，判断读取到的值和前端传过来的值是否匹配
  try {
    const result = await userService.userLogin(username, password)
    console.log(result);
    if (result.length) {
      let data = {
        id: result[0].id,
        username: result[0].username
      }
      ctx.body = {
        code: '80000',
        data: data,
        msg: '登陆成功'
      }
    } else {
      ctx.body = {
        code: '80004',
        data: 'error',
        msg: '账号或密码错误'
      }
    }
  } catch (error) {
    ctx.body = {
      code: '80002',
      data: error,
      msg: '服务器异常'
    }
  }
})

//注册接口
router.post('/register', async (ctx, next) => {
  const { username, password } = ctx.request.body
  //判断账号或密码是否为空
  if (!username || !password) {
    ctx.body = {
      code: '80001',
      msg: '账号或密码不能为空'
    }
    return
  }
  //判断该账号是否在数据库中存在
  try {
    let findres = await userService.userfind(username)
    if (findres.length) {  //如找到数据则向前端报错
      ctx.body = {
        code: '80003',
        data: 'error',
        msg: '用户名已存在！'
      }
    } else {  //如没找到则注册成功，往数据库添加这条数据
      await userService.userRegister([username, password])
        .then(res => {
          // console.log(res);
          if (res.affectedRows !== 0) {
            ctx.body = {
              code: '80000',
              data: 'success',
              msg: '注册成功！'
            }
          } else {
            ctx.body = {
              code: '80004',
              data: 'error',
              msg: '注册失败！'
            }
          }
        })
    }
  } catch (error) {
    ctx.body = {
      code: '80002',
      data: error,
      msg: '服务器异常'
    }
  }
})
module.exports = router
