
class TodoService {
    constructor() {

    }
    findAll() {
        return [{ id: 1, status: false, text: 'learn Node' }]
    }
}
// module.exports = TodoService // share class
module.exports = new TodoService()