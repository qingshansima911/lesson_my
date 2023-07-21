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

const allServices = {
  query: function (sql, values) {
    return new Promise((resolve, reject) => {
      pool.getConnection((err, connection) => {
        if (err) {
          reject(err);
        } else {
          connection.query(sql, values, (err, rows) => {
            if (err) {
              reject(err);
            } else {
              resolve(rows);
            }
            connection.release();
          })
        }
      })
    })
  }
}
//根据用户名查找用户 根据用户名查找此用户购物车的数据 
const cartList = (username) => {
  let _sql = `select * from cart where username="${username}";`
  return allServices.query(_sql)
}

//在cart中查找商品id为多少的那一项以便添加数据
const cartFind = (id, username) => {
  let _sql = `select * from cart where id="${id}" and username="${username}";`
  return allServices.query(_sql)
}

//添加前如存在此商品则让num加一并存入数据库
const numAdd = (id) => {
  let _sql = `update cart set num=num+1 where id="${id}";`
  return allServices.query(_sql)
}

//在cart中添加一条数据
const cartAdd = (values) => {
  let _sql = `insert into cart set id=?,username=?,name=?,price=?,max=?,min=?,shop=?,address=?,guarantee=?,imgUrl=?,num=?;`
  return allServices.query(_sql, values)
}

//在购物车页面增加或减少商品数量数据库中的cart表的num字段也需修改
const cartModify = (num, id, username) => {
  let _sql = `update cart set num="${num}" where id="${id}" and username="${username}";`
  return allServices.query(_sql)
}

//购物车数据删除
const cartDelete = (id, username) => {
  let _sql = `delete from cart where id="${id}" and username="${username}";`
  return allServices.query(_sql)
}

module.exports = {
  cartAdd,
  cartList,
  cartFind,
  numAdd,
  cartModify,
  cartDelete
}