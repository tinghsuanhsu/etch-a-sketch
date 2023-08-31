
// initialise variables
const gridContainer = document.querySelector('.grid-container');
let colour = 'blue';
let size = 15;
const hexCharacters = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]


// function to make rows
function makeRows(rows, cols) {
    gridContainer.style.setProperty('--grid-rows', rows);
    gridContainer.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    let gridID = c + 1;
    cell.setAttribute('id', `grid-${gridID}`);
    gridContainer.appendChild(cell).className = "grid-item";
  };
};

function removeChildFromParent(element){
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    };   
};

function generateRandomColour(){
    let hexColour = '#'
    for (let i = 0; i < 6; i++) {
        const randomPosition = Math.floor(Math.random() * hexCharacters.length)
        hexColour += randomPosition
    }
    return hexColour
} 

// function to reset grid and create a new blank grid
function resetGrid() {
   
    const popUp = document.getElementById('popup');
    popUp.style.display = 'block';
    
    
    const gridSize = document.getElementById('resetGridSize');
    gridSize.addEventListener('change', function(e) {
        size = e.target.value;
    
    })

    const applyGridSize = document.getElementById('apply-gird-change-btn');
    applyGridSize.addEventListener('click', function(){
        popUp.style.display = 'none';
    });

    removeChildFromParent(gridContainer);
    makeRows(size, size);
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => item.style.background = 'white');
    sketch();
}


// function to sketch 
function sketch() {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => item.addEventListener('mouseover', function(e) {
        const sketch = document.getElementById(e.target.id);
        sketch.style.background = colour;
    }))
}

// function to change colour according to user input
function changeColour() {
    const colorSelected = document.getElementById('colorSelected');
    colorSelected.addEventListener('change', function(e) {
        colour = e.target.value;
    })
    
}

// function to clear the sketch
function clearSketch() {
    const girdItems = document.getElementsByClassName('grid-item');
    for (let i=0; i < girdItems.length; i++) {
        girdItems[i].style.background = 'white';
    }
}

// function to erase the drawing one cell by one cell 
function eraseSketch() {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => item.addEventListener('mouseover', function(e) {
        const sketch = document.getElementById(e.target.id);
        sketch.style.background = 'white';
    }))
}


function drawRandomColour() {
    let randomColour = generateRandomColour()
    colour = randomColour
}

// how the sketch should work
function etchASketch(){
    makeRows(size, size);    
    sketch();
    const clearButton = document.getElementById('clear-btn');
    clearButton.addEventListener('click', clearSketch);

    const eraserButton = document.getElementById('eraser-btn');
    eraserButton.addEventListener('click', eraseSketch);

    const changeButton = document.getElementById('color-picker-btn');
    changeButton.addEventListener('click', changeColour);

    const gridSizeButton = document.getElementById('apply-gird-change-btn');
    gridSizeButton.addEventListener('click', resetGrid);

    const drawButton = document.getElementById('sketch-btn');
    drawButton.addEventListener('click', sketch);

    const resetButton = document.getElementById('reset-btn');
    resetButton.addEventListener('click', resetGrid);

    const randomColourButton = document.getElementById('random-colour-btn');
    randomColourButton.addEventListener('click', drawRandomColour);

    

}





etchASketch()