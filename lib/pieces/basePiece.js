ChessGame.BasePiece = function(color) {
    this.color = color;
}
ChessGame.BasePiece.prototype.move = function (dest) {
    console.log(this.pieceType,' ', this.color, 'to ', dest);
};