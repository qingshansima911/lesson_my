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

//获取用户地址列表
const addressList = (username) => {
  let _sql = `select * from address where username="${username}";`
  return allServices.query(_sql)
}

//修改默认地址
const defaultModify = (isDefault, id) => {
  let _sql = `update address set isDefault="${isDefault}" where id="${id}";`
  return allServices.query(_sql)
}

//根据isDefault是否为1查询默认地址的那条数据
const defaultFind = () => {
  let _sql = `select * from address where isDefault=1;`
  return allServices.query(_sql)
}

//在address中添加一条数据
const addressAdd = (values) => {
  let _sql = `insert into address set id=?,username=?,name=?,tel=?,address=?,isDefault=?;`
  return allServices.query(_sql, values)
}

//根据id查询地址
const addressFind = (id) => {
  let _sql = `select * from address where id="${id}";`
  return allServices.query(_sql)
}

//修改地址信息
const addressModify = (name, tel, address, id) => {
  let _sql = `update address set name="${name}",tel="${tel}",address="${address}" where id="${id}";`
  return allServices.query(_sql)
}

//地址删除
const addressDelete = (id) => {
  let _sql = `delete from address where id="${id}";`
  return allServices.query(_sql)
}

module.exports = {
  addressList,
  defaultModify,
  defaultFind,
  addressAdd,
  addressFind,
  addressModify,
  addressDelete
}