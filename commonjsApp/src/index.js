const greet = require('./greeter')
const TodoService = require('./services/Todo.service')

console.log(greet)

console.log(greet.message , greet.name,greet.address,greet.sayHai(),greet.skills)

// let todoService = new TodoService()

console.log(todoService.findAll())