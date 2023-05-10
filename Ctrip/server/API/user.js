let db = require('../db/index')

exports.add = (req, res) => {        //向user表添加数据
    var sql = 'insert into user values (?,?,?)'
    // console.log(req.query);
    db.query(sql, [req.query.id, req.query.userName, req.query.password], (err, data) => {
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
    db.query(sql, [req.query.userName, req.query.password], (err, data) => {
        if (err) {
            return res.send('错误：' + err.message)
        }
        // res.send(data)
        if (data.length > 0) {
            res.send({
                token: 'ren',
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