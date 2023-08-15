function log(text) {
    console.log(text);
}
log(0);

function startGame() {
    const squaresInput = document.querySelector('.squareCheck');
    const squaresSubmit = document.querySelector('.squareCheckBtn');
    squaresSubmit.addEventListener('click', function () {
        clearGrid();
        createGrid(squaresInput.value);
    });
}

function createGrid(squares) {
    const gridContainer = document.querySelector('.gridContainer');
    let gridSize = squares * squares;
    const maxSize = 900;   //Fixed max PIXEL size for grid
    let boxSize = (maxSize / squares);  //Calculation to determine size of each box to fit in grid
    for (let i = 1; i <= gridSize; i++) {
        const square = document.createElement('div');
        square.classList.toggle('square');
        square.id = 'square';
        square.setAttribute('style', `height: ${boxSize}px; width: ${boxSize}px;`);
        gridContainer.appendChild(square);
        square.addEventListener('mouseenter', function (e) {
            changeColour(e.target);
        });
    }
}

function clearGrid() {
    const gridAsNode = document.querySelectorAll("#square");
    gridAsNode.forEach((e) => e.remove());
}

function changeColour(e) {     //Does stuff when eventlistener is activated in createGrid
    e.classList.remove('square');
    e.classList.add('square2');
}


startGame();