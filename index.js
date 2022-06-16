// Player scores
const scorePlayerOne = document.querySelector("#score-player-one");
const scorePlayerTwo = document.querySelector("#score-player-two");

// Max rounds
const maxRounds = document.querySelector("#max-rounds");

// Buttons
const btnPlayerOne = document.querySelector("#btn-player-one");
const btnPlayerTwo = document.querySelector("#btn-player-two");
const btnReset = document.querySelector("#btn-reset");

let gameWin = false;

// Set initial max value
let max = maxRounds.value;

// Set initial scores
let scoreOne = parseInt(scorePlayerOne.innerText);
let scoreTwo = parseInt(scorePlayerTwo.innerText);

maxRounds.addEventListener("change", function (e) {
    max = maxRounds.value;
});

btnPlayerOne.addEventListener("click", function (e) {
    let num = parseInt(scorePlayerOne.innerText);
    if (num < max) {
        scoreOne += 1;
        updateScoreHtml(scorePlayerOne, scoreOne);
        console.log("Player One: " + scoreOne);
    }
    if (scoreOne == max && !gameWin) {
        gameWin = true;
        scorePlayerOne.style = "color: green;";
        scorePlayerTwo.style = "color: red;";
    }
});

btnPlayerTwo.addEventListener("click", function (e) {
    let num = parseInt(scorePlayerTwo.innerText);
    if (num < max) {
        scoreTwo += 1;
        updateScoreHtml(scorePlayerTwo, scoreTwo);
        console.log("Player Two: " + scoreTwo);
    }
    if (scoreTwo == max && !gameWin) {
        gameWin = true;
        scorePlayerTwo.style = "color: green;";
        scorePlayerOne.style = "color: red;";
    }
});

btnReset.addEventListener("click", function (e) {
    gameWin = false;
    
    scoreOne = 0;
    scoreTwo = 0;
    updateScoreHtml(scorePlayerOne, scoreOne);
    updateScoreHtml(scorePlayerTwo, scoreTwo);

    scorePlayerOne.style = "color: black;";
    scorePlayerTwo.style = "color: black;";
});

function updateScoreHtml(element, newValue) {
    element.innerText = newValue;
}