// constant variables that won't change

//1. what constitutes a safe tile vs. a mine
const TILECOLORS = ['rgb(249, 205, 241)', 'rgb(168, 161, 194)'];

// state variables (do not assign values)

let scores = {
    player: 0,
    computer: 0,
};

let winner;

const scoreEls = {
    player: document.querySelector('#p-score'),
    computer: document.querySelector('#k-score'),
}


// grab and cache elements from the DOM (look at html) within variables that need to be accessed more than once
let tileBtns = document.querySelectorAll('#container > .tile');

let btns = document.querySelector('#container')
    .addEventListener('click', clickTile);

let coverUp = document.getElementsByClassName('default');

document.querySelector('#startBtn')
    .addEventListener('click', startGame);

document.querySelector("#resetBtn")
    .addEventListener('click', resetGame);

// event listeners

//1. randomize the background color of buttons between pink and purple and hide it. 

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

function getColor() {
    for (let i = 0; i < tileBtns.length; i++) {
        const randomColor = Math.floor(Math.random() * TILECOLORS.length);
        tileBtns[i].style.backgroundColor = TILECOLORS[randomColor];
    };
}

//2. when user clicks, reveal color of button.
//3. if the button is pink, update the REMAINING TILES MESSAGE and subtract 1 from tile count and continue until it reaches 0, and then prompt a winner message. 
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
};
// init function[remember to render() at the end], other functions[remember to render() at the end if it's updating something], render function

function startGame() {
    console.log('click is working');
    getColor();
}

//one event delegation to listen to all the buttons on the section with CONTAINER ID. 

function clickTile(e) {
    console.log(e.target);
    if (e.target.className === 'default') {
        e.target.nextElementSibling.removeAttribute('hidden');
        e.target.setAttribute('hidden', 'true')
            if (e.target.nextElementSibling.style.backgroundColor === TILECOLORS[1]){
                revealAll();
                winner = 'computer';
            } else if (e.target.nextElementSibling.style.backgroundColor === TILECOLORS[0]){
                console.log('safe');
                winner = 'player';
            } else {
            }       
    } else {
        console.log('error');
    }
    scores[winner]++
    render();
}

