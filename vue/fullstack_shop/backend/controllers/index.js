const goods = require('../data/goods.js')
const allTypeGoods = require('../data/allTypesGoods.js')

//首页点击导航栏不同种类获取商品数据
exports.handleType = async (ctx) => {
  ctx.body = {
    code: '80000',
    message: '获取商品数据成功',
    data: allTypeGoods
  }
}
//首页商品数据
exports.handleGoodsList = async (ctx) => {
  ctx.body = {
    code: '80000',
    message: '获取商品数据成功',
    data: goods
  }
}
//商品详情数据
exports.handleProductDetail = async (ctx) => {
  console.log(ctx.params.id);
  const idx = parseInt(ctx.params.id)  //获取前端传过来的id
  const typeidx = parseInt(ctx.params.typeId)

  //推荐商品
  const product = goods.goodsList.find(item => item.id === idx) //查找id为前端传过来的id的那条数据
  const product1 = goods.goodsList1.find(item => item.id === idx)

  //不同种类的商品
  const product2 = (allTypeGoods.find(item => item.id === typeidx)).goods.filter(items => items.id === idx)
  const product3 = (allTypeGoods.find(item => item.id === typeidx)).goods1.filter(items => items.id === idx)

  ctx.body = {
    code: '80000',
    message: '获取单条商品数据成功',
    data: product || product1 || product2[0] || product3[0]
  }
  // console.log(ctx.body.data);
}
// 寻找商品
exports.handleGoodsFind = async (ctx) => {
  const searchTitle = ctx.params.title
  // console.log(searchTitle);
  let result = []
  let result1 = []
  allTypeGoods.forEach((type, index) => {
    type.goods.forEach(goods => {
      if (goods.name.includes(searchTitle)) {
        result.push(goods)
        goods.typeId = index
      }
    })
    type.goods1.forEach(goods1 => {
      if (goods1.name.includes(searchTitle)) {
        result.push(goods1)
        goods1.typeId = index
      }
    })
  })
  result1 = result.slice(0, result.length / 2)
  result.splice(0, result.length / 2)
  ctx.body = {
    code: '80000',
    message: '获取商品数据成功',
    data: [result, result1]
  }
}