const { ServiceBroker } = require('moleculer')

//create broker object 
const broker = new ServiceBroker()

//create service 
broker.createService({
    name: 'math', //service Name
    actions: {
        add(ctx) {
            console.log(ctx.params)
            const { a, b } = ctx.params
            return a + b
        }
    }
})


//deploy the service on Broker(Server)
async function main() {
    //start server
    try {
        await broker.start()
        console.log('Service is ready')
        const res= await broker.call('math.add', { a: 10, b: 20 })
        console.log(res)
    }
    catch (err) {
        console.log(err)
    }
}
main()
