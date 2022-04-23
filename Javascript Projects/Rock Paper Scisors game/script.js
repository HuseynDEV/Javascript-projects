let userPoints = document.querySelector("#userPoints");
let compPoints = document.querySelector("#compPoints");

let choices = document.querySelectorAll(".choices");

let userResult = document.querySelector("#userResult");
let resultText = document.querySelector("#resultText");
let compResult = document.querySelector("#compResult");

let userWin = 0;
let compWin = 0;

choices.forEach((choose, UserChoose) => {
    choose.addEventListener("click", () => {
        userResult.innerHTML = `${choose.innerHTML}
                <h3>User</h3>`;

        //Generate Random Number For Computer turn
        let computerChoose = Math.floor(Math.random() * 3);
        //        console.log(computerChoose);

        if (computerChoose === 0) {
            compResult.innerHTML = `<i class="fas fa-hand-rock"></i>
                <h3>Comp</h3>`;
        } else if (computerChoose === 1) {
            compResult.innerHTML = `<i class="fas fa-hand-paper"></i>
                <h3>Comp</h3>`;
        } else if (computerChoose === 2) {
            compResult.innerHTML = `<i class="fas fa-hand-scissors"></i>
                <h3>Comp</h3>`;
        }
        //RESULT
        //0 = Rock
        //1 = Paper
        //2 = Scissor

        if (UserChoose === computerChoose) {
            resultText.innerText = `Draw`;
        } else if (UserChoose === 0 && computerChoose === 1) {
            //Computer Win
            compWin += 1;
            resultText.innerText = `Loss`;
        } else if (UserChoose === 1 && computerChoose === 2) {
            //Computer Win
            compWin += 1;
            resultText.innerText = `Loss`;
        } else if (UserChoose === 2 && computerChoose === 0) {
            //Computer Win
            compWin += 1;
            resultText.innerText = `Loss`;
        } else {
            //User Win
            userWin += 1;
            resultText.innerText = `Win`;
        }
        userPoints.innerText = userWin;
        compPoints.innerText = compWin;
    })
})
