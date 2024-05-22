const filePromise = require('node:fs/promises');

async function logFile() {
    try {
        const filePath = './src/assets/info.txt'
        const contents = await filePromise.readFile(filePath, { encoding: 'utf8' });
        console.log(contents);
    } catch (err) {
        console.error(err.message);
    }
}
logFile();