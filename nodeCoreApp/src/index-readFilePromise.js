
const fs = require('node:fs')

//read file 
const filePath = './src/assets/info.txt'
const options = {
    encoding: 'UTF-8'
}

class FileOperation {
    constructor() { }
    // readFile(callback) {
    //     fs.readFile(filePath, options, callback)
    // }
    readFile() {
        return new Promise((resolve, reject) => {
            fs.readFile(filePath, options, (err, data) => {
                if (err) {
                    reject(err``)
                }
                resolve(data)
            })
        })
    }
}

async function main() {
    let fileOperation = new FileOperation()
    // fileOperation.readFile((err, data) => {
    //     if (err) throw err;
    //     console.log(data)
    // })
    // fileOperation.readFile()
    //     .then(data => console.log(data))
    //     .catch(err => console.log(err))
    try {
        const data = await fileOperation.readFile()
        console.log(data)
    }
    catch (err) {
        console.log(err)
    }
}
main()



