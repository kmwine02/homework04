var questionEl = document.querySelector("#question");
var answer1El = document.querySelector("#answer1");
var answer2El = document.querySelector("#answer2");
var answer3El = document.querySelector("#answer3");
var answer4El = document.querySelector("#answer4");
var timerEl = document.querySelector("#timer");
var quizEl = document.querySelector("#quiz");
var quizIntroEl = document.querySelector("#quiz-intro");
var startButton = document.querySelector("#start-button");

var timer;
var timerCount;

// hide the questions until quiz is started
 window.onload = function() {
     quizEl.style.display = "none";
 }

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
        correctAnswer: 3
    },
    {
        question: "this is question 2",
        answers: {
            1: "Answer 2a",
            2: "Answer 2b",
            3: "Answer 2c",
            4: "Answer 2d"
        },
        correctAnswer: 2
    },
    {
        question: "this is question 3",
        answers: {
            1: "Answer 3a",
            2: "Answer 3b",
            3: "Answer 3c",
            4: "Answer 3d"
        },
        correctAnswer: 1
    },
    {
        question: "this is question 4",
        answers: {
            1: "Answer 4a",
            2: "Answer 4b",
            3: "Answer 4c",
            4: "Answer 4d"
        },
        correctAnswer: 3
    },
    {
        question: "this is question 5",
        answers: {
            1: "Answer 5a",
            2: "Answer 5b",
            3: "Answer 5c",
            4: "Answer 5d"
        },
        correctAnswer: 3
    }

];

function startQuiz() {
    questionEl.textContent = quizQuestions[0].question;
    answer1El.textContent = quizQuestions[0].answers[1];
    answer2El.textContent = quizQuestions[0].answers[2];
    answer3El.textContent = quizQuestions[0].answers[3];
    answer4El.textContent = quizQuestions[0].answers[4];

    quizIntroEl.style.display = "none";
    quizEl.style.display = "block";
    timer = 60;


    startTimer();
};



// Starting and stopping the timer 
function startTimer() {
    timer = setInterval(function() {
        timerEl.textContent = "Time: " + timerCount;
        timerCount--;
    }, 1000);
}

function clearInterval() {

};

//add event listener to the start button 
startButton.addEventListener("click", startQuiz);
