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
var scoreEl = document.querySelector("#score-text");
var initialsEl = document.querySelector("#intials");
var submitInitialsEl = document.querySelector("#submit-initials");

var timer;
var timerCount;
var answerSelected;
var isCorrect;
var score = 0;
var i = 0;
var j = 0;


// define questions and answers for the quiz
var quizQuestions = [
    {
        question: "this is question 1",
        answers: {
            1: "Answer 1a",
            2: "Answer 1b",
            3: "Answer 1c",
            4: "Answer 1d"
        },
        correctAnswer: "Answer 1c"
    },
    {
        question: "this is question 2",
        answers: {
            1: "Answer 2a",
            2: "Answer 2b",
            3: "Answer 2c",
            4: "Answer 2d"
        },
        correctAnswer: "Answer 2b"
    },
    {
        question: "this is question 3",
        answers: {
            1: "Answer 3a",
            2: "Answer 3b",
            3: "Answer 3c",
            4: "Answer 3d"
        },
        correctAnswer: "Answer 3d"
    },
    {
        question: "this is question 4",
        answers: {
            1: "Answer 4a",
            2: "Answer 4b",
            3: "Answer 4c",
            4: "Answer 4d"
        },
        correctAnswer: "Answer 4a"
    },
    {
        question: "this is question 5",
        answers: {
            1: "Answer 5a",
            2: "Answer 5b",
            3: "Answer 5c",
            4: "Answer 5d"
        },
        correctAnswer: "Answer 5a"
    }

];

//starts the quiz, hides the quiz intro and shows the first question
function startQuiz() {
    displayQuestions();
    quizIntroEl.hidden = true;
    quizEl.hidden = false;
    timerCount = 90;
    startTimer();
};

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
    rightAnswerEl.hidden = true;
    wrongAnswerEl.hidden = true;
    if (quizQuestions[i].correctAnswer === answerSelected) {
        rightAnswerEl.hidden = false;
        isCorrect = true;
        console.log(i);
        displayNextQuestion();
    } else {
        wrongAnswerEl.hidden = false;
        isCorrect = false;
        timerCount = timerCount - 10;
        console.log(i);
    }
};

// iterates to decide what question to show next
function displayNextQuestion() {
    i++;
    displayQuestions();
};



// Starting and stopping the timer when the quiz is complete or the timer runs out
function startTimer() {
    timer = setInterval(function() {
        timerEl = document.querySelector("#timer");
        timerEl.textContent = "Time: " + timerCount;
        timerCount -= 1;
        if (timerCount >= 0) {
            if (isCorrect && timerCount > 0) {
            }
        } if (timerCount === 0) {
            endQuiz();
            clearInterval(timer);

        }
    }, 1000);
};

function endQuiz() {

}


//add event listener to the start button 
startButton.addEventListener("click", () => {   
    console.log("debug");
    startQuiz();
});

// add event listener to answer choices
  answerChoicesEl.addEventListener("click", (event) => {
      answerSelected = event.target.textContent;
      console.log(answerSelected);
      checkAnswer();
  });
