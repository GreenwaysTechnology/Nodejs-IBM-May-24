const http = require('node:http')

const server = http.createServer((req, res) => {
    res.end('hello!!How are you')
})

server.listen(3000, () => console.log('Server is running'))