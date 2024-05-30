const { ServiceBroker } = require('moleculer')
const broker = new ServiceBroker()

//declare service
broker.createService({
    name: 'posts',
    version: 1,
    actions: {
        //args
        async findAll(ctx) {
            return 'posts -v1'
        }
    }
})
broker.createService({
    name: 'posts',
    version: 2,
    actions: {
        //args
        async findAll(ctx) {
            return 'posts -v2'
        }
    }
})
async function main() {
    try {
        await broker.start()
        broker.repl()
    }
    catch (err) {
        console.log(err)
    }
}
main()