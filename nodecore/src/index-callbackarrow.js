
const blockMe = (message) => console.log(message)

const sayHello = hello => setTimeout(hello, 5000, 'Hello!!')

blockMe('start')
sayHello(message => console.log(message))
blockMe('end')