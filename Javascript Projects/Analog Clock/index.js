
const hoursEl = document.getElementById("hour")
const minutesEl = document.getElementById("minute")
const secondsEl = document.getElementById("second")
const toggle = document.getElementById("toggle")
const dateEl = document.getElementById("date")
const timeEl = document.getElementById("time")


// toggle.addEventListener("click", ()=>{

// const 

// })

setInterval(function () {
    const time = new Date()
    const day = time.getDay()
    const date = time.getDate()
    const month = time.getMonth()
    const hour = time.getHours()
    const hourIn12Hour = hour % 12;
    const minute = time.getMinutes()
    const seconds = time.getSeconds()
    const ampm = hour > 12 ? "PM" : "AM"
    
    
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    
    
    dateEl.innerHTML = `${days[day]}, ${day} `
    
    timeEl.innerHTML = `${hour}:${minute < 10 ? `0${minute}` : minute} ${ampm}`
    
    
    console.log("asda")
    
    
    hoursEl.style.transform = `translate(-50%, -100%) rotate(${hour * 30}deg)  `
    
    minutesEl.style.transform = `translate(-50%, -100%) rotate(${minute * 6}deg)`
    
    secondsEl.style.transform = `translate(-50%, -100%) rotate(${seconds * 6}deg)`

}, 1000)



// const time = new Date()
// const day = time.getDay()
// const date = time.getDate()
// const month = time.getMonth()
// const hour = time.getHours()
// const hourIn12Hour = hour % 12;
// const minute = time.getMinutes()
// const seconds = time.getSeconds()
// const ampm = hour > 12 ? "PM" : "AM"


// const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]


// dateEl.innerHTML = `${days[day]}, ${day} `

// timeEl.innerHTML = `${hour}:${minute < 10 ? `0${minute}` : minute} ${ampm}`


// console.log("asda")


// hoursEl.style.transform = `translate(-50%, -100%) rotate(${hour * 30}deg)  `

// minutesEl.style.transform = `translate(-50%, -100%) rotate(${minute * 6}deg)`

// secondsEl.style.transform = `translate(-50%, -100%) rotate(${seconds * 6})`