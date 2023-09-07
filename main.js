
// initialise variables

let colour = 'blue';
let size = 15;
let activeButton;
const hexCharacters = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]



const defaultColour = '#000000';
const eraserColour = '#FFFFFF';
const gridContainer = document.querySelector('.grid-container');
const clearButton = document.getElementById('clear-btn');
const eraserButton = document.getElementById('eraser-btn');
const randomColourButton = document.getElementById('random-colour-btn');
const changeColourButton = document.getElementById('colorSelected');
const gridSizeButton = document.getElementById('apply-gird-change-btn');
const resetButton = document.getElementById('reset-btn');


createGrid(size, size);   
sketch();
clearButton.addEventListener('click', clearSketch);
eraserButton.addEventListener('click', setActiveButtonAndColour);
randomColourButton.addEventListener('click', setActiveButtonAndColour);
changeColourButton.addEventListener('change', setActiveButtonAndColour);
resetButton.addEventListener('click', resetGrid);

// etchASketch()
 



function setColour(){
    switch(activeButton) { 
        case resetButton.id:
            return defaultColour;
        case gridSizeButton.id:
            return defaultColour
        case changeColourButton.id:
            return changeColour();
        case randomColourButton.id:
            return drawRandomColour()
        case eraserButton.id:
            return eraserColour;
        case clearButton.id:
            return defaultColour

    }
}

function setActiveButtonAndColour(){
    activeButton = this.id
    colour = setColour()
    console.log(this.id)
}

// function to make rows
function createGrid(rows, cols) {
    gridContainer.style.setProperty('--grid-rows', rows);
    gridContainer.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement('div');
    let gridID = c + 1;
    cell.setAttribute('id', `grid-${gridID}`);
    cell.style.background = 'white';
    cell.className = 'grid-item';
    gridContainer.appendChild(cell)
    // gridItems.forEach(item => item.style.background = 'white');
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
        hexColour += hexCharacters[randomPosition]
    }
    return hexColour
} 


// function to change colour according to user input
function changeColour() {
    const colorSelected = document.getElementById('colorSelected');
    colorSelected.addEventListener('change', function(e) {
        colour = e.target.value;
    })
    console.log('changecolour: ', colour)
    return colour
}

// function to reset grid and create a new blank grid
function resetGrid() {
   
    colour = defaultColour
    const popUp = document.getElementById('popup');
    popUp.style.display = 'block';
    
    const gridSize = document.getElementById('resetGridSize');
    gridSize.addEventListener('change', function(e) {
        size = e.target.value;
    })

    const applyGridSize = document.getElementById('apply-gird-change-btn');
    applyGridSize.addEventListener('click', function(){
        popUp.style.display = 'none';
        removeChildFromParent(gridContainer);
        createGrid(size, size);
        gridItems = document.getElementsByClassName('grid-item');
        sketch();
    });
    
    
}


// function to sketch 
function sketch() {
    const gridItems = document.getElementsByClassName('grid-item');
    [...gridItems].forEach(item => item.addEventListener('mouseover', function() {
        item.style.background = colour;
        console.log(item)
        console.log(colour)
        })
    )
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
    const gridItems = document.getElementsByClassName('grid-item');

    [...gridItems].forEach(item => {
        item.style.background = 'white';
        item.removeEventListener('mouseleave', deactiveButton)
    })
    
    isActiveButton = false;
    
}

function deactiveButton() {
    isActiveButton = false;
}

function drawRandomColour() {
    if (activeButton === randomColourButton.id){
        const gridItems = document.getElementsByClassName('grid-item');
        [...gridItems].forEach(item => item.addEventListener('mouseover', function(e) {
            let randomColour = generateRandomColour()
            colour = randomColour
        }, {once:true}))
        return colour
    } 
}

// function drawRandomColour() {
//     const gridItems = document.getElementsByClassName('grid-item');
//     [...gridItems].forEach(item => item.addEventListener('mouseover', function(e) {
//         let randomColour = generateRandomColour()
//         colour = randomColour
//         item.style.background = colour;
//     }))
//     console.log(`drawrandome ${colour}`)
// }

// how the sketch should work
function etchASketch(){

    
    const clearButton = document.getElementById('clear-btn');
    clearButton.addEventListener('click', clearSketch);

    const eraserButton = document.getElementById('eraser-btn');
    eraserButton.addEventListener('click', eraseSketch);

    const randomColourButton = document.getElementById('random-colour-btn');
    randomColourButton.addEventListener('click', drawRandomColour);

    const changeButton = document.getElementById('colorSelected');
    changeButton.addEventListener('click', changeColour);

    const gridSizeButton = document.getElementById('apply-gird-change-btn');
    gridSizeButton.addEventListener('click', resetGrid);

    const drawButton = document.getElementById('sketch-btn');
    drawButton.addEventListener('click', sketch);

    const resetButton = document.getElementById('reset-btn');
    resetButton.addEventListener('click', resetGrid);


}





console.log(activeButton)