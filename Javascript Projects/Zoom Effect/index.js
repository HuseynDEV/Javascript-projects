
const container = document.querySelector(".container")
const img = document.querySelector("img")

img.addEventListener("mousemove", function (e) {
    const x = e.clientX - e.target.offsetLeft
    const y = e.clientY - e.target.offsetTop
    console.log(x, y)




    img.style.transformOrigin = `${x}px ${y}px`
    img.style.transform = "scale(3.5)"
    // img.style.transform = ` translate(${x}%, ${y}%)`


})

// container.addEventListener("mouseleave", function () {

//     img.style.transformOrigin = `center center`
//     img.style.transform = "scale(1)"

// })



