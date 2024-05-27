const express = require('express')
const TodoRouter =require('./routers/todo.router')

const PORT = 3000
const app = express()


app.use(function(req,res,next){
    console.log('Global App Middleware')
    next();
})

//bind Router with Application Object
app.use('/api/todos',TodoRouter)

app.listen(PORT, () => {
    console.log('Express server is running')
})