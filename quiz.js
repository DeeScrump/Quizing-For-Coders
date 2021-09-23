var keepScore = 0;
var timeCountDown = document.querySelector(".timer_counter");
// var displayQuestions = document.querySelector(".quiz");
var timer;
var timerCounter;


function showQuestions(){
  // variable to store the HTML output
  var output = [];

  // for each question...
  listOfQuestions.forEach(
    (currentQuestion, questionNumber) => {

      // variable to store the list of possible answers
      var answers = [];

      // and for each available answer...
      for(letter in currentQuestion.answers){

        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
      );
    }
  );
  // finally combine our output list into one string of HTML and put it on the page
  quizContainer.innerHTML = output.join('');  
}

function showResults() {}

var quizContainer = document.getElementById(".quiz");
var resultsContainer = document.getElementById(".results");
var submitButton = document.getElementById(".submit");
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
];


showQuestions();

submitButton.addEventListener("click", showResults);







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