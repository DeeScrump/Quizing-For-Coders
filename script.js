var startQuiz = document.querySelector(".startQuiz");
var timer;
var timerCounter;
var correct;
var incorrect;
var quizContainer = document.getElementById("quizQuestions");
var resultsContainer = document.getElementById("results");
var startButton = document.getElementById("startQuiz");

//The init function is called to upload any stored High Score
function init() {
    getHighScores();
}

function startQuiz() {

}
//click the startQuiz button to start the game
function timer() {
    timerCounter = 75;
    if (timerCounter !== 0) {
        timerCounter--;
    } else if (timerCounter === 0) {
        window.open("initials.html")
    } else {
        return;
    }

    }

}

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

startButton.addEventListener("click", timer);