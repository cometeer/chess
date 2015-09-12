/* globals Chess */
Chess.Queen = function(color) {
  this.type = 'queen';
  this.color = color;
  if (color === 'black') {
    this.unicodeChar = '♛';
  } else {
    this.unicodeChar = '♕';
  }
  this.validMoves = function(square) {
    var validMoves = [];
    // TODO compute the rook valid moves
    return validMoves;
  };
};

Chess.Queen.prototype = new Chess.BasePiece(this.color);
