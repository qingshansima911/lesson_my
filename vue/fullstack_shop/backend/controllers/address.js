const addressService = require('../services/address');
exports.handleAddressList = async (ctx) => {
  const { username } = ctx.params
  // console.log(username);
  try {
    const result = await addressService.addressList(username)
    // console.log(result);
    if (result.length) {
      ctx.body = {
        code: '80000',
        data: result,
        msg: '地址数据获取成功'
      }
    } else {
      ctx.body = {
        code: '80004',
        data: 'null',
        msg: '去设置一个地址吧！'
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
exports.handleDefaultModify = async (ctx) => {
  const { isDefault, id } = ctx.request.body
  await addressService.defaultModify(isDefault, id).then(res => {
    // console.log(res);
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
}
exports.handleDefaultFind = async (ctx) => {
  const result = await addressService.defaultFind()
  if (result.length) {
    ctx.body = {
      code: '80000',
      data: result,
      msg: '默认地址数据获取成功'
    }
  } else {
    ctx.body = {
      code: '80004',
      data: 'null',
      msg: '去设置一个地址吧！'
    }
  }
}
exports.handleAddressAdd = async (ctx) => {
  let { id, username, name, tel, address, isDefault } = ctx.request.body
  try {
    await addressService.addressAdd([id, username, name, tel, address, isDefault])
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
  } catch (error) {
    ctx.body = {
      code: '80002',
      data: error,
      msg: '服务器异常'
    }
  }
}
exports.handleAddressFind = async (ctx) => {
  const { id } = ctx.params
  const result = await addressService.addressFind(id)
  if (result.length) {
    ctx.body = {
      code: '80000',
      data: result,
      msg: '地址数据获取成功'
    }
  } else {
    ctx.body = {
      code: '80004',
      data: 'null',
      msg: '没有此地址！'
    }
  }
}
exports.handleAddressModify = async (ctx) => {
  const { name, tel, address, id } = ctx.request.body
  await addressService.addressModify(name, tel, address, id)
    .then(res => {
      // console.log(res);
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
}
exports.removeAddress = async (ctx) => {
  const { id } = ctx.params
  // console.log(id);
  await addressService.addressDelete(id).then(res => {
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
}