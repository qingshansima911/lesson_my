const WebSocket = require('ws')
const wss = new WebSocket.Server({
    port:1234
})
wss.on('connection', function connection(ws) {
    ws('message', (message) => {
        console.log('Received:', message);
        ws.send('Hello Client!')
    })
    ws.on('close', () => {
        console.log('WebSocket closed');
    })
})