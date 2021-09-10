// constant variables that won't change

//1. what constitutes a safe tile vs. a mine
const tiles = {
    safe: {
        color: 'pink',
    },
    mine: {
        color: 'purple',


// state variables (do not assign values)

let remainingTiles;
let message;




// grab and cache elements from the DOM (look at html) within variables that need to be accessed more than once







// event listeners

//1. randomize the background color of buttons between pink and purple and hide it. 
//     make an array of the two colors, 

//2. when user clicks, reveal color of button.


//3. if the button is pink, update the REMAINING TILES MESSAGE and subtract 1 from tile count and continue until it reaches 0, and then prompt a winner message. 
// if it comes back as purple, reveal all purple tiles and prompt lose message



// init function[remember to render() at the end], other functions[remember to render() at the end if it's updating something], render function