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



function init() {
    scores = {
        player: 0,
        computer: 0,
    }
    winner = null;
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

//2. when user clicks, reveal color of button.

//3. if the button is pink, update the REMAINING TILES MESSAGE and subtract 1 from tile count and continue until it reaches 0, and then prompt a winner message.  << may switch to 1 point per pink tile, one point per mine blowup, and end the game when the computer wins at 10 or player wins at 20.

// if it comes back as purple, reveal all purple tiles and prompt lose message
function revealAll() {
    for (let i = 0; i < tileBtns.length; i++) {
        tileBtns[i].removeAttribute('hidden')
    for (let e = 0; e < coverUp.length; e++) {
        coverUp[e].setAttribute('hidden', 'true')
    }
    }
};

//reverse the attributes to hide the tileBtns and show the coverUp
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
// init function[remember to render() at the end], other functions[remember to render() at the end if it's updating something], render function

function startGame() {
    console.log('click is working');
    getColor();
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

//define a function to make the computer win the game
//if this tile is clicked, increment computer score by one

//if computer wins, reload page in timeout of 10 seconds 
//
//use revealAll inside computer win function
function checkWin() {
    if (scores.player === 5){
        winner = 'player';
        revealAll();
    } else{
    }
}
//
function playerWinning() {
    winner = 'player';
    scores[winner]++;
}
//computer wins function if the the computer's score is 1, stop it from assigning points per click after the game has ended.
function computerWins() {
    winner = 'computer';
    revealAll();
    scores[winner]++
    if (scores.computer === 1) {
        scores.computer === 1;
    } else {
        console.log('wrong');
    }
}

