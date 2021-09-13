// constant variables that won't change

//1. what constitutes a safe tile vs. a mine
const TILECOLORS = ['rgb(249, 205, 241)', 'rgb(168, 161, 194)'];

// state variables (do not assign values)

let remainingTiles;
let message;




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

function getColor() {
    for (let i = 0; i < tileBtns.length; i++) {
        const randomColor = Math.floor(Math.random() * TILECOLORS.length);
        tileBtns[i].style.backgroundColor = TILECOLORS[randomColor];
    };
}

//2. when user clicks, reveal color of button.




//3. if the button is pink, update the REMAINING TILES MESSAGE and subtract 1 from tile count and continue until it reaches 0, and then prompt a winner message. 

// if it comes back as purple, reveal all purple tiles and prompt lose message
// if ( === '#a8a1c2') {
//     showMines(); <--rename revealAll

// }

// LOSER FUNCTION-REVEAL ALL TILES

function revealAll() {
    for (let i = 0; i < tileBtns.length; i++) {
        tileBtns[i].removeAttribute('hidden')
    for (let e = 0; e < coverUp.length; e++) {
        coverUp[e].remove()
    }
    }
};
function revealBtn() {
    for (let i = 0; i < tileBtns.length; i++){
        tileBtns[i].removeAttribute('hidden');
    }
}
// init function[remember to render() at the end], other functions[remember to render() at the end if it's updating something], render function

function startGame() {
    console.log('click is working');
    getColor();
}
function resetGame() {
    btns
}

//one event delegation to listen to all the buttons on the section with CONTAINER ID. 

function clickTile(e) {
    console.log(e.target);
    if (e.target.className === 'default') {
        e.target.nextElementSibling.removeAttribute('hidden');
            if (e.target.nextElementSibling.style.backgroundColor === TILECOLORS[1]){
                e.target.setAttribute('hidden', 'true');
                revealAll();
            } else if (e.target.nextElementSibling.style.backgroundColor === TILECOLORS[0]){
                e.target.setAttribute('hidden', 'true');
                console.log('safe');
            } else {
                e.target.remove();
            }       
    } else {
        console.log('error');
    }
}

