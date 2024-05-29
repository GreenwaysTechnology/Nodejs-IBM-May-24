const { ServiceBroker } = require('moleculer')

//create broker object 
const broker = new ServiceBroker()

//create service 
broker.createService({
    name: 'math', //service Name
    actions: {
        //expanded syntax
        add: {
            //meta information:param validation
            params: {
                a: {
                    type: 'number',
                    positive: true,
                    integer: true
                },
                b: {
                    type: 'number',
                    positive: true,
                    integer: true
                }
            },

            handler(ctx) {
                return ctx.params.a + ctx.params.b
            }
        }
    }
})


//deploy the service on Broker(Server)
async function main() {
    //start server
    try {
        await broker.start()
        console.log('Service is ready')
        const res = await broker.call('math.add', { a: 'abc', b: 20 })
        console.log(res)
    }
    catch (err) {
        console.log(err)
    }
}
main()
