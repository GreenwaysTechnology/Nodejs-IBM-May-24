const express = require('express')
// const todoService = require('../services/todo.service')
const { findAll } = require('../services/todo.service')

const TodoRouter = express.Router()

//middleware todo router
TodoRouter.use(function(req,res,next){
    console.log('TodoRouter')
    next();
})

TodoRouter.get('/list',function(req,res,next){
    console.log('TodoRouter-List')
    next();
})

//expose api
TodoRouter.get('/list', async (req, res) => {
    try {
        const todos = await findAll()
        res.json(todos)
    }
    catch (err) {
        res.status(500).json(err)
    }

});


module.exports = TodoRouter