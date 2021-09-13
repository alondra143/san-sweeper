// constant variables that won't change

//1. what constitutes a safe tile vs. a mine
const TILECOLORS = ['#f9cdf1', '#a8a1c2']

// state variables (do not assign values)

let remainingTiles;
let message;




// grab and cache elements from the DOM (look at html) within variables that need to be accessed more than once
let tileBtns = document.querySelectorAll('#container > .tile');

let coverUp = document.getElementsByClassName('default');



document.querySelector('#restartBtn')
    .addEventListener('click', resetGame);

document.querySelector("#revealBtn")
    .addEventListener('click', revealAll);

// event listeners

//1. randomize the background color of buttons between pink and purple and hide it. 

function getColor() {
    for (let i = 0; i < tileBtns.length; i++) {
        const randomColor = Math.floor(Math.random() * TILECOLORS.length);
        tileBtns[i].style.backgroundColor = TILECOLORS[randomColor];
    };
}

tileBtns.addEventListener('click', function(e){
    e.target.console.log('testing single button');
})

function testingRemove() {
    tileBtns[revealAll];
};
//2. when user clicks, reveal color of button.

 function revealColor() {
    oneBtn.removeAttribute('hidden');
    oneCover.remove();
 }


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
// init function[remember to render() at the end], other functions[remember to render() at the end if it's updating something], render function

function resetGame() {
    console.log('click is working');
    getColor();
}