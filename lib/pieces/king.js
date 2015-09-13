/* globals Chess */
Chess.King = function(color) {
  this.type = 'king';
  this.color = color;
  if (color === 'black') {
    this.unicodeChar = '♚';
  } else {
    this.unicodeChar = '♔';
  }
  this.validMoves = function(square) {
    var validMoves = [];
    // TODO compute the rook valid moves
    return validMoves;
  };
};

Chess.King.prototype = new Chess.BasePiece(this.color);
