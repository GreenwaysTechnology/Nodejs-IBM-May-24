
const getUser = () => {
    console.log('getUser is called')
    return new Promise((resolve, reject) => {
        let user = {
            name: 'admin'
        }
        //  user = null
        if (user) {
            setTimeout(resolve, 1000, user)
        } else {
            setTimeout(reject, 1000, { message: 'User not found' })
        }
    })
}
const login = (user) => {
    console.log('login is called')
    return new Promise((resolve, reject) => {
        if (user.name === 'admin') {
            setTimeout(resolve, 1000, 'login success')
        } else {
            setTimeout(reject, 1000, 'login failed')
        }
    })
}
const showDashboard = (status) => {
    console.log('showDashboard is called')
    return new Promise((resolve, reject) => {
        if (status === 'login success') {
            setTimeout(resolve, 1000, 'Welcome to dashboard')
        } else {
            setTimeout(reject, 1000, 'Sorry Try again')
        }
    })
}


async function main() {
    // getUser()
    //     .then(user => login(user))
    //     .then(status => showDashboard(status))
    //     .then(page => console.log(page))
    //     .catch(err => console.log(err))
    try {
        const user = await getUser()
        const status = await login(user)
        const page = await showDashboard(status)    }
    catch (err) {
        console.log(err)
    }

}
main()