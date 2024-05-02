const container = document.querySelector(".container");
const reset = document.querySelector("button");
const square = document.createElement("div");

square.className = "square";

// Initialise grid, attaching a hover eventlistener to each element
function initialiseGrid(size = 16) {
    for (i = 0; i < Math.pow(size, 2); i++) {
        let currentSquare = square.cloneNode();
        currentSquare.addEventListener("mouseover", () => {
            currentSquare.style.backgroundColor = "cyan";
        })
        container.appendChild(currentSquare);
    }
}

function resizeWidth(size) {
    squareWidthPercentage = 100 / size;
    square.style.width = `${squareWidthPercentage}%`
}

reset.addEventListener("click", () => {
    let size = 0;

    do {
        if (size < 0 || size > 100) {
            size = prompt("The number you entered is not valid. Must be between 1 - 99. Enter your desired grid size: ");
        } else {
            size = prompt("Enter your desired grid size: ");
        }
        
    } while (size > 100 || size < 1);
    
    container.innerHTML = "";

    resizeWidth(size);
    initialiseGrid(size);
})

initialiseGrid();





