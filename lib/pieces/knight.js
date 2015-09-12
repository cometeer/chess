/* globals Chess */
Chess.Knight = function (square) {
  var id = Session.get('currentGame');
  var data = Chess.getSquare(id, square).piece;
  this.hasMoved = data.hasMoved;
  this.type = 'knight';
  this.color = data.color;
  if (data.color === 'black') {
    this.unicodeChar = '♞';
  }
  else {
    this.unicodeChar = '♘';
  }
  this.validMoves = function (square) {
    var validMoves = [];
    // TODO compute the knight valid moves
    return validMoves;
  };
};

Chess.Knight.prototype = new Chess.BasePiece(this.color);
