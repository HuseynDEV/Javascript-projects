
window.addEventListener("load", () => {

    const canvas = document.querySelector("#canvas")
    const ctx = canvas.getContext("2d")

    canvas.height = window.innerHeight
    canvas.width = window.innerWidth

    // ctx.lineWidth = 5
    // ctx.fillStyle = "red"
    // ctx.fillRect(100, 100, 200, 200)

    // ctx.strokeStyle = "blue"
    // ctx.lineWidth = 5;
    // ctx.strokeRect(200, 200, 200, 200)

    // ctx.beginPath();
    // ctx.moveTo(100, 100)
    // ctx.lineTo(200, 100)
    // ctx.lineTo(200, 150)  
    // ctx.closePath()
    // ctx.stroke()


    let painting = false

    function startPosition() {
        painting = true
    }


    function finishedPosition() {
        painting = false
         ctx.beginPath()
    }

    function draw(e) {
        if (!painting) return;
        ctx.lineWidth = 2
        

        ctx.lineTo(e.clientX, e.clientY)
        ctx.stroke()
    }


    canvas.addEventListener("mousedown", startPosition)

    canvas.addEventListener("mouseup", finishedPosition)

    canvas.addEventListener("mousemove", draw)



})



