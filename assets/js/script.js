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

// function updateCounter(value){


// }


//DOM

const displayCounter = document.getElementById("value-counter");



const btnContainer = document.querySelector(".btn-container");
const buttons = btnContainer.querySelectorAll(".btn");
// for (let button of buttons){
//     console.log(button.getAttribute("id"));

// };

// buttons.forEach(button=> {
//     console.log(button.getAttribute("id"));
// });
const plus = document.getElementById("plus-btn");

const minus = document.getElementById("minus-btn");


// Event

// buttons.addEventListener("click",()=>{
//     let flag = true;
//     while (flag===true){

//     }
// })

const operations = new Map();

operations.set("plus-btn", value => { return value + 1 })
operations.set("minus-btn", value => { return value - 1 })

buttons.forEach( buttons => {
    buttons.addEventListener( "click", () => { displayCounter.textContent = operations.get(buttons.getAttribute("id"))(getDisplay(displayCounter)) } )
})

//  plus.addEventListener("click", ()=>{
//      let number = getDisplay(displayCounter);
//      newValue = addCount(number);
//      displayCounter.textContent= newValue;
//      console.log(newValue);
//  })
//  minus.addEventListener("click", ()=>{
//      let number = getDisplay(displayCounter);
//      newValue = subtractCount(number);
//      displayCounter.textContent= newValue;
//      console.log(newValue);
//  })





