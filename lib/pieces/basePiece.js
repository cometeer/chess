/* globals Chess, Games */
Chess.BasePiece = function (color) {
    this.color = color;
    console.log('made a new basePiece');
};
Chess.BasePiece.prototype.move = function (orig, dest) {
    console.log(this.color, this.type, orig, 'to', dest);
    // orig square.piece = {};
    // dest square.piece = this;
    // square.piece.hasMoved = true;
};