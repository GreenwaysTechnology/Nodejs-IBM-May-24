const { ServiceBroker } = require('moleculer')
const broker = new ServiceBroker()

//declare service
broker.createService({
    name: 'greeter',
    actions: {
        //args
        async sayHello(ctx) {
            const response = await ctx.call('hello.sayHello')
            return response
        }
    }
})
broker.createService({
    name: 'hello',
    actions: {
        //args
        sayHello(ctx) {
            return new this.Promise((resolve, reject) => {
                setTimeout(resolve, 5000, 'Hello,Async')
            })
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