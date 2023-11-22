// Implementation of +/- buttons and counter value display using JavaScript

// Function 
function updateImage(){
    if (window.matchMedia("(max-width: 767px)").matches){
        reloadImage.src = "assets/img/icons8-ruota-a-destra-ios-16-filled-16.png";
    } else {
        reloadImage.src = "assets/img/icons8-ruota-a-destra-ios-16-filled-32.png";
    }
}


const container = document.getElementById("container");

// I implement the value of the counter 

const paragraph = document.createElement("p");
paragraph.textContent = "0";
paragraph.id = "value-counter";
paragraph.style.width = "100%";
paragraph.style.display = "flex";
paragraph.style.justifyContent = "center";
container.appendChild(paragraph);

 
// I implement the container that contains the buttons
const buttonContainer = document.createElement("div");
buttonContainer.className = "btn-container";
buttonContainer.style.width="100%";
buttonContainer.style.display="flex";
buttonContainer.style.justifyContent = "space-around";
container.appendChild(buttonContainer);

// I implement the + and - buttons
const minusBtn = document.createElement("button");
minusBtn.id = "minus-btn";
minusBtn.textContent="-";
const plusBtn = document.createElement("button");
plusBtn.id = "plus-btn";
plusBtn.textContent="+";
buttonContainer.append(minusBtn, plusBtn);

let btn = buttonContainer.querySelectorAll("button");
btn.forEach(button => {
    button.classList.add("btn");
});

// I implement the reload button

const reloadButton = document.createElement("button");
reloadButton.id = "reload-button";
reloadButton.classList.add("reload-btn");
const reloadImage = document.createElement("img");
updateImage();
reloadButton.appendChild(reloadImage);
container.appendChild(reloadButton);

// Resize event
window.addEventListener("resize", updateImage);