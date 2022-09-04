const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);

function start() {
    startBtn.classList.add("active");
    stopBtn.classList.remove("stopActive")
}
function stop() {
    startBtn.classList.remove("active");
    stopBtn.classList.add("stopActive")
}
function reset() {
    startBtn.classList.remove("active");
    stopBtn.classList.remove("stopActive")
}