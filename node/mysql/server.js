const mysql = require('mysql')
const connection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'root',
    database:'demo1'
})

connection.connect()
connection.query('select * from user')
