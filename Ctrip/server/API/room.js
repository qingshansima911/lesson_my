let db = require('../db/index')

exports.get = (req, res) => {
    var sql = `select * from roomList,hotelDetail where 
    roomList.room_id=? and roomList.detail_id = hotelDetail.detail_id`
    db.query(sql, [req.query.room_id], (err, data) => {
        if (err) {
            return res.send('错误：' + err.message)
        }
        res.send(data)
    })
}