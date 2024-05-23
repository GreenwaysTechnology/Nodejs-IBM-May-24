//import http module
const http = require("node:http")

// //set header
// const body = 'hello world';
// res.writeHead(200, {
//     'Content-Type': 'text/plain',
// });
// res.end() //close the current connection

const server = http.createServer((req, res) => {
    let data = ''
    req.on('data', (chunk) => {
        //console.log(chunk.toString())
        data += chunk
    })
    req.on('end', () => {
        //you may send data to other io like db or file system.
        res.end(data) //close the current connection
    })

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