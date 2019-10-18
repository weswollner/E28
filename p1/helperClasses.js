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