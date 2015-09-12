/* globals Chess */
Chess.Rook = function(color) {
  this.type = 'rook';
  this.color = color;
  if (color === 'black') {
    this.unicodeChar = '♜';
  } else {
    this.unicodeChar = '♖';
  }
  this.validMoves = function(square) {
    var validMoves = [];
    // TODO compute the rook valid moves
    return validMoves;
  };
};

Chess.Rook.prototype = new Chess.BasePiece(this.color);
