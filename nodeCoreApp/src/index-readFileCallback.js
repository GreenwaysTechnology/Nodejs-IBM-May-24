
const fs = require('node:fs')

//read file 
const filePath = './src/assets/info.txt'
const options = {
    encoding: 'UTF-8'
}

const blockMe = message => console.log(message)


blockMe('start')
fs.readFile(filePath, options, (err, data) => {
    if (err) throw err;
    console.log(data)
})
blockMe('end')