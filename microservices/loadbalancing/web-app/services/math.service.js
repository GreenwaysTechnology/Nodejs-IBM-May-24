const { ServiceBroker } = require("moleculer");
const ApiGateWayService = require("moleculer-web");

const broker = new ServiceBroker({
    transporter: "TCP",
});

broker.createService({
    name: 'mymath',
    actions: {
        add(ctx) {
            const { a, b } = ctx.params
            return ctx.call('math.add', { a, b })
        }
    }
})

broker.createService({
    name: 'APIGateWay',
    mixins: [ApiGateWayService],
    settings: {
        routes: [{
            path: '/api',
            aliases: {
                "math" : "mymath.add",
            }
        }]
    }
})

async function main() {
    try {
        await broker.start();
    }
    catch (e) {
        log(e);
    }
}
main()
