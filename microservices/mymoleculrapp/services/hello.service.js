const { ServiceBroker } = require('moleculer')

//create service broker object
const broker = new ServiceBroker()

//create service
broker.createService({
    name: 'hello',
    actions: {
        //apis
        sayHello() {
            return "Hello"
        }
    }
})

async function main() {
    // broker.start().then(() => {
    //     console.log('broker is ready')
    //     //call service.
    //     broker.call('hello.sayHello').then(res => {
    //         console.log(res)
    //     }).catch(err => {
    //         console.log(err)
    //     })
    // }).catch(err => {
    //     console.log('Server failed')
    // })
    try {
        await broker.start()
        console.log('broker is ready')
        const res = await broker.call('hello.sayHello')
        console.log(res)
    }
    catch (err) {
        console.log(err)
    }

}
main()