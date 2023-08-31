// logic
// create a container in html to host the sketch
// 1. dynamically create the box with js
// 2. add interaction to mouse hover

const container = document.querySelector('.grid-container');
let colour = 'blue'
let size = 15


function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    let gridID = c + 1
    cell.setAttribute('id', `grid-${gridID}`)
    container.appendChild(cell).className = "grid-item";
  };
};



function setGridItemColour() {
    console.log('hi')
}

function changeGridSize() {
    const gridSize = document.querySelector('#gridSize')
    gridSize.addEventListener('change', function(e) {
        size = e.target.value;
    })
}

function sketch() {
    const gridItems = document.querySelectorAll('.grid-item')
    gridItems.forEach(item => item.addEventListener('mouseover', function(e) {
        const sketch = document.getElementById(e.target.id)

        sketch.style.background = colour
        console.log(colour)
    }))
}

function changeColour() {
    const colorSelected = document.querySelector('#colorSelected')
    colorSelected.addEventListener('change', function(e) {
        colour = e.target.value
    })
    
}

function clearSketch() {
    const girdItems = document.getElementsByClassName('grid-item')
    for (let i=0; i < girdItems.length; i++) {
        girdItems[i].style.background = 'white'
    }
}

function eraseSketch() {
    const gridItems = document.querySelectorAll('.grid-item')
    gridItems.forEach(item => item.addEventListener('mouseover', function(e) {
        const sketch = document.getElementById(e.target.id)
        sketch.style.background = 'white'
    }))
}


// let root = document.documentElement;
// console.log(colorSelected)


// TODO 
// reset the colour 


makeRows(size, size);
sketch()
const clearButton = document.querySelector('#clear-btn')
clearButton.addEventListener('click', clearSketch)

const eraserButton = document.querySelector('#eraser-btn')
eraserButton.addEventListener('click', eraseSketch)

const changeButton = document.querySelector('#color-picker-btn')
changeButton.addEventListener('click', changeColour)

const drawButton = document.querySelector('#sketch-btn')
drawButton.addEventListener('click', sketch)

console.log(colour)
// make makeRows dynamic
// make background colour dynamic