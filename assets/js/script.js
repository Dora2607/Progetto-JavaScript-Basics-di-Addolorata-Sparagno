//functions

function getDisplay(displayCounter){
    let count = displayCounter.textContent;
    let numberCount = parseInt(count);
    console.log(numberCount);
    return numberCount;
}

function addCount(counter){
    counter = counter+1;
    return counter;
}

function subtractCount(counter){
    counter = counter-1;
    return counter;
}

function updateCounter(value){

    
}


//DOM

const displayCounter = document.getElementById("value-counter");



const btnContainer = document.querySelector(".btn-container");
const buttons = btnContainer.querySelectorAll(".btn");
console.log(buttons);
const plus = document.getElementById("plus-btn");
const minus = document.getElementById("minus-btn");
 

// Event



 plus.addEventListener("click", ()=>{
     let number = getDisplay(displayCounter);
     newValue = addCount(number);
     displayCounter.textContent= newValue;
     console.log(newValue);
 })
 minus.addEventListener("click", ()=>{
     let number = getDisplay(displayCounter);
     newValue = subtractCount(number);
     displayCounter.textContent= newValue;
     console.log(newValue);
 })





