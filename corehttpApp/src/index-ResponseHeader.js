//import http module
const http = require("node:http")

//create server:

const server = http.createServer((req, res) => {
    //set header
    const body = 'hello world';
    res.writeHead(200, {
        'Content-Length': Buffer.byteLength(body),
        'Content-Type': 'text/plain',
    });
    res.write(body)
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