let db = require('../db/index')

exports.get = (req, res) => {
    var sql = 'select * from detailPicture where detail_id=?'
    db.query(sql, [req.query.detail_id], (err, data) => {
        if (err) {
            return res.send('错误：' + err.message)
        }
        res.send(data)
    })
}