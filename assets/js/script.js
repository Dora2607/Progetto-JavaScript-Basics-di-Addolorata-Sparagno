// Implementation of +/- buttons and counter value display using JavaScript

// Function 
function createDomElement (tagName, id, innerHtml, className, container){
    const element = document.createElement(tagName);
    element.id = id;
    element.innerHTML = innerHtml;
    element.classList.add(className);
    container.appendChild(element);
    return element;

}

function updateImage(){
    if (window.matchMedia("(max-width: 767px)").matches){
        reloadButton.innerHTML = "<img src= 'assets/img/icons8-ruota-a-destra-ios-16-filled-16.png'>";
        
    } else {
        reloadButton.innerHTML = "<img src='assets/img/icons8-ruota-a-destra-ios-16-filled-32.png'>";
        
    }
}


const container = document.getElementById("container");

//  I implement the value of the counter 
const paragraph = createDomElement("p", "value-counter", "0", "value", container);

// I implement the container that contains the buttons
const buttonContainer = createDomElement("div", "button-container", "","btn-container", container);

//  I implement the minus button
const minusBtn = createDomElement("button", "minus-btn", "-","btn", buttonContainer);

//  I implement the plus button
const plusBtn = createDomElement("button", "plus-btn", "+","btn", buttonContainer);

// I implement the reload button
const reloadButton = createDomElement("button", "reload-button", "<img>", "reload-btn", container);
updateImage();


//Resize event
window.addEventListener("resize", updateImage);

