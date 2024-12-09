const container = document.querySelector("#container");
const sizeButton = document.querySelector("#size");
const clearButton = document.querySelector("#clear");
let gridSize = 0;


sizeButton.addEventListener("click", () => {
    if (gridSize > 0) {
        while(container.firstChild) {
            container.removeChild(container.firstChild)
        }
     }
    let userInput = prompt("Enter grid size:");
    if (isNaN(Number(userInput))) {
        alert('Invalid input')
        return;
    } else {
        if (userInput > 100) {
            alert("Input too large")
            return;
        }
        createGrid(userInput)
    }
})



clearButton.addEventListener("click", () => {
    const innerDivs = document.querySelectorAll(".inner");
    innerDivs.forEach((e) => {
        e.style.backgroundColor = 'white';
    })
})

function createGrid(size) {
    gridSize = size;
    for (i = 0; i < size; i++) {
        const div = document.createElement("div");
        div.style.display = 'flex';
        for (j = 0; j < size; j++) {
            const innerDiv = document.createElement("div");
            innerDiv.style.border = '1px solid grey';
            innerDiv.style.padding = '10px';
            innerDiv.classList.add('inner');
            div.appendChild(innerDiv);
            container.appendChild(div);
        }
    }
    
    const innerDivs = document.querySelectorAll(".inner");
    innerDivs.forEach((e) => {
        e.addEventListener("mouseover", () => {
            e.style.backgroundColor = 'red';
        })
    }) 
    
}

