/***************************************************************
 * Represents a canvas for a gameboard.
 * @constructor
 * @param {number} gameBoard - Required. This is gameBoard used to determine how to draw the canvas.
 ****************************************************************/
class gameCanvas {
    constructor(gameBoard) {
        this.gameBoard = gameBoard;
        // let elementForCanvas = document.createElement("canvas");
        // elementForCanvas.setAttribute("id", "focusArea");
        this.canvas = document.getElementById("canvas");;
        this.canvas.width = this.gameBoard.cellsWide * this.gameBoard.cellSize;
        this.canvas.height = this.gameBoard.cellsTall * this.gameBoard.cellSize;
        this.context = this.canvas.getContext("2d");
        // document.body.insertBefore(this.canvas, document.body.childNodes[0]);

        this.clear = clear;
        this.drawBoard = drawBoard;
        this.drawCell = drawCell;
    }
}
function clear() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
};
function drawBoard() {
    this.clear();
    for (let y = 0; y < this.gameBoard.board.length; y++) {
        for (let x = 0; x < this.gameBoard.board[0].length; x++) {
            let cell = this.gameBoard.board[y][x];
            if (cell && cell.type == OBJECT_TYPES.organism) {
                this.drawCell(ORGANISM_COLOR, x * this.gameBoard.cellSize, y * this.gameBoard.cellSize, "square");
            }
            else if (cell && cell.type == OBJECT_TYPES.deadOrganism) {
                this.drawCell(DEAD_ORGANISM_GOLOR, x * this.gameBoard.cellSize, y * this.gameBoard.cellSize, "square");
            }
            else if (cell && cell.type == OBJECT_TYPES.newOrganism) {
                this.drawCell(NEW_ORGANISM_COLOR, x * this.gameBoard.cellSize, y * this.gameBoard.cellSize, "square");
            }
            else {
                this.drawCell("#e1e1e1", x * this.gameBoard.cellSize, y * this.gameBoard.cellSize, "grid");
            }
        }
    }
};
function drawCell(color, x, y, type) {
    ctx = this.context;
    ctx.fillStyle = color;
    ctx.strokeStyle = "#e1e1e1";
    if (type == 'grid') {
        ctx.strokeRect(x, y, this.gameBoard.cellSize, this.gameBoard.cellSize);
    }
    else if (type == 'square') {
        ctx.strokeRect(x, y, this.gameBoard.cellSize, this.gameBoard.cellSize);
        ctx.fillRect(x, y, this.gameBoard.cellSize, this.gameBoard.cellSize);
    }
};