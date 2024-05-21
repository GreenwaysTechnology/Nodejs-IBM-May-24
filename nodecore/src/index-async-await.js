
async function getValue() {
    return 10 // Promise.resolve(10)
}
async function main() {
    try {
        const value = await getValue()
        console.log(value)
    }
    catch (err) {
        console.log(err)
    }

}
main()