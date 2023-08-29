// logic
// create a container in html to host the sketch
// 1. dynamically create the box with js
// 2. add interaction to mouse hover

const container = document.querySelector('.grid-container');
let colour = 'blue'
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


makeRows(25, 25);
function setGridItemColour() {
    console.log('hi')
}

const gridItems = document.querySelectorAll('.grid-item')

gridItems.forEach(item => item.addEventListener('mouseover', function(e) {
    const sketch = document.getElementById(e.target.id)
    sketch.style.background = colour
}))


function clearSketch() {
    const girdItems = document.getElementsByClassName('grid-item')
    for (let i=0; i < girdItems.length; i++) {
        gridItems[i].style.background = 'white'
    }
    
}

// TODO 
// reset the colour 
const clearButton = document.querySelector('#clear-btn')
clearButton.addEventListener('click', clearSketch)


// make makeRows dynamic
// make background colour dynamic