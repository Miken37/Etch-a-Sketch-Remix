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
        square.setAttribute('style', 'background-color: white;');
        square.setAttribute('style', `height: ${boxSize}px; width: ${boxSize}px;`);
        square.setAttribute('style', `flex-basis: calc(100% / ${squares});`)    //Takes 100% of the parent containers width and divides by the amount of squares. Calc just lets you perform the calculation within css.
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

function changeColour(e) {    //Does stuff when eventlistener is activated in createGrid
    const rainbowToggle = document.querySelector('.rainbow');
    const shadingToggle = document.querySelector('.white');
    const normalToggle = document.querySelector('.normal');
    if (normalToggle.checked) {
        e.style.backgroundColor = "black";
    }
    else if (rainbowToggle.checked) {
        let rgb1 = Math.floor(Math.random() * 256);
        let rgb2 = Math.floor(Math.random() * 256);
        let rgb3 = Math.floor(Math.random() * 256);
        e.style.backgroundColor = `rgb(${rgb1}, ${rgb2}, ${rgb3})`;
    }
    else if (shadingToggle.checked) {
        e.style.backgroundColor = 'rgb(255, 255, 255)';
    }

}


startGame();