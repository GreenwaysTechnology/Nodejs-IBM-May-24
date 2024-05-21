
async function getValue() {
    return 10 // Promise.resolve(10)
}
function main() {
    const value = getValue()
    console.log(value)

    getValue().then(value=>console.log(value))
}
main()