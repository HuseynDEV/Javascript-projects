
const joke = document.getElementById("joke")
const jokeBtn = document.getElementById("jokeBtn")

jokeBtn.addEventListener("click", getJokes)

getJokes()



async function getJokes() {

    const config = {
        headers: {
            "Accept": "application/json"
        }

    }

    const res = await fetch('https://icanhazdadjoke.com/', config);
    const data = await res.json()
    joke.innerHTML = data.joke

}




// function getJokes() {

// const config = {
//     headers: {
//         "Accept": "application/json"
//     }

// }

//     fetch("https://icanhazdadjoke.com/", config)
//         .then(resp => resp.json())
//         .then(data => {
//            joke.innerHTML=data.joke
//         })

// }




