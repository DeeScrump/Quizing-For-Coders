var listOfQuestions = [
    {
    question: "Who invented JavaScript?",
    answers: {
      a: "Douglas Crockford",
      b: "Sheryl Sandberg",
      c: "Brendan Eich"
    },
    correctAnswer: "c"
  },
  {
    question: "Which one of these is a JavaScript package manager?",
    answers: {
      a: "Node.js",
      b: "TypeScript",
      c: "npm"
    },
    correctAnswer: "c"
  },
  {
    question: "Which tool can you use to ensure code quality?",
    answers: {
      a: "Angular",
      b: "jQuery",
      c: "ESLint",
    },
    correctAnswer: "c"
}
]
var keepScore = 0;
var timeCountDown = document.querySelector(".timer_counter");
var displayQuestions = document.querySelector(".questions_card");
var timer;
var timerCounter;
var chosenQuestion = 0;
var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");




// loadQuestions();
// //The init function is called to upload any stored High Score
// function init() {
//     getHighScores();
// }

// //This starts the quiz itself
// function loadQuestions() {
//     timerCounter = 10;
//     console.log("start quiz time");
//     startTimer();
//     // jumpToQuestions();
// }


//The timer interval that countdowns and return to page for score and initials input
// function startTimer () {
//     countDown = setInterval(function() {
//         timerCounter--;
//         timeCountDown.textContent = timerCounter;
//         if (timerCounter !== 0) {
//             console.log("jump to questions");
//             clearInterval(countDown);
//             renderQuestions();
//         // } if (timerCounter === 0) {
//         //     clearInterval(countDown);
//         //     return;
//             // window.open("initials.html","_self");
//         }
//     }, 1000);
// }

function renderQuestions() {
    chosenQuestion = listOfQuestions[Math.floor(Math.random() * listOfQuestions.length)];
    window.textContent = chosenQuestion;
    for (var i = 0; i < listOfQuestions.length; i++) {
        if (userInput = listOfQuestions[i].answer) {
            keepScore++;
            // alert("Correct!");
        } else {
            alert("Incorrect!");
        }
    }
}