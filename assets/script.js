let startButt = document.getElementById('start')
let nextButt = document.getElementById('next')
let questDisplay = document.getElementById('question')
let ch1 = document.getElementById('button1')
let ch2 = document.getElementById('button2')
let ch3 = document.getElementById('button3')
let ch4 = document.getElementById('button4')
let buttonHide = document.getElementsByClassName('buttons')
let timerEl = document.getElementById('timer')


ch1.classList.add('hide')
ch2.classList.add('hide')
ch3.classList.add('hide')
ch4.classList.add('hide')


var currentQuestion = 0
var score = 0
let questions = [
    {name: 'Question 1',
    choices: ['1', '2', '3', '4'],
    answer: 0
    },
    {name: 'Question 2',
    choices: ['1a', '2a', '3a', '4a'],
    answer: 1
    },
    {name: 'Question 3',
    choices: ['1b', '2b', '3b', '4b'],
    answer: 2
    },
    {name: 'Question 4',
    choices: ['az','asdef', 'asdf', 'asdfasdf'],
    answer: 3
    }
]

startButt.addEventListener('click', startGame)

ch1.addEventListener('click', function() {
    answerChoice(0)
})
ch2.addEventListener('click', function() {
    answerChoice(1)
})
ch3.addEventListener('click', function() {
    answerChoice(2)
})
ch4.addEventListener('click', function() {
    answerChoice(3)
})

function startGame() {
    startButt.classList.add('hide')
    ch1.classList.remove('hide')
    ch2.classList.remove('hide')
    ch3.classList.remove('hide')
    ch4.classList.remove('hide')
    updateQuestion(currentQuestion)
    countdown(15)
}

function countdown(seconds) {
    var timeLeft = seconds;
    var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
        timerEl.textContent = timeLeft + ' seconds remaining';
        timeLeft--;
    } else if (timeLeft === 1) {
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
    } else {
        timerEl.textContent = '';
        clearInterval(timeInterval);
    }
    }, 1000);}



function updateQuestion(index) {
    questDisplay.innerText = questions[index].name
    ch1.innerText = questions[index].choices[0]
    ch2.innerText = questions[index].choices[1]
    ch3.innerText = questions[index].choices[2]
    ch4.innerText = questions[index].choices[3]
    currentQuestion++
}

function nextQuestion() {
    updateQuestion(currentQuestion)
}

function answerChoice(choiceIndex) {
    let question = questions[currentQuestion - 1]

    if (choiceIndex === question.answer) {

        score++
    }

    if (currentQuestion == questions.length) {
        // display score?
        // hide questions?
        document.getElementById('score').innerText = "Game done!!! score: " + score
        ch1.classList.add('hide')
        ch2.classList.add('hide')
        ch3.classList.add('hide')
        ch4.classList.add('hide')
        document.getElementById('question').classList.add('hide')
        document.getElementById('timer').classList.add('hide')
        return;
    }
    updateQuestion(currentQuestion)
}