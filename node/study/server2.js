const http = require('http')
const querystring = require('querystring')
const server = http.createServer((req, res) => {
    let postVal = ''
    req.on('data', (chunk) => {
        postVal += chunk
    })
    req.on('end', () => {
        let query = JSON.stringify(querystring.parse(postVal))
        let obj = JSON.parse(query)
        console.log(obj);
        res.end()
    })
})
server.listen(8888)