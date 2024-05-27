const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const morgan = require('morgan')
const fs = require('node:fs')
const path = require('node:path')

const { findAll } = require('./services/todo.service')

//bodyparser middleware registration
// parse application/json
app.use(bodyParser.json())

const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
//logger configuration
// app.use(morgan('combined'))
app.use(morgan('combined', { stream: accessLogStream }))


app.get('/api/todos', async function (req, res) {
    try {
        const todos = await findAll()
        res.json(todos)
    }
    catch (err) {
        res.json(err)
    }

})

// app.post('/api/todos', function (req, res) {
//     let data = ''
//     req.on('data', (chunk) => {
//         data += chunk
//     })
//     req.on('end', () => {
//         console.log(data)
//         res.status(201).location('/api/todos').json({ message: 'Created' })
//     })
// })

app.post('/api/todos', function (req, res) {
    const payload = req.body
    console.log(payload)
    res.status(201).location('/api/todos').json({ message: 'Created' })
    //     })
})

app.listen(3000, () => {
    console.log('Express server is running')
})