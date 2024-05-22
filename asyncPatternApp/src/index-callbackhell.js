
const getUser = (resolve, reject) => {
    console.log('getUser is called')
    let user = {
        name: 'admin'
    }
    //  user = null
    if (user) {
        setTimeout(resolve, 1000, user)
    } else {
        setTimeout(reject, 1000, { message: 'User not found' })
    }
}
const login = (user, resolve, reject) => {
    console.log('login is called')
    if (user.name === 'admin') {
        setTimeout(resolve, 1000, 'login success')
    } else {
        setTimeout(reject, 1000, 'login failed')
    }
}
const showDashboard = (status, resolve, reject) => {
    console.log('showDashboard is called')
    if (status === 'login success') {
        setTimeout(resolve, 1000, 'Welcome to dashboard')
    } else {
        setTimeout(reject, 1000, 'Sorry Try again')
    }
}


function main() {
    getUser((user) => {
        console.log(user)
        login(user, (status) => {
            console.log(status)
            showDashboard(status, () => {
                console.log(status)
            }, err => {
                console.log(err)
            })
        }, (err) => {
            console.log(err)
        })
    }, (err) => {
        console.log(err)
    })

}
main()