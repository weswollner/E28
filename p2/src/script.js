import Vue from 'vue';

let app = new Vue({
    el: '#app',
    created() {
        this.resetBoard()
    },
    data: {
        'cellsWide': 30,
        'cellsTall': 50,
        'cellBorderSize': 0,
        'gameBoard': [],
        'isRunning': false,
        'waitTime': 55,
        'generation': 0,
        'maxGenerations': 1000,
        'organism': "@",
        'empty': "."
    },
    methods: {
        resetBoard: function () {
            this.gameBoard = [];
            this.generation = 0;
            for (let x = 0; x < this.cellsWide; x++) {
                this.gameBoard.push([]);
                for (let y = 0; y < this.cellsTall; y++) {
                    this.gameBoard[x].push(this.empty);
                }
            }
        },
        playGame: function () {
            this.isRunning = true;
            this.evolve();
        },
        nextFrame: function () {
            this.isRunning = false;
            this.evolve();
        },
        stopGame: function () {
            this.isRunning = false;
        },
        evolve: function () {
            let jData = JSON.stringify(this.gameBoard);
            let currentBoard = JSON.parse(jData);
            for (let x = 0; x < this.cellsWide; x++) {
                for (let y = 0; y < this.cellsTall; y++) {
                    let cell = currentBoard[x][y];
                    let numberOfNeighbors = this.getNumberOfNeighbors(x, y, currentBoard);
                    if (cell == this.organism) {
                        if (numberOfNeighbors < 2 || numberOfNeighbors > 3) {
                            this.gameBoard[x].splice(y, 1, this.empty);
                        }
                    } else if (numberOfNeighbors == 3) {
                        this.gameBoard[x].splice(y, 1, this.organism);
                    }
                }
            }
            this.generation++;
            if (this.isRunning && this.generation <= this.maxGenerations) {
                setTimeout(function () {
                    this.evolve();
                }.bind(this), this.waitTime)
            }
        },
        addRandom: function (amount) {
            for (let j = 0; j < amount;) {
                let x = Math.floor(Math.random() * this.cellsWide);
                let y = Math.floor(Math.random() * this.cellsTall);
                if (this.gameBoard[x][y] == this.empty) {
                    this.gameBoard[x].splice(y, 1, this.organism);
                } else {
                    this.gameBoard[x][y] = this.empty;
                    this.gameBoard[x].splice(y, 1, this.organism);
                }
                j++;
            }
        },
        getMovementRange: function (x, y, speed) {
            let rangeNorth = y - speed < 0 ? 0 : y - speed;
            let rangeSouth = (y + speed) >= this.cellsTall ? (this.cellsTall - 1) : y + speed;
            let rangeEast = (x + speed) >= this.cellsWide ? (this.cellsWide - 1) : x + speed;
            let rangeWest = x - speed < 0 ? 0 : x - speed;
            return [rangeNorth, rangeSouth, rangeEast, rangeWest];
        },
        getNumberOfNeighbors: function (thisX, thisY, board) {
            let range = this.getMovementRange(thisX, thisY, 1);
            let numberOfNeighbors = 0;
            for (let x = range[3]; x <= range[2]; x++) {
                for (let y = range[0]; y <= range[1]; y++) {
                    let cell = board[x][y];
                    if (cell == this.organism && !((thisX == x) && (thisY == y))) {
                        numberOfNeighbors++;
                    }
                }
            }
            return numberOfNeighbors;
        },
        toggleCell: function (x, y) {
            if (this.gameBoard[x][y] == this.empty) {
                this.gameBoard[x].splice(y, 1, this.organism);
            } else {
                this.gameBoard[x].splice(y, 1, this.empty);
            }
        },
    }
});