// Elements and constraints
const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById ('question-container')
const controls = document.getElementById('controls')
const questionElement = document.getElementById('questions')
const answerButtonElement = document.getElementById('answer-buttons')
let currentQuestionIndex = 0;
const timerDisplay = document.getElementById('timerDisplay')
var sec;

// Click start button to start quiz
startButton.addEventListener('click', startGame,)



function startGame() {
    controls.classList.add('hide')
    questionContainerElement.classList.remove('hide')
    startTimer()
}

// // Countdown timer starts
function startTimer(){
    sec = 60;
    var timer = setInterval(function(){
        if (sec >= 0){
            document.getElementById('timerDisplay').innerHTML=sec;
        } else {document.getElementById('timerDisplay').innerHTML=0;}
       
        sec--;
        if (sec <= 0) {
            clearInterval(timer);
        }
    }, 1000);
}
const questions = [
    {
     question: 'Javascript is an ____ language?',
     answers: [
         {text: 'Spanish', correct: false},
         {text: 'French', correct: false},
         {text: 'object-orientated', correct: true},
         {text: 'Procedural', correct: false},
     ]
 },
 {
    question: 'what keywords define a variable in JavaScript?',
    answers: [
        {text: 'cookie', correct: false},
        {text: 'monster', correct: false},
        {text: 'var', correct: true},
        {text: 'turtle', correct: false},
    ]
},
{
    question: 'Which function is used to serialize an object into a JSON string in Javascript?',
    answers: [
        {text: 'parse', correct: false},
        {text: 'future', correct: false},
        {text: 'stringify', correct: true},
        {text: 'splendid', correct: false},
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
    
    // if (currentQuestionIndex !== questions.length-1){
    //     currentQuestionIndex++
//     }
// }
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
        sec = sec - 5 
    }

    console.log('currentQuestionIndex',currentQuestionIndex )
    console.log('questions.length-1',questions.length-1 )


    showQuestion(questions[currentQuestionIndex])



    if (currentQuestionIndex === questions.length-1){
        console.log(questions.length)
        console.log(currentQuestionIndex)
        endGame()
    } else {
            currentQuestionIndex++
        showQuestion(questions[currentQuestionIndex])
        // resetState();
    }

    
    function resetState() {
        correctPopup.classList.add('hide')
        wrongPopup.classList.add('hide')   
    }

}}
function endGame(){
    alert("this is the end")
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