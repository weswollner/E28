/***************************************************************
 * Represents a gameBoard. For a given gameBoard, there will be a number of cells that comprise the grid based on
 * the parameters. Each cell will be based on a given size (square). A gameBoard does not need to be square itself.
 * @constructor
 * @param {number} cellsWide -      Required. The width of the board in cells.
 * @param {number} cellsTall -      Required. The height of the board in cells.
 * @param {number} cellSize -       Required. The size of each square.
 * @param {number} cellBorderSize - Required. This is the space between the canvas border and any cells rendered.
 ****************************************************************/
class gameBoard {
    constructor(cellsWide, cellsTall, cellSize, cellBorderSize) {
        if (cellsWide) {
            this.cellsWide = cellsWide;
        } else {
            this.cellsWide = 12;
        }
        if (cellsTall) {
            this.cellsTall = cellsTall;
        } else {
            this.cellsTall = 12;
        }
        if (cellSize) {
            this.cellSize = cellSize;
        } else {
            this.cellSize = 12;
        }
        if (cellBorderSize) {
            this.cellBorderSize = cellBorderSize;
        } else {
            this.cellBorderSize = 1;
        }
        this.board = [];
        this.reset = reset;
        this.add = add;
        this.remove = remove;
        this.get = get;
        this.getCoordinate = getCoordinate;
        this.addRandom = addRandom;
        this.getNumberOfNeighbors = getNumberOfNeighbors;
        this.getMovementRange = getMovementRange;

        this.reset();
    }
}
function reset() {
    for (let x = 0; x < this.cellsWide; x++) {
        for (let y = 0; y < this.cellsTall; y++) {
            this.board[y] = [];
            this.board[y][x] = 0;
        }
    }
    for (let y = 0; y < this.board.length; y++) {
        for (let x = 0; x < this.board[0].length; x++) {
            this.board[y][x] = 0;
        }
    }
}
function get(coordinate) {
    return this.board[coordinate.y][coordinate.x];
}
function add(component, coordinate) {
    this.board[coordinate.y][coordinate.x] = component;
}
function remove(coordinate) {
    if (coordinate) {
        this.board[coordinate.y][coordinate.x] = 0;
    }
}
function move(coordinate, component) {
    if (!coordinate) {
    } else {
        if (this.board[coordinate.y][coordinate.x]) {
        } else {
            this.board[coordinate.y][coordinate.x] = 0;
            this.board[coordinate.y][coordinate.x] = component;
        }
    }
}
function getCoordinate(component) {
    for (let y = 0; y < this.board.length; y++) {
        for (let x = 0; x < this.board[0].length; x++) {
            let cell = this.board[y][x];
            if (cell && cell === component) {
                return new coordinate(x, y);
            }
        }
    }
}
function addRandom(amount, type) {
    for (let j = 0; j < amount;) {
        let x = Math.floor(Math.random() * this.cellsWide);
        let y = Math.floor(Math.random() * this.cellsTall);
        if ((x >= this.cellBorderSize && y >= this.cellBorderSize) && (x < this.cellsWide - this.cellBorderSize && y < this.cellsTall - this.cellBorderSize)) {
            if (this.board[y][x] == 0) {
                if (type == OBJECT_TYPES.organism) {
                    this.board[y][x] = new component(type, "");
                }
            } else {
                this.board[y][x] = 0;
                this.board[y][x] = new component(type, "");
            }
            j++;
        }
    }
}
function getNumberOfNeighbors(thisCoordinate, speed) {
    let range = this.getMovementRange(thisCoordinate, speed);
    let numberOfNeighbors = 0;
    for (let x = range.west; x <= range.east; x++) {
        for (let y = range.north; y <= range.south; y++) {
            let cell = this.board[y][x];
            if ((cell && cell.type != OBJECT_TYPES.deadOrganism) && !((thisCoordinate.x == x) && (thisCoordinate.y == y))) {
                numberOfNeighbors++;
            }
        }
    }
    return numberOfNeighbors;
}
function getMovementRange(coordinate, speed) {
    let y = parseInt(coordinate.y);
    let x = parseInt(coordinate.x);
    let rangeNorth = y - speed < 0 ? 0 : y - speed;
    let rangeSouth = (y + speed) >= this.cellsTall ? (this.cellsTall - 1) : y + speed;
    let rangeEast = (x + speed) >= this.cellsWide ? (this.cellsWide - 1) : x + speed;
    let rangeWest = x - speed < 0 ? 0 : x - speed;
    return new range(rangeNorth, rangeSouth, rangeEast, rangeWest);
}