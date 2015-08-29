/* globals ChessGame, Games */
ChessGame.BasePiece = function (color) {
    this.color = color;
};
ChessGame.BasePiece.prototype.move = function (orig, dest) {
    console.log(this.color, this.type, orig, 'to', dest);
    // orig square.piece = {};
    // dest square.piece = this;
    // square.piece.hasMoved = true;
};