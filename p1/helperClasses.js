/***************************************************************
 * Represents the range for a given component.
 * @constructor
 * @param {number} n - Required. The maximum movement north.
 * @param {number} s - Required. The maximum movement south.
 * @param {number} e - Required. The maximum movement east.
 * @param {number} w - Required. The maximum movement west.
 ****************************************************************/
class range {
    constructor(n, s, e, w) {
        this.north = n;
        this.south = s;
        this.east = e;
        this.west = w;
    }
}
/***************************************************************
 * Represents a coordinate on a game board.
 * @constructor
 * @param {number} x - Required. X position on gameboard.
 * @param {number} y - Required. Y position on gameboard.
 ****************************************************************/
class coordinate {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}