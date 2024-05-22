const EventEmitter = require('node:events')

// console.log(EventEmitter)

class Sales extends EventEmitter {
    constructor() {
        super()
        //event registeration
        this.on('sales', (evt) => {
            console.log(evt)
        })
    }
    sale(product) {
        //emit event
        this.emit('sales', product)
    }
}
function main() {
    let sales = new Sales()
    sales.sale({ id: 1, name: 'Phone', qty: 10, price: 10000 })
}
main()


