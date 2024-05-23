//import http module
const http = require("node:http")

//create server:

const server = http.createServer((req, res) => {
    //request and response handling code
    res.write('hello')
    res.end() //close the current connection
})

//start server
server.listen(3000, () => {
    console.log('Server is Running')
})