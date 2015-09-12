/* globals Chess */
Chess.Bishop = function(color) {
  this.type = 'bishop';
  this.color = color;
  if (color === 'black') {
    this.unicodeChar = '♝';
  } else {
    this.unicodeChar = '♗';
  }
  this.validMoves = function(square) {
    var validMoves = [];
    // TODO compute the knight valid moves
    return validMoves;
  };
};

Chess.Bishop.prototype = new Chess.BasePiece(this.color);
