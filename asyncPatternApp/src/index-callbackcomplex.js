const blockMe = (message) => console.log(message)

const login = (userName, password, resovle, reject) => {
    if (userName === 'admin' && password === 'admin') {
        setTimeout(() => { resovle('success') }, 1000)
    } else {
        setTimeout(() => { reject('login failed') }, 1000)

    }
}
blockMe('start')
login('admin', 'admin', status => {
    console.log(status)
}, err => {
    console.log(err)
})
blockMe('end')