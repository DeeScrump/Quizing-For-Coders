// var startQuiz = document.querySelector(".startQuiz");
var timeCountDown = document.querySelector(".timer_counter");
var timer;
var timerCounter;
var correct;
var incorrect;
var startButton = document.querySelector(".startQuiz");

//The init function is called to upload any stored High Score
function init() {
    getHighScores();
}

function startQuiz() {
    timerCounter = 3;
    console.log("start quiz time");
    startTimer()
}
//click the startQuiz button to start the game
    function startTimer () {
        countDown = setInterval(function() {
            timerCounter--;
            timeCountDown.textContent = timerCounter;
            if (timerCounter === 0) {
                clearInterval(countDown);
                window.open("initials.html","_self");
            }
        }, 1000);    
    }

startButton.addEventListener("click", startQuiz);















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
      c: "RequireJS",
      d: "ESLint"
    },
    correctAnswer: "d"
}
]

