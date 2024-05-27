const express = require('express')
const TODOS = require('./mock-data/todos')

const PORT = 3000
const app = express()

//apis 
app.get('/', (req, res) => {
    res.json({ message: 'Home' })
})
app.get('/api/todos', (req, res) => {
    res.json(TODOS)
})

app.get('/api/todos/:id', (req, res) => {
    console.log(req.params)
    const id = Number(req.params.id)
    const todo = TODOS.filter(todo => todo.id === id)
    res.json(todo)
})
//how to read todo 
app.post('/api/todos', (req, res) => {
    //read payload using node core pattern 
    let todo = ''
    req.on('data', (chunk) => {
        todo += chunk
    })
    req.on('end', async () => {
        try {
            console.log(todo)
            //insert logic goes here
            res.status(201).location("/api/todos/save").json({ message: 'Todo Created' })
        }
        catch (error) {
            res.status(500).json({ message: error })
        }
    });

})
app.put('/api/todos/:id', (req, res) => {
    //read payload using node core pattern 
    const id = Number(req.params.id)
    let todo = ''
    req.on('data', (chunk) => {
        todo += chunk
    })
    req.on('end', async () => {
        try {
            console.log(id)
            console.log(todo)
            //update logic goes here
            res.status(200).json({ message: 'Todo update' })
        }
        catch (error) {
            res.status(500).json({ message: error })
        }
    });

})
app.delete('/api/todos/:id', (req, res) => {
    //read payload using node core pattern 
    const id = Number(req.params.id)
    res.status(204).end()
})
app.listen(PORT, () => {
    console.log('Express server is running')
})