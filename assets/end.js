const username = document.getElementById('username');
const saveScorebtn = document.getElementById('saveScoreBtn');
const mostRecentScore = localStorage.getItem('mostRecentScore');
const finalScore = document.getElementById('finalScore');

const highScores = JSON.parse(localStorage.getItem('highScore')) || [];
console.log(highScores);

const maxHighScores = 5;

finalScore.innerHTML = mostRecentScore;
username.addEventListener('keyup' , () => {
});




saveHighScore = e => {
    e.preventDefault();
    window.alert('Score saved! Go to the High Scores page to see! ');

    const score = {
        score: mostRecentScore,
        name: username.value
    };
    highScores.push(score);

    highScores.sort((a,b) => b.score - a.score);
    highScores.splice(5);
    console.log(highScores);

    localStorage.setItem('highScores' , JSON.stringify(highScores));
    console.log(highScores);
    
};


