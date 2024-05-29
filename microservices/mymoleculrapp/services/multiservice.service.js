const { ServiceBroker } = require('moleculer')

//create broker object 
const broker = new ServiceBroker()

//create service 
broker.createService({
    name: 'customer', //service Name
    actions: {
        findAll() {
            return [{
                id: 1,
                name: 'abc pvt ltd',
                address: {
                    city: 'HYD'
                }
            }]
        }
    }
})

broker.createService({
    name: 'products',
    actions: {
        findAll() {
            return [{ id: 1, name: 'Phone', qty: 100, price:1000 }]
        }
    }
})
//deploy the service on Broker(Server)
async function main() {
    //start server
    try {
        await broker.start()
        console.log('Service is ready')
        const customer = await broker.call('customer.findAll')
        const products = await broker.call('products.findAll')
        console.log(customer)
        console.log(products)
    }
    catch (err) {
        console.log(err)
    }
}
main()
