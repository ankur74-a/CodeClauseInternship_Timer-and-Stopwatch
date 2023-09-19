let timerInterval;
let timerRunning = false;
let timerSeconds = 0;
let timerMinutes = 0;
let stopwatchInterval;
let stopwatchRunning = false;
let stopwatchSeconds = 0;
let stopwatchMinutes = 0;
let stopwatchHours = 0;
function startTimer() {
    if (!timerRunning) {
        timerInterval = setInterval(updateTimer, 1000);
        timerRunning = true;
    }
}

function stopTimer() {
    clearInterval(timerInterval);
    timerRunning = false;
}

function resetTimer() {
    clearInterval(timerInterval);
    timerRunning = false;
    timerSeconds = 0;
    timerMinutes = 0;
    updateTimerDisplay();
}

function updateTimer() {
    timerSeconds++;
    if (timerSeconds === 60) {
        timerSeconds = 0;
        timerMinutes++;
    }
    updateTimerDisplay();
}

function updateTimerDisplay() {
    const secondsDisplay = String(timerSeconds).padStart(2, '0');
    const minutesDisplay = String(timerMinutes).padStart(2, '0');
    document.querySelector('#timer span:nth-child(1)').textContent = minutesDisplay;
    document.querySelector('#timer span:nth-child(2)').textContent = secondsDisplay;
}

document.querySelector('#start').addEventListener('click', startTimer);
document.querySelector('#stop').addEventListener('click', stopTimer);
document.querySelector('#reset').addEventListener('click', resetTimer);

function startStopwatch() {
    if (!stopwatchRunning) {
        stopwatchInterval = setInterval(updateStopwatch, 10);
        stopwatchRunning = true;
    }
}

function stopStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchRunning = false;
}

function resetStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchRunning = false;
    stopwatchSeconds = 0;
    stopwatchMinutes = 0;
    stopwatchHours = 0;
    updateStopwatchDisplay();
}

function updateStopwatch() {
    stopwatchSeconds++;
    if (stopwatchSeconds === 100) {
        stopwatchSeconds = 0;
        stopwatchMinutes++;
        if (stopwatchMinutes === 60) {
            stopwatchMinutes = 0;
            stopwatchHours++;
        }
    }
    updateStopwatchDisplay();
}

function updateStopwatchDisplay() {
    const secondsDisplay = String(stopwatchSeconds).padStart(2, '0');
    const minutesDisplay = String(stopwatchMinutes).padStart(2, '0');
    const hoursDisplay = String(stopwatchHours).padStart(2, '0');
    document.querySelector('#stopwatch span:nth-child(1)').textContent = hoursDisplay;
    document.querySelector('#stopwatch span:nth-child(2)').textContent = minutesDisplay;
    document.querySelector('#stopwatch span:nth-child(3)').textContent = secondsDisplay;
}

document.querySelector('#startStopwatch').addEventListener('click', startStopwatch);
document.querySelector('#stopStopwatch').addEventListener('click', stopStopwatch);
document.querySelector('#resetStopwatch').addEventListener('click', resetStopwatch);
