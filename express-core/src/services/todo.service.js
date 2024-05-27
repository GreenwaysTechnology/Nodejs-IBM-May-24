const todos = require("../mock-data/todos");

class TodoService {

    findAll(){
        return Promise.resolve(todos)
    }
}
module.exports = new TodoService()