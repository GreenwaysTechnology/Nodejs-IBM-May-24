
const fs = require('node:fs')

//read file 
const filePath = './src/assets/info.txt'
const options = {
    encoding: 'UTF-8'
}

class FileOperation {
    constructor() {  }
    readFile(callback) {
        fs.readFile(filePath, options, callback)
    }
}

function main() {
    let fileOperation = new FileOperation()
    fileOperation.readFile((err, data) => {
        if (err) throw err;
        console.log(data)
    })
}
main()



