
let btn = document.querySelector("button")

let nav = document.querySelector("nav")


btn.addEventListener('click', function () {


    nav.classList.toggle("active")
    btn.classList.toggle("active")

})