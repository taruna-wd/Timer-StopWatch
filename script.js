//  timer 

const timerWatch = document.getElementById("timer")
const startbtn = document.querySelector("#start")
const stopbtn = document.querySelector("#stop")
const resetbtn = document.querySelector("#reset")

let [hour, minute, second] = [0, 5, 60]
let timerInterval;

function TimerShow() {
    second--

    if (second == 60) {
        second = 0
        minute--
        if (minute == 5)
            minute = 0
        hour--
    }
    let date = (hour < 10 ? "0" + hour : hour) + ":" + (minute < 10 ? "0" + minute : minute) + ":" + (second < 10 ? "0" + second : second)
    timerWatch.innerHTML = `<b>${date}</b>`

}

startbtn.addEventListener("click", () => {
    timerInterval = setInterval(TimerShow, 1000)

    stopbtn.addEventListener("click", () => {
        clearInterval(timerInterval);
    })
    resetbtn.addEventListener("click", () => {
        timerWatch.innerHTML = "<b>00:05:00 </b>"

    })

})

// stop watch 

let [hours, minutes, seconds] = [0, 0, 0]

const watch = document.getElementById("stopwatch")
const startWatch = document.querySelector("#startWatch")
const stopWatch = document.querySelector("#stopWatch")
const resetWatch = document.querySelector("#resetWatch")

function startTime() {
    seconds++

    if (seconds == 60) {
        seconds = 0
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let show = h + ":" + m + ":" + s

    watch.innerHTML = `<b>  ${show}</b>`

}

let timer = ""

startWatch.addEventListener("click", () => {
    timer = setInterval(startTime, 1000)
    stopWatch.addEventListener("click", () => {
        clearInterval(timer)
    })
    resetWatch.addEventListener("click", () => {

        clearTimeout(timer)
        watch.innerHTML = "<b> 00 : 00 : 00 </b>"
    })
})



//  now time
const time = document.querySelector("#timer")


// setInterval(()=>{

// let date = new Date();
// let [h, m, s] = [date.getHours(), date.getMinutes(), date.getSeconds()]
// let nowDate = h + "h : " + m + "m : " + s + "s" 
// time.innerText =nowDate
// } , 1000)

