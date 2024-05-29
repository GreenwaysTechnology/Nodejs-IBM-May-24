const { ServiceBroker } = require('moleculer')

const broker = new ServiceBroker()

broker.createService({
    name: 'math',
    actions: {
        divide: {
            //param validation logic
            params: {
                a: "number",
                b: "number"
            },
            //biz logic 
            handler(ctx) {
                const a = ctx.params.a
                const b = ctx.params.b
                return a / b
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

