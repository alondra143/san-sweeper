// constant variables that won't change

//1. what constitutes a safe tile vs. a mine
const TILECOLORS = ['rgb(249, 205, 241)', 'rgb(168, 161, 194)'];

// state variables (do not assign values)

let scores = {
    player: 0,
    computer: 0,
};
let winner;




// grab and cache elements from the DOM (look at html) within variables that need to be accessed more than once
const scoreEls = {
    player: document.querySelector('#p-score'),
    computer: document.querySelector('#k-score'),
}

let tileBtns = document.querySelectorAll('#container > .tile');

let btns = document.querySelector('#container')
    .addEventListener('click', clickTile);

//blank tiles that are hiding the tiles with randomized colors
let coverUp = document.getElementsByClassName('default');

let playerMsg = document.querySelector('#p-win');
let computerMsg = document.querySelector('#k-win');


document.querySelector('#startBtn')
    .addEventListener('click', startGame);

//brings back original board layout
document.querySelector("#resetBtn")
    .addEventListener('click', resetGame);

// event listeners

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

function render() {
    for (let score in scores) {
        console.log(score, '< key names');
        scoreEls[score].textContent = scores[score];
    }
}

//1. randomize the background color of buttons between pink and purple and hide it. 
function getColor() {
    for (let i = 0; i < tileBtns.length; i++) {
        const randomColor = Math.floor(Math.random() * TILECOLORS.length);
        tileBtns[i].style.backgroundColor = TILECOLORS[randomColor];
    };
}


// function that reveals all tiles
function revealAll() {
    for (let i = 0; i < tileBtns.length; i++) {
        tileBtns[i].removeAttribute('hidden')
    for (let e = 0; e < coverUp.length; e++) {
        coverUp[e].setAttribute('hidden', 'true')
    }
    }
};

//reverse the attributes to hide the tileBtns and show the coverUp, init sets the scores back to 0.
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

function startGame() {
    console.log('click is working');
    getColor();
    init();
}
//one event delegation to listen to all the buttons on the section with CONTAINER ID to reveal the tile with the color upon clicking, and what it should do
function clickTile(e) {
    console.log(e.target);
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
        console.log('error');
    }
    checkWin();
    render();
}
//give player one point per safe tile clicked
function playerWinning() {
    scores.player++;
}
//if player has 5 safe tiles clicked, reveal all tiles and prompt winning message.
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
        console.log('wrong');
    }
}
//computer won message should appear.
function computerWon() {
    computerMsg.textContent = "You stepped on Kuromi's mine! Better luck next time >:)"
}

