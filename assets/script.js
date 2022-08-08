const questions = document.getElementById("questions");
const choices = Array.from(document.getElementsByClassName("btn"));

let currentQuestion = {}
let answer = true
let score = 0
let questionCounter = 0
let availibleQuestions = []
   

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
    }
]

const correctAnswerScore = 10;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availibleQuestions = [...gameQuestions];
    getNextQuestion();


};

getNextQuestion = () => {
    const questionIndex = Math.floor(Math.random()*gameQuestions.length);
    currentQuestion = availibleQuestions[questionIndex];
    questions.innerHTML = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerHTML = currentQuestion['choice'+ number];
    });

        
    if (questionCounter > gameQuestions.length - 1) {
        endGame()
    } else
    setTimeout( () => {
        endGame();
    }, 30000);

    questionCounter++;
};

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];
        
        const rightOrWrong = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';
        console.log(rightOrWrong);

        selectedChoice.classList.add(rightOrWrong);

        setTimeout( () => {
            selectedChoice.classList.remove(rightOrWrong);
            getNextQuestion();
        }, 1000);

    
    });
});

endGame = () => {
    const lastQuestion = document.getElementById('question-container');
    lastQuestion.innerHTML = ('Game Over');

}

startGame()


