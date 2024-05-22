//non blocking using timers

function blockMe(message) {
    console.log(message)
}
function delay(callback, timeout) {
    setTimeout(callback, timeout, "late Message")
}
blockMe('start')
delay(function (message) { 
    console.log(message)
}, 1000)
blockMe('end')
