//select points
let pointsSelect = document.querySelector('.points-select');
let result = document.querySelector('.result');

pointsSelect.addEventListener('change', (event) => {
    scoreLimit = parseInt(event.target.value); //convert to number
    result.textContent = `You chose ${scoreLimit}`;
});

//add score
let playerOneScore = document.querySelector('.scoreOne');
let playerTwoScore = document.querySelector('.scoreTwo');
let scoreLimit = 0;
let playerOneClicks = 0;
let playerTwoClicks = 0;

playerOneScore.textContent = 0;
playerTwoScore.textContent = 0;

let firstPlayerButton = document.querySelector('.playerOne');
let secondPlayerButton = document.querySelector('.playerTwo');
let resetButton = document.querySelector('button[type="reset"]');
let winner = document.querySelector('.winner');

firstPlayerButton.addEventListener('click', function () { 
    if (playerOneClicks < scoreLimit) {
        playerOneClicks++;
        playerOneScore.textContent = playerOneClicks;
    }

    if (playerOneClicks === scoreLimit) {
        firstPlayerButton.disabled = true;
        secondPlayerButton.disabled = true;
        let winAlert = 'PLAYER ONE WINS!';
        winner.textContent = winAlert;
        playerOneScore.style.color = 'green';
        playerTwoScore.style.color = 'red';
      }
});

secondPlayerButton.addEventListener('click', function () { 
    if (playerTwoClicks < scoreLimit) {
        playerTwoClicks++;
        playerTwoScore.textContent = playerTwoClicks;
    }

    if (playerTwoClicks === scoreLimit) {
        secondPlayerButton.disabled = true;
        firstPlayerButton.disabled = true;
        let winAlert = 'PLAYER TWO WINS!';
        winner.textContent = winAlert;
        playerOneScore.style.color = 'red';
        playerTwoScore.style.color = 'green';
      }
});

//reset score back to 0
resetButton.addEventListener('click', function (e) {
    scoreLimit = 0;
    playerOneClicks = 0;
    playerTwoClicks = 0;
    playerOneScore.textContent = 0;
    playerTwoScore.textContent = 0;
    firstPlayerButton.disabled = false;
    secondPlayerButton.disabled = false;
    winner.textContent = "";
    result.textContent = "";
    playerOneScore.style.color = '';
    playerTwoScore.style.color = '';
  });







