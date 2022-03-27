// Elements and constraints
const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById ('question-container')
const controls = document.getElementById('controls')
const questionElement = document.getElementById('questions')
const answerButtonElement = document.getElementById('answer-buttons')
let currentQuestionIndex = 0;
let timerDisplay = document.getElementById('timerDisplay')

// Click start button to start quiz
startButton.addEventListener('click', startGame)



function startGame() {
    controls.classList.add('hide')
    questionContainerElement.classList.remove('hide')
}

// // Countdown timer starts
function startTimer(){
    var sec = 60;
    var timer = setInterval(function(){
        document.getElementById('TimerDisplay').innerHTML='00'+sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
            
        }
    }, 1000);
}
const questions = [
    {
     question: 'Did I pay taxes?',
     answers: [
         {text: 'yes', correct: false},
         {text: 'a lot', correct: false},
         {text: 'mystery is the spice of life', correct: true},
         {text: 'we both did!', correct: false},
     ]
 },
 {
    question: 'what is the weather?',
    answers: [
        {text: 'yes', correct: false},
        {text: 'a lot', correct: false},
        {text: 'mystery is the spice of life', correct: true},
        {text: 'we both did!', correct: false},
    ]
},
{
    question: 'what is your favorite color?',
    answers: [
        {text: 'yes', correct: false},
        {text: 'a lot', correct: false},
        {text: 'mystery is the spice of life', correct: true},
        {text: 'we both did!', correct: false},
    ]
}
 ]
showQuestion(questions[currentQuestionIndex]) 

function showQuestion(question) {
    resetState()
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')

            button.dataset.isCorrect = answer.correct
       
    button.addEventListener('click', selectAnswer)
    answerButtonElement.appendChild(button)
    })
    
    if (currentQuestionIndex !== questions.length -1){
        currentQuestionIndex++
    }
    else if(currentQuestionIndex == questions.length){
        alert("end of exam")
    }

    
}
function resetState(){
    while (answerButtonElement.firstChild){
        answerButtonElement.removeChild
        (answerButtonElement.firstChild)
    }
}


function selectAnswer(event){
    const selectButton = event.target
    const correct = selectButton.dataset.isCorrect;
    const correctPopup = document.querySelector('.correct');
    const wrongPopup = document.querySelector('.wrong');



    if (correct === "true"){
        correctPopup.classList.remove('hide')
        wrongPopup.classList.add('hide')
    } else {
        wrongPopup.classList.remove('hide')
        correctPopup.classList.add('hide')
    }
    
    showQuestion(questions[currentQuestionIndex]) 
    
    function resetState() {
        correctPopup.classList.add('hide')
        wrongPopup.classList.add('hide')
            
    }
    
}
// function clearStatusClass(element)
//     element.classList.remove('correct')
//     element.classList.remove('wrong')


// // Show question, four answers, and submit button



// functionShowQuestion(question){


// }

     
   
  
// ]
// // some type of boolean true if correctAnswer, if else false
//     // Answer question correctly, point awarded
//     var score = function(){

//     }
//     // Answer incorrectly, time deducted from timer
//     var deduction = function(timer,penalty){

//     }
//  // Next question appears, timer still running
// // timer runs out or all questions are answered
// // Game is over
// // score is recorded with player ID
// // player score and initials are recorded
// // Scores are saved in a running tally of scores (limit top 5 scores)