
// initialise variables

let currentColour = 'blue';
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
let gridItems = document.getElementsByClassName('grid-item');


createGrid(size, size);   
sketch();
clearButton.addEventListener('click', clearSketch);
eraserButton.addEventListener('click', setActiveButtonAndColour);
randomColourButton.addEventListener('click', setActiveButtonAndColour);
changeColourButton.addEventListener('change', setActiveButtonAndColour);
resetButton.addEventListener('click', resetGrid );


function setColour(){
    switch(activeButton) { 
        case resetButton.id:
            return defaultColour;
        case gridSizeButton.id:
            return defaultColour
        case changeColourButton.id:
            return changeColour()
        case randomColourButton.id:
            return generateRandomColour()
        case eraserButton.id:
            return eraserColour;
        case clearButton.id:
            return defaultColour

    }
}

function setActiveButtonAndColour(){
    activeButton = this.id;
    currentColour = setColour();

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
        gridContainer.appendChild(cell);
  };
    gridItems = document.getElementsByClassName('grid-item');

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
        hexColour += hexCharacters[randomPosition];
    }
    return hexColour
} 


// function to change colour according to user input
function changeColour() {

    activeButton = this.id;
    const colorSelected = document.getElementById('colorSelected');
    colorSelected.addEventListener('change', function(e) {
        currentColour = e.target.value;
    })
    return currentColour
}

// function to reset grid and create a new blank grid
function resetGrid() {
    activeButton = this.id;
    currentColour = defaultColour;
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
        sketch();
    });
    
    
}

function sketch() {
    [...gridItems].forEach(item => item.addEventListener('mouseover', function() {
        if (activeButton === randomColourButton.id) {
            item.style.background = generateRandomColour();
        } else { item.style.background = currentColour; }
        })
    )
}

function clearSketch() {
    activeButton = this.id;
    const girdItems = document.getElementsByClassName('grid-item');
    for (let i=0; i < girdItems.length; i++) {
        girdItems[i].style.background = 'white';
    }
}