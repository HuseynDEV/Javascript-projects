let skip = document.getElementById("skip")
let score = document.getElementById("score")
let totalScore = document.getElementById("totalScore")
let countdown = document.getElementById("countdown")
let count = 0;
let scoreCount = 0;
let duration = 0;
let qaSet = document.querySelectorAll(".qa_set")
let qaAnsRow = document.querySelectorAll(".qa_set .qa_ans_row input")


skip.addEventListener("click", function () {
  step()
  duration = 10
})

qaAnsRow.forEach(function (qaAnsRowSingle) {

  qaAnsRowSingle.addEventListener("click", function () {

    setTimeout(function () {
      step()
      duration = 10
    }, 500)

    let valid = this.getAttribute("valid")
    if (valid == "deger") {
      scoreCount += 25
      score.innerHTML = scoreCount
      totalScore.innerHTML = scoreCount
    } else {
      scoreCount -= 25
      score.innerHTML = scoreCount
      totalScore.innerHTML = scoreCount
    }

  })
})



function step() {

  count++
  for (i = 0; i < qaSet.length; i++) {
    qaSet[i].className = "qa_set"
  }

  qaSet[count].className = 'qa_set active'
  if (count == 4) {
    skip.style.display = "none"
    clearInterval(durationTime)
    countdown.innerHTML = 0
  }

}





var durationTime = setInterval(function () {

  if (duration == 10) {
    duration = 0
  }
  duration++
  countdown.innerHTML = duration
  if (countdown.innerHTML == "10") {
    step()
  }



}, 1000)



