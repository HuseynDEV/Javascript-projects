const text = "Hello world, have are you?"


// let index = 0

// function writeText() {

//     document.body.innerHTML = text.slice(0, index)

//     index++


//     if (index > text.length) {
//         index = 0
//     }

// }

// setInterval(function () {
//     writeText()
// }, 100)


let index = 0


function write() {

    document.body.innerHTML = text.slice(0, index)

    index++


    if (index> text.length) {
        index = 0
    }

}

setInterval(function () {
    write()
}, 170)


