var timeCountDown = document.querySelector(".timer_counter");
var startButton = document.querySelector(".startQuiz");
var timer;
var timerCounter;
var correct;
var incorrect;

//The init function is called to upload any stored High Score
// function init() {
//     getHighScores();
// }

//This starts the quiz itself
function startQuiz() {
    window.open("questions.html","_self");
    // timerCounter = 10;
    // console.log("start quiz time");
    // startTimer();
    // jumpToQuestions();
}

// startButton.addEventListener("click", startQuiz);

// function startTimer() {
//     window.open("questions.html","_self");
// }

//The timer interval that countdowns and return to page for score and initials input
// function startTimer () {
//     countDown = setInterval(function() {
//         timerCounter--;
//         timeCountDown.textContent = timerCounter;
//         if (timerCounter === 0) {
//             clearInterval(countDown);
//             window.open("initials.html","_self");
//         } else if (timerCounter !==0) {
//             console.log("wait");
//         }
//     }, 1000);
// }


