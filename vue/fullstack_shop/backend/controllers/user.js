const userService = require('../services/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.handleRegister = async (ctx) => {
  const { username, password } = ctx.request.body;
  // console.log(username, password)
  if (!username || !password) {
    ctx.body = {
      code: '80001',
      msg: '用户名或密码不能为空'
    }
    return
  }
  try {
    let finder = await userService.findUser(username);
    if (finder.length) {
      ctx.body = {
        code: '80003',
        data: 'error',
        msg: '用户已存在'
      }
    } else {
      const saltRounds = 10;
      // 对密码进行加密
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      // console.log(hashedPassword);
      const res = await userService.userRegister([username, hashedPassword]);
      // 创建新用户
      if (res.affectedRows !== 0) {
        ctx.body = {
          code: '80000',
          data: 'success',
          msg: '注册成功'
        }
      } else {
        ctx.body = {
          code: '80002',
          data: 'error',
          msg: '注册失败'
        }
      }
    }
  } catch (err) {
    ctx.body = {
      code: '80002',
      data: err,
      msg: '服务器错误'
    }
  }
}

exports.handleLogin = async (ctx) => {
  // console.log(ctx.request.body);
  const { username, password } = ctx.request.body
  //去读取数据库中的users表，判断读取到的值和前端传过来的值是否匹配
  try {
    // 验证密码
    const result = await userService.userLogin(username)
    // console.log(result);
    // console.log(result[0].password);
    const passwordMatch = await bcrypt.compare(password, result[0].password);
    console.log(passwordMatch);
    if (passwordMatch) {
      const token = jwt.sign({ id: result[0].id, username: result[0].username }, 'your-secret-key', {
        expiresIn: '1d',
      });
      let data = {
        id: result[0].id,
        username: result[0].username,
        token: token
      }
      // let data = {...result}
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
}
