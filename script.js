var startQuiz = document.querySelector(".startQuiz");
var timer;
var timerCounter;
var correct;
var incorrect;

//The init function is called to upload any stored High Score
function init() {
    getHighScores();
}

//click the startQuiz button to start the game
function startQuiz {
    timerCounter = 75;

}

var listOfQuestions = [ {
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