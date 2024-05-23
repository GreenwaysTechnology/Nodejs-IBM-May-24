const TODOS = require('./todo')
class TodoService {

    //blocking api
    // findAll() {
    //     return TODOS
    // }
    //nonblocking with timer with callback
    // findAll(resolve) {
    //     setTimeout(resolve, 1000, TODOS)
    // }
    //nonblocking with timer with promise
    findAll() {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 1000, TODOS)
        })
    }
}
module.exports = new TodoService()