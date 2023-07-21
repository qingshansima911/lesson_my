const cartService = require('../services/cart');

exports.handleCartList = async (ctx) => {
  const { username } = ctx.request.body
  console.log(username);
  try {
    const result = await cartService.cartList(username)
    // console.log(result);
    if (result.length) {
      ctx.body = {
        code: '80000',
        data: result,
        msg: '购物车数据获取成功'
      }
    } else {
      ctx.body = {
        code: '80004',
        data: 'null',
        msg: '购物车是空的，去逛逛吧'
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
exports.handleCartAdd = async (ctx) => {
  let { id, username, name, price, max, min, shop, address, guarantee, imgUrl, num } = ctx.request.body
  // console.log(username);
  //判断该商品是否在cart数据库中存在
  try {
    let findres = await cartService.cartFind(id, username)
    if (findres.length) {  //如找到数据则向前端报错
      await cartService.numAdd(id).then(res => {
        // console.log(res);
        if (res.affectedRows !== 0) {
          ctx.body = {
            code: '80000',
            data: 'success',
            msg: '商品已在购物车！'
          }
        } else {
          ctx.body = {
            code: '80004',
            data: 'error',
            msg: '添加失败！'
          }
        }
      })
    } else {  //如没找到则添加成功，往数据库添加这条数据
      await cartService.cartAdd([id, username, name, price, max, min, shop, address, guarantee, imgUrl, num = min])
        .then(res => {
          // console.log(res);
          if (res.affectedRows !== 0) {
            ctx.body = {
              code: '80000',
              data: 'success',
              msg: '添加成功！'
            }
          } else {
            ctx.body = {
              code: '80004',
              data: 'error',
              msg: '添加失败！'
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
}
exports.handleCartModify = async (ctx) => {
  const { num, id, username } = ctx.request.body
  // console.log(num, id, username);
  try {
    await cartService.cartModify(num, id, username).then(res => {
      // console.log(res);4
      if (res.affectedRows !== 0) {
        ctx.body = {
          code: '80000',
          data: 'success',
          msg: '修改成功！'
        }
      } else {
        ctx.body = {
          code: '80004',
          data: 'error',
          msg: '修改失败！'
        }
      }
    })
  } catch (error) {
    ctx.body = {
      code: '80002',
      data: error,
      msg: '服务器异常'
    }
  }
}
exports.handleCartDelete = async (ctx) => {
  const { id, username } = ctx.request.body
  try {
    await cartService.cartDelete(id, username).then(res => {
      // console.log(res);
      if (res.affectedRows !== 0) {
        ctx.body = {
          code: '80000',
          data: 'success',
          msg: '删除成功！'
        }
      } else {
        ctx.body = {
          code: '80004',
          data: 'error',
          msg: '删除失败！'
        }
      }
    })
  } catch (error) {
    ctx.body = {
      code: '80002',
      data: error,
      msg: '服务器异常'
    }
  }
}
exports.handleCartFind = async (ctx) => {
  const { id, username } = ctx.request.body
  try {
    let result = await cartService.cartFind(id, username)
    if (result.length) {
      ctx.body = {
        code: '80000',
        data: result,
        msg: '商品数据获取成功'
      }
    } else {
      ctx.body = {
        code: '80004',
        data: 'null',
        msg: '无此商品'
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