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
// 查询用户是否存在
const findUser = (username) => {
  let _sql = `select * from users where username="${username}";`
  return allServices.query(_sql);
}
// 注册
const userRegister = (values) => {
  let _sql = `insert into users set username=?,password=?;`
  return allServices.query(_sql, values);
}

//登录
const userLogin = (username) => {
  let _sql = `select * from users where username="${username}";`
  return allServices.query(_sql)
}
module.exports = {
  findUser,
  userRegister,
  userLogin
}