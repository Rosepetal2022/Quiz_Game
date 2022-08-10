const saveScoreBtn = document.getElementById('save-score-btn');
const playAgainBtn = document.getElementById('play-again-btn');
const username = document.getElementById('input-text');

const mostRecentScore = localStorage.getItem('mostRecentScore');
const finalScore = document.getElementById('final-score')

const highScores = JSON.parse(localStorage.getItem('highScores')) || {};
console.log(highScores);
finalScore.innerHTML = mostRecentScore


saveScore = e => {
    console.log('click!')
    e.preventDefault();
    
const scores = {
    score: mostRecentScore,
    name: username.value
    };
highScores.push(scores);
console.log(scores);
};





//saveScoreBtn.addEventListener('click', saveScore);

