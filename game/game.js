let myGameBoard, myCanvas;
let generation = 0;
let isRunning = false;
let waitTime = 55;
let speed = 1;

let pressClear = document.querySelector('#clearGame');
pressClear.addEventListener('click', clearGame);

let pressRandom = document.querySelector('#randomSeed');
pressRandom.addEventListener('click', random);

let pressPlay = document.querySelector('#playGame');
pressPlay.addEventListener('click', playGame);

let pressStop = document.querySelector('#stopGame');
pressStop.addEventListener('click', stopGame);

let colors = ['red', 'orange', 'yellow'];
console.log(colors);
colors[3] = 'green';
console.log(colors);

window.addEventListener('load', (e) => {
    myGameBoard = new gameBoard(CELLS_WIDE, CELLS_TALL, CELL_SIZE, CELL_BORDER);
    myCanvas = new gameCanvas(myGameBoard)
    let thisCanvas = document.getElementById("canvas");
    thisCanvas.onmousemove = displayPosition;
    thisCanvas.onmousedown = addOrRemoveComponent;
    document.getElementById("generation").innerHTML = generation;
    myCanvas.drawBoard();
});
function displayPosition(e) {
    var coordinate = getPosition(e);
    document.getElementById("displayAreaX").innerHTML = coordinate.x;
    document.getElementById("displayAreaY").innerHTML = coordinate.y;
}
function getPosition(e) {
    x = (Math.round((e.clientX / CELL_SIZE)) - 1) >= CELLS_WIDE ? CELLS_WIDE - 1 : (Math.round((e.clientX / CELL_SIZE)) - 1);
    y = (Math.round((e.clientY / CELL_SIZE)) - 1) >= CELLS_TALL ? CELLS_TALL - 1 : (Math.round((e.clientY / CELL_SIZE)) - 1);
    return new coordinate(x, y);
}
function addOrRemoveComponent(e) {
    var coordinate1 = getPosition(e);
    let cell = myGameBoard.get(coordinate1);
    if (cell && cell.type != OBJECT_TYPES.deadOrganism) {
        myGameBoard.remove(coordinate1);
        if (cell.type === OBJECT_TYPES.deadOrganism) {
            myGameBoard.add(new component(OBJECT_TYPES.organism, ""), coordinate1);
        }
    } else {
        myGameBoard.add(new component(OBJECT_TYPES.organism, ""), coordinate1);
    }
    myCanvas.drawBoard();
}
function playGame() {
    isRunning = true;
    evolve();
}
function evolve() {
    let jData = JSON.stringify(myGameBoard.board);
    let currentBoard = new gameBoard(CELLS_WIDE, CELLS_TALL, CELL_SIZE, CELL_BORDER);
    currentBoard.board = JSON.parse(jData);
    for (let y = 0; y < currentBoard.board.length; y++) {
        for (let x = 0; x < currentBoard.board[0].length; x++) {
            let cell = currentBoard.board[y][x];
            let thisCoordinate = new coordinate(x, y);
            let numberOfNeighbors = currentBoard.getNumberOfNeighbors(thisCoordinate, speed);
            if (cell && cell.type != OBJECT_TYPES.deadOrganism) {
                if (numberOfNeighbors < 2 || numberOfNeighbors > 3) {
                    myGameBoard.remove(thisCoordinate);
                    myGameBoard.add(new component(OBJECT_TYPES.deadOrganism, ""), thisCoordinate)
                }
            } else if (numberOfNeighbors == 3) {
                myGameBoard.add(new component(OBJECT_TYPES.newOrganism, ""), thisCoordinate)
            }
        }
    }
    myCanvas.drawBoard();
    generation++;
    document.getElementById("generation").innerHTML = generation;

    if (isRunning) {
        setTimeout(function () {
            evolve();
        }, waitTime);
    }
}
function stopGame() {
    isRunning = false;
}
function clearGame() {
    myGameBoard.reset();
    generation = 0;
    myCanvas.drawBoard();
    document.getElementById("generation").innerHTML = generation;
}
function random() {
    myGameBoard.addRandom(50, OBJECT_TYPES.organism);
    myCanvas.drawBoard();
}