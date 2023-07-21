let startTime;
let interval;
let running = false;
let continueTime = 0;

function startTimer() {
    if (!running) {
        startTime = Date.now() - continueTime;
        interval = setInterval(updateDisplay, 10);
        running = true;
        document.getElementById("startButton").style.display = "none";
        document.getElementById("continueButton").style.display = "none";
    }
}

function continueTimer() {
    if (!running) {
        startTime = Date.now() - continueTime;
        interval = setInterval(updateDisplay, 10);
        running = true;
        document.getElementById("startButton").style.display = "none";
        document.getElementById("continueButton").style.display = "none";
    }
}

 
function stopTimer() {
    if (running) {
        clearInterval(interval);
        continueTime = Date.now() - startTime;
        running = false;
        document.getElementById("startButton").style.display = "none";
        document.getElementById("continueButton").style.display = "inline";
        displayElapsedTimeInHours(continueTime);
    }
}

function updateDisplay() {
    const currentTime = Date.now() - startTime;
    const totalHours = currentTime / 3600000;
    const hours = Math.floor(totalHours);
    const minutes = Math.floor((totalHours - hours) * 60);
    const seconds = Math.floor(((totalHours - hours) * 3600) % 60);

    const displayString = `${padNumber(hours)}:${padNumber(minutes)}:${padNumber(seconds)}`;
    document.getElementById("display").innerText = displayString;
}

function padNumber(number) {
    return number.toString().padStart(2, "0");
}

function displayElapsedTimeInHours(timeInMilliseconds) {
    const totalHours = timeInMilliseconds / 3600000;
    const displayString = `Time Elapsed: ${totalHours.toFixed(2)} hrs`;
    document.getElementById("display").innerText = displayString;
}

function resetTimer() {
    clearInterval(interval);
    document.getElementById("display").innerText = "00:00:00";
    running = false;
    continueTime = 0;
    document.getElementById("startButton").style.display = "inline";
    document.getElementById("continueButton").style.display = "none";
}
