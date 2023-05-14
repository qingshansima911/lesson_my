let db = require('../db/index')

exports.add = (req, res) => {        //向user表添加数据
    var sql = 'insert into user values (?,?,?,?,?)'
    // console.log(req.query);
    db.query(sql, [req.query.id, req.query.userName, req.query.password,
        'https://i.328888.xyz/2023/03/18/LsbEZ.jpeg', '青衫司马'], (err, data) => {
            if (err) {
                return res.send('错误：' + err.message)
            }
            if (data.affectedRows > 0) {
                // console.log(data);
                res.send({
                    status: 200,
                    message: 'success'
                })
            } else {
                res.send({
                    status: 202,
                    message: 'error'
                })
            }
        })
}

exports.get = (req, res) => {        //通过uerName&password查询数据
    var sql = 'select * from user where userName=? and password=?'    //？用于占位
    let Base64 = require('js-base64').Base64;
    const jwt = require("jsonwebtoken")
    const secret = "wwf"; // 指定一个用于生成token的密钥字符串
    const token = jwt.sign({ foo: "bar" }, secret, {
        // 传入元数据和secret密钥，并指定过期时间生成token
        expiresIn: 50, // 单独一个数字表示多少秒
        // expiresIn: "10h", // 表示10小时后过期
        // expiresIn: "2d" // 表示2天后过期
      });
    //   console.log(`token is ${token}`);
    // console.log(req.query.userName, Base64.decode(req.query.password));
    db.query(sql, [req.query.userName, Base64.decode(req.query.password)],
        (err, data) => {
            if (err) {
                return res.send('错误：' + err.message)
            }
            // res.send(data)
            if (data.length > 0) {
                res.send({
                    data,
                    token: token,
                    status: 200,
                    message: 'success'
                })
            } else {
                res.send({
                    status: 202,
                    message: 'error'
                })
            }

        })
}