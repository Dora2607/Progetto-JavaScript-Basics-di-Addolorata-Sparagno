//functions

function getDisplay(display){
    let count = display.textContent;
    let numberCount = parseInt(count);
    return numberCount;
}


function addNumber(counter){
    counter++;
    return counter;
}

function subtractNumber(counter){
    counter--;
    return counter;
}

function changeColor(number, display){
    if (number%2 ===0){
        display.style.color="#fdf0d5";
    }else{
        display.style.color="#F1F181";
    }
    
}

function updateCounter(op){
    let number = getDisplay(displayCounter);
    if (op===plus){
        newValue = addNumber(number);
    }else {
        newValue = subtractNumber(number);
    };
    changeColor(newValue, displayCounter);
    displayCounter.textContent= newValue;
}



//DOM

const displayCounter = document.getElementById("value-counter");
const btnContainer = document.querySelector(".btn-container");
const plus = document.getElementById("plus-btn");
const minus = document.getElementById("minus-btn");
const reloadBtn = document.getElementById("reload-btn");



// Event

btnContainer.addEventListener("click", (e)=>{
    let operation = e.target.closest("button");
    if (operation!=null){
        updateCounter(operation);
    };
}) 

reloadBtn.addEventListener("click", ()=>{
    displayCounter.textContent = 0;
    displayCounter.style.color = "White";
})






