//import http module
const http = require("node:http")
const todoService = require('./services/todo.service')

const server = http.createServer(async (req, res) => {
    try {
        res.writeHead(200, {
            'Content-Type': 'application/json',
        });
        const todos = await todoService.findAll()
        res.end(JSON.stringify(todos))
    }
    catch (err) {
        res.writeHead(200, {
            'Content-Type': 'application/json',
        });
        res.end({ err: err }) //close the current connection
    }
})

//server events
server.on('request', (req, res) => {
    //console.log(req)
    console.log('Request Recived on', new Date(), "URL is", req.url, "method ", req.method)
})
//start server
server.listen(3000, () => {
    console.log('Server is Running')
})