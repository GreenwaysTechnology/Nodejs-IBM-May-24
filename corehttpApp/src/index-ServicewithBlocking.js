//import http module
const http = require("node:http")
const todoService = require('./services/todo.service')

//create server:

const server = http.createServer((req, res) => {

    res.writeHead(200, {
        'Content-Type': 'application/json',
    });
    const body = todoService.findAll()
    res.write(JSON.stringify(body))
    res.end() //close the current connection
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