var questionEl = document.querySelector("#question");
var answerChoicesEl = document.querySelector("#answer-choices");
var answer1El = document.querySelector("#answer1");
var answer2El = document.querySelector("#answer2");
var answer3El = document.querySelector("#answer3");
var answer4El = document.querySelector("#answer4");
var timerEl = document.querySelector("#timer");
var quizEl = document.querySelector("#quiz");
var quizIntroEl = document.querySelector("#quiz-intro");
var startButton = document.querySelector("#start-button");
var rightAnswerEl = document.querySelector("#right");
var wrongAnswerEl = document.querySelector("#wrong");
var enterScoreEl = document.querySelector("#enter-score");
var scoreEl = document.querySelector("#score-text");
var initialsEl = document.querySelector("#initials");
var submitInitialsEl = document.querySelector("#submit-initials");

var timer;
var timerCount;
var answerSelected;
var isCorrect;
var score = 0;
var i = 0;

// define questions and answers for the quiz
var quizQuestions = [
  {
    question: "this is question 1",
    answers: {
      1: "Answer 1a",
      2: "Answer 1b",
      3: "Answer 1c",
      4: "Answer 1d",
    },
    correctAnswer: "Answer 1c",
  },
  {
    question: "this is question 2",
    answers: {
      1: "Answer 2a",
      2: "Answer 2b",
      3: "Answer 2c",
      4: "Answer 2d",
    },
    correctAnswer: "Answer 2b",
  },
  {
    question: "this is question 3",
    answers: {
      1: "Answer 3a",
      2: "Answer 3b",
      3: "Answer 3c",
      4: "Answer 3d",
    },
    correctAnswer: "Answer 3d",
  },
  {
    question: "this is question 4",
    answers: {
      1: "Answer 4a",
      2: "Answer 4b",
      3: "Answer 4c",
      4: "Answer 4d",
    },
    correctAnswer: "Answer 4a",
  },
  {
    question: "this is question 5",
    answers: {
      1: "Answer 5a",
      2: "Answer 5b",
      3: "Answer 5c",
      4: "Answer 5d",
    },
    correctAnswer: "Answer 5a",
  }
];

//starts the quiz, hides the quiz intro and shows the first question
function startQuiz() {
  displayQuestions();
  quizIntroEl.hidden = true;
  quizEl.hidden = false;
  timerCount = 90;
  startTimer();
}

// displays the next question in the quiz
function displayQuestions() {
  questionEl.textContent = quizQuestions[i].question;
  answer1El.textContent = quizQuestions[i].answers[1];
  answer2El.textContent = quizQuestions[i].answers[2];
  answer3El.textContent = quizQuestions[i].answers[3];
  answer4El.textContent = quizQuestions[i].answers[4];
}

//check user selected answer compared to correct answer
function checkAnswer() {
  if (quizQuestions[i].correctAnswer === answerSelected) {
    rightAnswerEl.hidden = false;
    wrongAnswerEl.hidden = true;
    isCorrect = true;
    displayNextQuestion();
  } else {
      rightAnswerEl.hidden = true;
    wrongAnswerEl.hidden = false;
    isCorrect = false;
    if (timerCount > 10) {
      timerCount = timerCount - 10;
    } else {
      timerCount = 0;
    }
    displayNextQuestion();
  }
  
}

// iterates to decide what question to show next
function displayNextQuestion() {
  if (i < quizQuestions.length - 1) {
    i++;
    displayQuestions();
  } else {
    endQuiz();
  }
}

// Starting the timer and stopping it when time runs out and the quiz is complete
function startTimer() {
  timer = setInterval(function () {
    timerCount -= 1;
    timerEl.textContent = "Time: " + timerCount;

    if (timerCount === 0) {
      score = timerCount;
      endQuiz();
      clearInterval(timer);
    }
  }, 1000);
}

function endQuiz() {
  score = timerCount;
  clearInterval(timer);
  quizEl.hidden = true;
  enterScoreEl.hidden = false;
  scoreEl.textContent = "Your final score is " + score;
}

// saves score details to an array in local storage
function saveScores() {
    var initials = initialsEl.value.trim();
    initials.toUpperCase();
   
    if (initials) {
        var scores = JSON.parse(localStorage.getItem("scores")) || [];

        var scoreDetails = {
            initials: initials,
            score: score
        };

        scores.push(scoreDetails);


        localStorage.setItem("scores", JSON.stringify(scores));

        location.href = "./highscores.html";
    }
};

// add event listener to submit scores button 
submitInitialsEl.addEventListener("click", function(event) {
    event.preventDefault();
    saveScores();
});

//add event listener to the start button
startButton.addEventListener("click", startQuiz);

// add event listener to answer choices
answerChoicesEl.addEventListener("click", (event) => {
  answerSelected = event.target.textContent;
  console.log(answerSelected);
  checkAnswer();
});
