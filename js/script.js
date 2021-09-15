// *--/constant variables that won't change/--*

//what constitutes a safe tile vs. a mine: TILECOLORS[0] is a safe tile, TILECOLORS[1] is a mine
const TILECOLORS = ['rgb(249, 205, 241)', 'rgb(168, 161, 194)'];


// *--/state variables (do not assign values)/--*

let scores = {
    player: 0,
    computer: 0,
};
let winner;

// *--/grab and cache elements from the DOM (look at html) within variables that need to be accessed more than once/--*

// object storing where the scores will be updated between player and computer
const scoreEls = {
    player: document.querySelector('#p-score'),
    computer: document.querySelector('#k-score'),
}
//all of the hidden buttons on the grid
let tileBtns = document.querySelectorAll('#container > .tile');
// all of the buttons within the section with container ID (hidden and blank buttons)
let btns = document.querySelector('#container')

// all of the blank buttons shown on the grid
let coverUp = document.getElementsByClassName('default');
// where winning message will appear for player
let playerMsg = document.querySelector('#p-win');
// where losing message will appear for player
let computerMsg = document.querySelector('#k-win');
//starts the game
document.querySelector('#startBtn')
    .addEventListener('click', startGame);
//resets game to play again
document.querySelector("#resetBtn")
    .addEventListener('click', resetGame);

// *--/event listeners/--*

// *--/init function/--*
//how page looks at start
function init() {
    scores = {
        player: 0,
        computer: 0,
    }
    winner = null;
    playerMsg.textContent= "";
    computerMsg.textContent = "";
    render();
}

//updates the scores between the computer and the player
function render() {
    for (let score in scores) {
        scoreEls[score].textContent = scores[score];
    }
}

// randomize one of the two colors from the TILECOLORS array and assign it to each hidden button
function getColor() {
    for (let i = 0; i < tileBtns.length; i++) {
        const randomColor = Math.floor(Math.random() * TILECOLORS.length);
        tileBtns[i].style.backgroundColor = TILECOLORS[randomColor];
    };
}


// function that reveals all tileBtns and hides all defaultButtons to show the remaining mines/safe tiles
function revealAll() {
    for (let i = 0; i < tileBtns.length; i++) {
        tileBtns[i].removeAttribute('hidden')
    for (let e = 0; e < coverUp.length; e++) {
        coverUp[e].setAttribute('hidden', 'true')
    }
    }
};

// function that reverse the attributes to hide the tileBtns and show the coverUp, init sets the player and computer scores back to 0.
function resetGame() {
    for (let i = 0; i < tileBtns.length; i++) {
        tileBtns[i].setAttribute('hidden', 'true');
    for (let e = 0; e < coverUp.length; e++) {
        coverUp[e].removeAttribute('hidden');
    }
    }
    getColor();
    init();
};

//gets the color hidden under the tiles when game starts
function startGame() {
    btns.addEventListener('click',clickTile);
    getColor();
    init();
}
//clicks on the blank tile, reveals the hidden tile, and hides the blank tile initially clicked. 
//if the hidden tiles color matches the mine color, the computer wins. if the tile color matches the safe tile, the player continues playing
function clickTile(e) {
    if (e.target.className === 'default') {
        e.target.nextElementSibling.removeAttribute('hidden');
        e.target.setAttribute('hidden', 'true')
            if (e.target.nextElementSibling.style.backgroundColor === TILECOLORS[1]){
                computerWins();
            } else if (e.target.nextElementSibling.style.backgroundColor === TILECOLORS[0]){
                playerWinning();
            } else {
            }       
    } else {
    }
    checkWin();
    render();
}
//updates player +1 point per safe tile clicked
function playerWinning() {
    scores.player++;
}
//once player has 5 safe tiles clicked, reveal all tiles and prompt winning message.
function checkWin() {
    if (scores.player === 5){
        winner = 'player';
        revealAll();
        playerWon();
    } else{
    }
}
// player won message should appear.
function playerWon() {
    playerMsg.textContent = "You won! Thanks for playing :)"
}
//if player clicks on mine tile, give computer 1 point, reveal all tiles, prompt lose message and stop score from assigning points per click.
function computerWins() {
    winner = 'computer';
    revealAll();
    computerWon();
    scores[winner]++
    if (scores.computer === 1) {
        scores.computer === 1;
    } else {
    }
}
//computer won message should appear.
function computerWon() {
    computerMsg.textContent = "You stepped on Kuromi's mine! Better luck next time >:)"
}

