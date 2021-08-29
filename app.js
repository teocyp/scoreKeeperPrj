const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');

const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');

const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');

let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let gameOver = false;


p1Button.addEventListener('click', function () {
    if (!gameOver) {
        p1Score += 1;
        p1Display.textContent = p1Score;
    }
    if (p1Score === winningScore) {
        gameOver = true;
        p1Display.classList.add('winner');
        p2Display.classList.add('loser');
    }

})

p2Button.addEventListener('click', function () {
    if (!gameOver) {
        p2Score += 1;
        p2Display.textContent = p2Score;
    }
    if (p2Score === winningScore) {
        gameOver = true;
        p2Display.classList.add('winner');
        p1Display.classList.add('loser');
    }

})

resetButton.addEventListener('click', function () {
    gameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    p2Display.classList.remove('winner', 'loser');
    p1Display.classList.remove('winner', 'loser');

})
winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
})