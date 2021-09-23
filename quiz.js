var keepScore = 0;
var timeCountDown = document.querySelector(".timer_counter");
// var displayQuestions = document.querySelector(".quiz");
var timer;
var timerCounter;
var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("responses");
var submitButton = document.getElementById("submit");
var listOfQuestions = [
    {
    question: "Who invented JavaScript?",
    answers: {
      1: "Douglas Crockford",
      2: "Sheryl Sandberg",
      3: "Brendan Eich"
    },
    correctAnswer: "c"
  },
  {
    question: "Which one of these is a JavaScript package manager?",
    answers: {
      1: "Node.js",
      2: "TypeScript",
      3: "npm"
    },
    correctAnswer: "c"
  },
  {
    question: "Which tool can you use to ensure code quality?",
    answers: {
      1: "Angular",
      2: "jQuery",
      3: "ESLint",
    },
    correctAnswer: "c"
}
];

function showQuestions() {
    timerCounter = 10;
    console.log("start quiz time");
    startTimer();
    function startTimer () {
        countDown = setInterval(function() {
            timerCounter--;
            timeCountDown.textContent = timerCounter;
            if (timerCounter !== 0) {
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
                            <input type="button" name="question${questionNumber}" value="${letter}">
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
                console.log("jump to questions");
                clearInterval(countDown);
                showQuestions();
                    } else if (timerCounter === 0) {
                        clearInterval(countDown);
                        return;
                        window.open("initials.html","_self");
                    }
        }, 1000);
    }
}


function showResults() {
  // gather answer containers from our quiz
  var answerContainers = quizContainer.querySelectorAll('.answers');

  // keep track of user's answers
  numCorrect = 0;

  // for each question...
  listOfQuestions.forEach( (currentQuestion, questionNumber) => {

    // find selected answer
    var answerContainer = answerContainers[questionNumber];
    var selector = `input[name=question${questionNumber}]:onclick`;
    var userAnswer = (answerContainer.querySelector(selector) || {}).value;

    // if answer is correct
    if(userAnswer === currentQuestion.correctAnswer){
      // add to the number of correct answers
      numCorrect++;

      // color the answers green
      answerContainers[questionNumber].style.color = 'lightgreen';
    }
    // if answer is wrong or blank
    else{
      // color the answers red
      answerContainers[questionNumber].style.color = 'red';
    }
  });

  // show number of correct answers out of total
  resultsContainer.innerHTML = `${numCorrect} out of ${listOfQuestions.length}`;
}

// //This starts the quiz itself
function loadQuestions() {
    timerCounter = 10;
    console.log("start quiz time");
    startTimer();
    // jumpToQuestions();
}

