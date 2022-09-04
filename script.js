let hr = 0;
let min = 0;
let sec = 0;
let ms = 0;
let startTimer;
const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);

function start() {
    startBtn.classList.add("active");
    stopBtn.classList.remove("stopActive");

    startTimer = setInterval(() => {
        ms++;
        ms = ms < 10 ? "0" + ms : ms;
        if (ms == 100) {
            sec++;
            ms = "0" + 0;
        }

        putValue();
    }, 10);
}
function stop() {
    startBtn.classList.remove("active");
    stopBtn.classList.add("stopActive")
}
function reset() {
    startBtn.classList.remove("active");
    stopBtn.classList.remove("stopActive")
}
function putValue() {
    document.querySelector(".millisecond").innerText = ms;
    document.querySelector(".second").innerText = sec;
}