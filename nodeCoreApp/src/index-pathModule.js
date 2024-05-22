const fs = require('node:fs');
const path = require('node:path')

// const filePath = './src//assets/info.txt'
const filePath = path.join(__dirname,'assets/info.txt')

const options = {
    encoding: 'UTF-8'
}

function blockMe(message) {
    console.log(message)
}
//async api to read file
blockMe('start')
fs.readFile(filePath, options, (err, data) => {
    if (err) throw err
    console.log(data)
})
blockMe('end')