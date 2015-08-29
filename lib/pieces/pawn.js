/* globals ChessGame */
ChessGame.Pawn = function (color) {
    this.pieceType = 'pawn';
    this.color = color;
    if (color === 'black') {
        this.unicodeChar = '♟';
    }
    else {
        this.unicodeChar = '♙';
    }
};
ChessGame.Pawn.prototype = new ChessGame.BasePiece(this.color);