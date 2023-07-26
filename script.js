let mode = "black";
createGrid(16);

let resize = document.querySelector("button.resize");
resize.addEventListener("click",resizeGrid);
let black = document.querySelector("button.black");
black.addEventListener("click",() => {
    mode = "black";
});
let rainbow = document.querySelector("button.rainbow");
rainbow.addEventListener("click",() => {
    mode = "rainbow";
});

let reset = document.querySelector("button.reset");
reset.addEventListener("click", resetGrid);

//document.addEventListener("DOMContentLoaded", function(){
    //createGrid(16);
    //resizeGrid();
//})


function createGrid(size) {
    let grid = document.querySelector(".container");
    grid.style.gridTemplateColumns = `repeat(${size},1fr)`;
    grid.style.gridTemplateRows = `repeat(${size},1fr)`;

    let numDivs = size * size;

    for(let i = 0; i < numDivs; i++){
        let div = document.createElement("div");
        
        div.style.backgroundColor = "white";
        grid.insertAdjacentElement("beforeend",div);
    }

    grid.addEventListener("click",(e) => {
        colorGrid(e.target);
    });

    }

function resizeGrid() {
    let answer = prompt("Enter the length of the square (1-100)");
    if(answer < 1 || answer > 100 || isNaN(answer)){
        alert("Please enter a valid number");
        return;
    } else {
        createGrid(answer);
    }
}

function randomRGB(){
    let r = Math.floor(Math.random() * 1000) % 256;
    let g = Math.floor(Math.random() * 1000) % 256;
    let b = Math.floor(Math.random() * 1000) % 256;
    return `rgb(${r}, ${g}, ${b})`;

}

function colorGrid(grid){
    if(mode == "rainbow"){
        grid.style.backgroundColor = randomRGB();
    } else if (mode == "black"){
        grid.style.backgroundColor = "black";
    }
}

function resetGrid(){
    let divs = document.querySelectorAll("div");
    divs.forEach((div) => div.style.backgroundColor = "white");
}

