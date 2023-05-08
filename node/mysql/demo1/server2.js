const mysql = require('mysql')
const http = require('http')
const querystring = require('querystring')
const server = http.createServer((req, res) => {
    let postVal = ''
    req.on('data', (chunck) => {
        postVal += chunck;
    })
    req.on('end', () => {
        let formVal = querystring.parse(postVal)
        let userName = formVal.userName
        let password = formVal.password
        // console.log(userName, password);
        const connection = mysql.createConnection({
            host: 'localhost',
            port: 3306,
            user: 'root',
            password: 'mysql',
            database: 'demo1'
        })
        connection.connect()
        connection.query('select * from user where userName=? and password=?',
            [userName, password], (err, results, fields) => {
            if (err) throw err
            // console.log(results);
            if (results.length > 0) {
                res.writeHead(200,{'Content-Type':'text/html;charset=utf8'})
                res.write('登录成功')
            }
        })
        connection.end();
        // res.end()
    })
})

server.listen(8080)