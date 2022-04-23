const url = "http://api.openweathermap.org/data/2.5/"
let key = "ecd90c3fa20b9ffad3db06b0dec2867b"




const searchBar = document.getElementById("searchBar")


searchBar.addEventListener("keypress", setQuery)


function setQuery(e) {

    if (e.keyCode == "13") {
        getResult(searchBar.value)
    }

}



function getResult(cityName) {

    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`

    fetch(query).then(function (deger) {
        return deger.json()
    }).then(function (deger2) {
        let city = document.querySelector(".city")
        city.innerHTML = `${deger2.name}`

        let temp = document.querySelector(".temp")
        temp.innerHTML = `${Math.floor(deger2.main.temp)}*C`

        let desc = document.querySelector(".desc")
        desc.innerHTML = `${deger2.weather[0].description}`

        let minmax = document.querySelector(".minmax")
        minmax.innerHTML = `${Math.round(deger2.main.temp_min)}*c /
        ${Math.round(deger2.main.temp_max)}*c `

        console.log(deger2)
    })


    // fetch(query)
    // .then(weather=>{
    //     return weather.json()
    // })
    // .then(displayResult)

    // const displayResult=(result)=>{
    //     console.log(result)
    // }

    // console.log(query)

}
