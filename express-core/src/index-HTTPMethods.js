const express = require('express')

const PORT = 3000
const app = express()

app.get('/product', (req, res) => {
    res.end('Product-get')
})
app.post('/product', (req, res) => {
    res.end('Product-post')
})
app.put('/product', (req, res) => {
    res.end('Product-update')
})
app.delete('/product', (req, res) => {
    res.end('Product-delete')
})

app.listen(PORT, () => {
    console.log('Express server is running')
})