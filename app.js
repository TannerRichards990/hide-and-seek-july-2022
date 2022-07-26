// import functions and grab DOM elements
const shedButton = document.getElementById('shed-button');
const treeButton = document.getElementById('tree-button');
const boulderButton = document.getElementById('boulder-button');

const shedContainer = document.getElementById('shed-container');
const treeContainer = document.getElementById('tree-container');
const boulderContainer = document.getElementById('boulder-container');

const totalEl = document.getElementById('total');
const lossesEl = document.getElementById('losses');
const winsEl = document.getElementById('wins');
const resetButton = document.getElementById('reset-button');
// initialize state
const hidingPlaces = ['tree', 'shed', 'boulder'];

let correctGuesses = 0;
let totalGuesses = 0;
let incorrectGuesses = 0;



shedButton.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[hidingSpot];
    handleGuess(answer, 'shed');
});

treeButton.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[hidingSpot];
    handleGuess(answer, 'tree');
});

boulderButton.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[hidingSpot];
    handleGuess(answer, 'boulder');
});

resetButton.addEventListener('click', () => {
    shedContainer.classList.remove('face');
    boulderContainer.classList.remove('face');
    treeContainer.classList.remove('face');
    shedButton.disabled = false;
    boulderButton.disabled = false;
    treeButton.disabled = false;
});

function handleGuess(correctSpot, userGuess) {
    // reset the styles
    
    console.log(correctSpot + '-container');
    
    
    
    
    // then grab the appropriate container element for the correct guess from the DOM - done
    // then if the user guess is correct, increment the correct guesses - done
    // then increment the guesses
    if (userGuess === correctSpot) {
        console.log('Thats the right answer');
        correctGuesses++;
        totalGuesses++;
        winsEl.textContent = correctGuesses;
    } else {
        console.log('you are wrong');
        incorrectGuesses++;
        totalGuesses++;
        lossesEl.textContent = incorrectGuesses;
    }
    
    
    
    
    // then add the face class to that element so that the face shows up
    
    const correctEl = document.getElementById(correctSpot + '-container');
    correctEl.classList.add('face');
    shedButton.disabled = true;
    boulderButton.disabled = true;
    treeButton.disabled = true;




    // update the DOM to show this change to the user (including the losses, not tracked directly in state) - done
    
    totalEl.textContent = totalGuesses;

}
