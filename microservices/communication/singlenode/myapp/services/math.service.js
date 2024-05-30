const { ServiceBroker } = require('moleculer')

const broker = new ServiceBroker()


//service 1
broker.createService({
    name: 'math',
    actions: {
        add(ctx) {
            return ctx.params.a + ctx.params.b
        }
    }
})

//service 2
broker.createService({
    name: 'calculator',
    actions: {
        add(ctx) {
            //need to call math
            const { a, b } = ctx.params
            return ctx.call('math.add', { a, b })
        }
    }
})


async function main() {
    try {
        //start the broker 
        await broker.start()
        //use repl prompt
        broker.repl()

    } catch (err) {
        console.log(err)
    }
}
main()