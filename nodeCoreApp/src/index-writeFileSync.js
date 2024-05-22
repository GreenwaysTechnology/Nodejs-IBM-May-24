const fs = require('node:fs')

const options = {
    encoding: 'UTF-8'
}

function blockMe(message) {
    console.log(message)
}
const data = 'Hello,How are you?'

//blocking way of writing data
const newFilePath = './src/assets/hello.txt';

blockMe('start')
fs.writeFileSync(newFilePath, data, options)
blockMe('end')