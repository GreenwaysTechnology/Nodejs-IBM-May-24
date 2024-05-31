const { ServiceBroker } = require('moleculer')


const broker = new ServiceBroker({
    transporter: "TCP"
})


broker.createService({
    name: 'math',
    actions: {
        add: {
            async handler(ctx) {
                //communicate adder service 
                const { a, b } = ctx.params
                const x = parseInt(a)
                const y = parseInt(b)
                const result = await ctx.call('adder.add', { a: x, b: y })
                return result
            }
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