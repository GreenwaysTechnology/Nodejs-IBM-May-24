const fs = require('node:fs')

const filePath = './src/assets/greet.txt';

const options = {
    encoding: 'UTF-8'
}

function blockMe(message) {
    console.log(message)
}
//write file in non blocking way 

blockMe('start')

const data = 'Hello,How are you?'

fs.writeFile(filePath, data, options, err => {
    if (err) throw err;
    console.log(`data has been written into ${filePath}`)
})
blockMe('end')