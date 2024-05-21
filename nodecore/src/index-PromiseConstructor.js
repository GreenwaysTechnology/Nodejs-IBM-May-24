function blockMe(message) {
    console.log(message)
}
function login(name) {
    if (name === 'admin') {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 1000, 'Login Success')
        })
    } else {
        return new Promise((resolve, reject) => {
            setTimeout(reject, 1000, 'Login Failed')
        })
    }
}

function main() {
    blockMe('start')
    login('admin')
        .then(status => console.log(status))
        .catch(err => console.log(err))

    login('foo')
        .then(status => console.log(status))
        .catch(err => console.log(err))
    blockMe('end')
}
main()

