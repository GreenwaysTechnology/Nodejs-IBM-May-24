const { ServiceBroker } = require('moleculer')
//create broker object 
const broker = new ServiceBroker({
    
})

broker.createService({
    name: 'math', //service Name
    actions: {
        add: {
            //meta information
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
            //logic
            handler(ctx) {
                //return ctx.params.a + ctx.params.b
                return this.add(ctx.params.a, ctx.params.b)
            }
        }
    },
    methods: {
        //private methods
        add(a = 0, b = 0) {
            return a + b
        }
    },
    //life cycle methods
    created() {
        console.log('service is created')
    },
    merged() {
        console.log('service is merged')
    },
    async started() {
        console.log('service is started ')
    },
    async stoped() {
        console.log('service is stopped')
    }
})

//deploy the service on Broker(Server)
async function main() {
    //start server
    try {
        await broker.start()
        broker.repl()
    }
    catch (err) {
        console.log(err)
    }
}
main()