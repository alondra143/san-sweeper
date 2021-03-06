// *--/constant variables that won't change/--*

//what constitutes a safe tile vs. a mine: TILECOLORS[0] is a safe tile, TILECOLORS[1] is a mine
const TILECOLORS = ['rgb(249, 205, 241)', 'rgb(168, 161, 194)'];

// *--/state variables/--*

let scores = {
    player: 0,
    kuromi: 0,
};
let winner;

// *--/grab and cache elements from the DOM within variables that need to be accessed more than once/--*

// grabs each image element within corresponding div IDs.
const imgEls = {
    playerImg: document.querySelector('#player > img'),
    kuromiImg: document.querySelector('#kuromi > img'),
}

// object storing where the scores will be updated between player and computer
const scoreEls = {
    player: document.querySelector('#p-score'),
    kuromi: document.querySelector('#k-score'),
}

// grabs all of the buttons within the section with container ID (hidden and blank buttons)
let btns = document.querySelector('#container')

// only the hidden buttons on the grid
let tileBtns = document.querySelectorAll('#container > .tile');

// only the blank buttons shown on the grid
let coverUp = document.getElementsByClassName('default');

// where winning message will appear for player
let playerMsg = document.querySelector('#p-win');

// where losing message will appear for player
let kuromiMsg = document.querySelector('#k-win');

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
        kuromi: 0,
    }
    winner = null;
    playerMsg.textContent= "";
    kuromiMsg.textContent = "";
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
    clrHilite();
};

//gets the color hidden under the tiles when game starts, and contains event listener to start the game
function startGame() {
    btns.addEventListener('click',clickTile);
    getColor();
    init();
}
//event listener that when you click a button in the grid it reveals the hidden tile, and hides the blank tile initially clicked. 
function clickTile(e) {
    if (e.target.className === 'default') {
        e.target.nextElementSibling.removeAttribute('hidden');
        e.target.setAttribute('hidden', 'true')
        //if the hidden tile's color matches the mine color, kuromi wins. if the tile color matches the safe tile, the player continues playing
            if (e.target.nextElementSibling.style.backgroundColor === TILECOLORS[1]) {
                kuromiWins();
            } else if (e.target.nextElementSibling.style.backgroundColor === TILECOLORS[0]) {
                playerWinning();
            } else {
            }       
    } else {
    }
    checkWin();
    hiliteWinner();
    render();
}

//updates player +1 point per safe tile clicked
function playerWinning() {
    scores.player++;
}

//once player has 5 safe tiles clicked, reveal all tiles and prompt winning message.
function checkWin() {
    if (scores.player === 5) {
        winner = 'player';
        revealAll();
        playerWon();
    } else {
    }
}

// player won message should appear.
function playerWon() {
    playerMsg.textContent = "You won! Thanks for playing :)";
}

//if player clicks on mine tile, give kuromi +1 point, reveal all tiles, prompt lose message and stop score from assigning points per click.
function kuromiWins() {
    winner = 'kuromi';
    revealAll();
    kuromiWon();
    scores[winner]++
    if (scores.kuromi === 1) {
        scores.kuromi = 1;
    } else {
    }
}

//computer won message should appear.
function kuromiWon() {
    kuromiMsg.textContent = "You stepped on Kuromi's mine! Better luck next time!";
}

// depending on who the winner is, the function will set a transition and give the loser a lower opacity to showcase the winner.
function hiliteWinner() {
    if (winner === 'kuromi') {
        imgEls.playerImg.style.opacity = '.2';
        imgEls.playerImg.style.transition = '.8s ease-in-out';
        imgEls.playerImg.style.transition = '.7s all';
    } else if (winner === 'player') {
        imgEls.kuromiImg.style.opacity = '.2';
        imgEls.kuromiImg.style.transition = '.8s ease-in-out';
        imgEls.kuromiImg.style.transition = '.7s all';
    } else {
    }
}

// resets both images back to 1 opacity
function clrHilite() {
    for (let img in imgEls) {
        imgEls[img].style.opacity = 1;
    }
}