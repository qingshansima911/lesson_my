//让node能连接上mysql
const mysql = require('mysql'); //引入安装的mysql插件
const config = require('../config/mySqlConfig.js'); //引入抛出的mysql配置

//创建线程池 把配置给到线程池去登录我的mysql软件
const pool = mysql.createPool({
  host: config.database.HOST,
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATABASE,
  port: config.database.PORT
})

//连接数据库，执行sql语句
const allService = {
  query: function (sql, values) {
    return new Promise((resolve, reject) => {
      pool.getConnection((err, connection) => { //连接数据库
        if (err) { //连接失败
          reject(err);
        }
        else {  //连接成功
          connection.query(sql, values, (err, rows) => { //执行sql语句
            // console.log('连接成功');
            if (err) {//sql语句执行失败
              reject(err);
            }
            else {  //sql语句执行成功
              resolve(rows)
            }
            connection.release() //断开连接
          })
        }
      })
    })
  }
}

//登录
const userLogin = (username, password) => {
  let _sql = `select * from users where username="${username}" and password="${password}";`
  return allService.query(_sql)
}

//查询用户账号是否存在
const userfind = (username) => {
  let _sql = `select * from users where username="${username}";`
  return allService.query(_sql)
}

//注册
const userRegister = (values) => {
  let _sql = `insert into users set username=?,password=?;`
  return allService.query(_sql, values)
}

//根据用户名查找用户 根据用户名查找此用户购物车的数据 
const cartList = (username) => {
  let _sql = `select * from cart where username="${username}";`
  return allService.query(_sql)
}

//在cart中查找商品id为多少的那一项以便添加数据
const cartFind = (id) => {
  let _sql = `select * from cart where id="${id}";`
  return allService.query(_sql)
}

//添加前如存在此商品则让num加一并存入数据库
const numAdd = (id) => {
  let _sql = `update cart set num=num+1 where id="${id}";`
  return allService.query(_sql)
}

//在cart中添加一条数据
const cartAdd = (values) => {
  let _sql = `insert into cart set id=?,username=?,name=?,price=?,max=?,min=?,shop=?,address=?,guarantee=?,imgUrl=?,num=?;`
  return allService.query(_sql, values)
}

//在购物车页面增加或减少商品数量数据库中的cart表的num字段也需修改
const cartModify = (num, id) => {
  let _sql = `update cart set num="${num}" where id="${id}";`
  return allService.query(_sql)
}

//购物车数据删除
const cartDelete = (id) => {
  let _sql = `delete from cart where id="${id}";`
  return allService.query(_sql)
}

//获取用户地址列表
const addressList = (username) => {
  let _sql = `select * from address where username="${username}";`
  return allService.query(_sql)
}

//修改默认地址
const defaultModify = (isDefault, id) => {
  let _sql = `update address set isDefault="${isDefault}" where id="${id}";`
  return allService.query(_sql)
}

//根据isDefault是否为1查询默认地址的那条数据
const defaultFind = () => {
  let _sql = `select * from address where isDefault=1;`
  return allService.query(_sql)
}

//在address中添加一条数据
const addressAdd = (values) => {
  let _sql = `insert into address set id=?,username=?,name=?,tel=?,address=?,isDefault=?;`
  return allService.query(_sql, values)
}

//根据id查询地址
const addressFind = (id) => {
  let _sql = `select * from address where id="${id}";`
  return allService.query(_sql)
}

//修改地址信息
const addressModify = (name, tel, address, id) => {
  let _sql = `update address set name="${name}",tel="${tel}",address="${address}" where id="${id}";`
  return allService.query(_sql)
}

//地址删除
const addressDelete = (id) => {
  let _sql = `delete from address where id="${id}";`
  return allService.query(_sql)
}
module.exports = {
  userLogin,
  userfind,
  userRegister,

  cartList,
  cartFind,
  numAdd,
  cartAdd,

  cartModify,
  cartDelete,

  addressList,
  defaultModify,
  defaultFind,
  addressAdd,
  addressFind,
  addressModify,
  addressDelete
}