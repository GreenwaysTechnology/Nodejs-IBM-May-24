const express = require('express')

//console.log(express)
const PORT = 3000
const app = express()

//console.log(app)
//methods for exposing Api

app.get('/hello', (req, res) => {
    res.end('hello')
})


app.listen(PORT, () => {
    console.log('Express server is running')
})