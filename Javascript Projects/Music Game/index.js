
window.addEventListener("keydown", function (e) {

    let key = e.keyCode

    let btn = document.querySelector(`div[data-key="${key}"]`)
    let audio = document.querySelector(`audio[data-key="${key}"]`)

    audio.currentTime = 0
    audio.play()

    btn.classList.add("active")
// console.log()


})



let btn2 = document.querySelectorAll(".key")


// btn2.forEach(function (deger) {

//     deger.addEventListener("transitionend", function (islem) {
//         // deger.classList.remove("active")
//         console.log(islem)
//     })

// })

setInterval(function(){
btn2.forEach(function(deger){
    deger.classList.remove("active")
    // console.log(deger)
})
},1000)