const  showDifficulties = document.querySelector(".material-symbols-outlined")
const [easy,medium,high] = [...document.getElementsByTagName("li")]
const meuarr = [easy,medium,high]

const btn_Play = document.querySelector("#play")
const btn_Pause = document.querySelector("#pause")
const btn_Reset = document.querySelector("#reset")
const btn_Resume = document.querySelector("#resume")
const display = document.querySelector(".display")
const personMario = document.querySelector("#mario")

const pipe = document.querySelector("#pipe")
const clouds = document.querySelector("#clouds")
const count_points = document.querySelector("#count-points")

let isPlay 
let points = 0
let interval 



const loop = setInterval(() => {
const pipePosition = pipe.offsetLeft 
const marioPosition = +window.getComputedStyle(personMario).bottom.replace("px", " ")

     if(pipePosition <= 50 && pipePosition > 0 && marioPosition <= -45){
        pipe.style.animationPlayState = "paused"
        clouds.style.animationPlayState = "paused"
        alert(`GAME OVER \n você fez ${points} pontos`)
        clearInterval(interval)

        btn_Pause.style.display = "none"
        btn_Reset.style.display = "block"
     }
},10)





showDifficulties.addEventListener("click", () => {
    for(let c = 0; c < 3; c++){
        meuarr[c].classList.toggle("block")
    }
})

easy.addEventListener("click", () => {
    pipe.style.animationDuration = "1.5s"
})
medium.addEventListener("click", () => {
    pipe.style.animationDuration = "1.1s"
})
high.addEventListener("click", () => {
    pipe.style.animationDuration = ".85s"
})

btn_Play.addEventListener("click", () => {
        isPlay = true

        pipe.style.animationName = "movPipe"
        clouds.style.animationName = "movCloud"
        btn_Play.style.display = "none"
        btn_Pause.style.display = "block"

        countPoints()
     
    })

btn_Pause.addEventListener("click",() => {
    pipe.style.animationPlayState = "Paused"
    clouds.style.animationPlayState = "Paused"
    btn_Resume.style.display = "block"
    btn_Reset.style.display = "block"
    btn_Pause.style.display = "none"

    isPlay = false
})

btn_Resume.addEventListener("click", () => {
    pipe.style.animationPlayState = "Running"
    clouds.style.animationPlayState = "Running"
    btn_Resume.style.display = "none"
    btn_Reset.style.display = "none"
    btn_Pause.style.display = "Block"

    isPlay = true
})

btn_Reset.addEventListener("click", () => {
    pipe.style.animationName = ""
    clouds.style.animationName = ""
    pipe.style.animationPlayState = "Running"
    clouds.style.animationPlayState = "Running"
    btn_Resume.style.display = "none"
    btn_Reset.style.display = "none"
    btn_Pause.style.display = "none"
    btn_Play.style.display = "block"

    clearInterval(interval)
    count_points.textContent = "000"
    points = 0


})


display.addEventListener("click", () => {
    personMario.style.animationName = "jump"
    setTimeout(() => {
        personMario.style.animationName = ""
    },800)
})

const countPoints = () => {
    if(pipe.style.right >= "50%"){
        alert("aaaaaaaaaaaaaaaa")
           
        }
   interval = setInterval(() => {
        if(isPlay){
            points += 10
            count_points.textContent = formatPoints(String(points))
        }
    },100)
}

const formatPoints = (num) => {
    if(num < 100){
        return num.padStart(3,'0')
    }
    return num
} 






