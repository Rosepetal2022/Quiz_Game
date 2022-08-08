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
    questionCounter++;
    const questionIndex = Math.floor(Math.random()*gameQuestions.length);
    currentQuestion = availibleQuestions[questionIndex];
    questions.innerHTML = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerHTML = currentQuestion['choice'+ number];
    });

    availibleQuestions.splice(questionIndex, 1);
};

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];
        console.log(selectedAnswer);
        getNextQuestion();

    });
});

endGame = () => {
    const lastQuestion = document.getElementById('question-container');
    lastQuestion.innerHTML = ('Game Over');

}

startGame()
