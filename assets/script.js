const questions = document.getElementById("questions");
const choices = Array.from(document.getElementsByClassName("btn"));
const questionCounterText = document.getElementById("hud-number");
const activeScore = document.getElementById("hud-active-score");


let currentQuestion = {}
let answer = true
let score = 0
let questionCounter = 0
let availibleQuestions = []

const correctAnswer = 10
const maxQuestions = 5

let gameQuestions = [ 
    {
        question: 'What is NOT a data type in JavaScript?',
        choice1: 'String',
        choice2: 'Boolean',
        choice3: 'setAttribute',
        choice4: 'Number',
        answer: 3,
    },
    {
        question: 'What JavaScript method is used to create a random number?',
        choice1: 'Math.random()',
        choice2: 'math.random()',
        choice3: 'Math.floor()',
        choice4: 'Math.ran()',
        answer: 1
    },
    {
        question: 'Which javaScript method would you use to add items into an array?',
        choice1: '.push()',
        choice2: '.pop()',
        choice3: '.splice()',
        choice4: '.add()',
        answer: 1,
    },
    {
        question: 'What would you use to assign a variable that CANNOT be reassigned within your code?',
        choice1: 'let',
        choice2: 'var',
        choice3: 'java',
        choice4: 'const',
        answer: 4,
    },
    {
        question: "What is an 'undfinded variable'?",
        choice1: "Nothing, don't worry about it.",
        choice2: 'A variable that is used within a function',
        choice3: 'A variable that has not been assigned a value yet',
        choice4: 'A variable that has been reassigned',
        answer: 3,
    },
    {
        question: 'If you were looking for a local variable, where would you find it?',
        choice1: 'Within a function',
        choice2: 'At the top of the page',
        choice3: 'At the end of the page',
        choice4: 'Inside another variable.',
        answer: 1,
    }
]



startGame = () => {
    questionCounter = 0;
    score = 0;
    availibleQuestions = [...gameQuestions];
    getNextQuestion();


};

getNextQuestion = () => {
    if (availibleQuestions.length === 0 || questionCounter > maxQuestions){
        localStorage.setItem('mostRecentScore', score);
        return window.location.assign('end.html');
    };

    questionCounter++;
    questionCounterText.innerHTML = `${questionCounter-1}/${maxQuestions}`;
    
    const questionIndex = Math.floor(Math.random() * availibleQuestions.length);
    currentQuestion = availibleQuestions[questionIndex];
    questions.innerHTML = currentQuestion.question;


    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerHTML = currentQuestion['choice'+ number];
    });
    
};

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];
        
        const rightOrWrong = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';
        console.log(rightOrWrong);

        if (rightOrWrong === 'correct') {
            scoreCounter(correctAnswer);
        };


        selectedChoice.classList.add(rightOrWrong);

        setTimeout( () => {
            selectedChoice.classList.remove(rightOrWrong);
            getNextQuestion();
        }, 1000);

    
    });
});


let timeSecond = 60;
let wrongAnswer = -10;
const activeTimer = document.getElementById('hud-active-timer');


let countDown = setInterval (()=>{
    timeSecond--;
    activeTimer.innerHTML = timeSecond;
    if (timeSecond === 0){
        window.alert('You are out of time. Try again!');
        clearInterval(countDown);
        endGame();
    }
}, 1000);


endGame = () => {
    window.location.assign('start.html');
}


scoreCounter = num => {
    score += num;
    activeScore.innerHTML = score;
};



startGame()


