// import functions and grab DOM elements
const touchdown = document.querySelector('#score');
const counterEl = document.querySelector('#counter');

const touchdown1= document.querySelector('#score1');
const counterEl1 = document.querySelector('#counter1');

// initialize state
let counter = 0;
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

touchdown.addEventListener('click',()=>{
    counter = counter + 7; 
    counterEl.textContent = counter;
  });

touchdown1.addEventListener('click',()=>{
  counter = counter + 7; 
  counterEl1.textContent = counter;
})

