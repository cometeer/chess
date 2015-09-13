/* globals Chess */
Chess.Knight = function(color) {
  this.type = 'knight';
  this.color = color;
  if (color === 'black') {
    this.unicodeChar = '♞';
  } else {
    this.unicodeChar = '♘';
  }
  this.validMoves = function(square) {
    var validMoves = [];
    // TODO compute the knight valid moves
    return validMoves;
  };
};

Chess.Knight.prototype = new Chess.BasePiece(this.color);
