function log(text) {
    console.log(text);
}
log(0);

function createGrid(squares) {
    const gridContainer = document.querySelector('.gridContainer');
    let gridSize = squares * squares;
    const maxSize = 1000;   //Fixed max PIXEL size for grid
    for (let i = 1; i <= gridSize; i++) {
        const square = document.createElement('div');
        let boxSize = (maxSize / squares);  //Calculation to determine size of each box to fit in grid
        square.classList.toggle('square');
        square.setAttribute('style', `height: ${boxSize}px; width: ${boxSize}px;`)
        gridContainer.appendChild(square);
        square.addEventListener('mousemove', function (e) {
            changeColour(e = square);
        });
    }
}

function changeColour(e) {     //Does stuff when eventlistener is activated in createGrid
    e.classList.remove('square');
    e.classList.add('square2');
}

createGrid(32);

