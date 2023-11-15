//functions

function getDisplay(displayCounter){
    let count = displayCounter.textContent;
    let numberCount = parseInt(count);
    console.log(numberCount);
    return numberCount;
}



function addNumber(counter){
    counter = counter+1;
    return counter;
}

function subtractNumber(counter){
    counter = counter-1;
    return counter;
}

function updateCounter(op){
    let number = getDisplay(displayCounter);
    if (op===plus){
        newValue = addNumber(number);
    }else {
        newValue = subtractNumber(number);
    };
    displayCounter.textContent= newValue;
}


//DOM

const displayCounter = document.getElementById("value-counter");
const btnContainer = document.querySelector(".btn-container");
const plus = document.getElementById("plus-btn");
const minus = document.getElementById("minus-btn");


// Event


// plus.addEventListener("click", ()=>{
//     let number = getDisplay(displayCounter);
//     newValue = addNumber(number);
//     displayCounter.textContent= newValue;
//     console.log(newValue);
// })
// minus.addEventListener("click", ()=>{
//     let number = getDisplay(displayCounter);
//     newValue = subtractNumber(number);
//     displayCounter.textContent= newValue;
//     console.log(newValue);
// })



//Scrivo il procedimento: 1. prendi il numero che segna il display, 2 riconosci il tipo di bottone premuto, 3 aggiungi un evento al bottone selezionato, 4 applica la funzione di
//addizione o sottrazione 5. cambia il numero sul display ---> problema 2 ho un container che ha due bottoni come faccio a capire quale dei due ho premuto ?



// btnContainer.addEventListener("click", (e)=>{
//     let operation = e.target.closest("button");
//     if (operation!=null){
//         if(operation===plus){
//             let number = getDisplay(displayCounter);
//             newValue = addNumber(number);
//             displayCounter.textContent= newValue;             
//         }else{
//             let number = getDisplay(displayCounter);
//             newValue = subtractNumber(number);
//             displayCounter.textContent= newValue;
//         };
//     };

// }) 


    




btnContainer.addEventListener("click", (e)=>{
    let operation = e.target.closest("button");
    if (operation!=null){
        updateCounter(operation);
    };
}) 


