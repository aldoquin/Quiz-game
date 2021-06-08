var currentIndex = 0;
var allButtons = document.querySelector('.btn-group');
var gameStarter = document.querySelector('.gametimer');
var scoreCounter = document.querySelector('.scoreCounter');
var scoreDisplayer = document.querySelector('.gamecounter');
var timer;
var timerCount;





var buttonStart = document.querySelector("#gameStart")
buttonStart.addEventListener('click', function (event) {

  event.preventDefault();
  document.querySelector('.gametimer').style.display = 'block';
  document.querySelector('.btn-group').style.display = 'block';
  document.querySelector('#question').textContent = questions[currentIndex].question
  document.querySelector('#button-one').textContent = questions[currentIndex].choices[0];
  document.querySelector('#button-two').textContent = questions[currentIndex].choices[1];
  document.querySelector('#button-three').textContent = questions[currentIndex].choices[2];
  startTimer()
  document.querySelector('#gameStart').style.display = 'none';

})
function results() {
  gameStarter.textContent = "Score Counter"
}

function startTimer() {
  timerCount = 60;

  timer = setInterval(function () {
    timerCount--;
    gameStarter.textContent = timerCount;
    if (timerCount <= 0) {
      clearInterval(timer);
        Endgame()
        
    }
  }, 1000);
}


allButtons.addEventListener('click', function (event) {
  event.preventDefault();
  if (event.target.textContent == questions[currentIndex].correct) {
    scoreCounter++
  }
  currentIndex++

  if (currentIndex >= questions.length) {

    Endgame();
  }
  else {
    document.querySelector('#question').textContent = questions[currentIndex].question;
    document.querySelector('#button-one').textContent = questions[currentIndex].choices[0];
    document.querySelector('#button-two').textContent = questions[currentIndex].choices[1];
    document.querySelector('#button-three').textContent = questions[currentIndex].choices[2];

  }
})

function Endgame() {
stopTimer()
document.querySelector(".btn-group").style.display = "none";
document.querySelector('.gametimer').textContent= `YOUR SCORE IS ${((scoreCounter/questions.length)*100).toFixed(2)} % ` 

}

function stopTimer(){
  clearInterval(timer);
}


var questions = [
  {
    question: 'What is javascript ?',
    choices: ['A language', 'A computer', 'A dog'],
    correct: 'A language'
  },
  {
    question: 'Which of theses are is an array',
    choices: ['[dog,cat,wolf]', 'animals : turtle', '24'],
    correct: '[dog,cat,wolf]'
  },
  {
    question: 'what does clg stand for ',
    choices: ['print()', 'for()', 'console.log'],
    correct: 'console.log'
  },
  {
    question: 'what does DOM stand for',
    choices: ['door open main', 'document object model', ' cat'],
    correct: 'document object model'
  },
  {
    question: 'DOM lets you use which of these ',
    choices: ['query selector', '.add()', '.ajaxSend()'],
    correct: 'query selector'
  },
  {
    question: 'what does API stand for',
    choices: ['area per inch', 'application programming interface', 'idk'],
    correct: 'application programming interface'
  },


]


// queryselector was defined before the array causing it not to work

