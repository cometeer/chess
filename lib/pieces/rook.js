/* globals Chess */
Chess.Rook = function (square) {
  var id = Session.get('currentGame');
  var data = Chess.getSquare(id, square).piece;
  this.hasMoved = data.hasMoved;
  this.type = 'rook';
  this.color = data.color;
  if (data.color === 'black') {
    this.unicodeChar = '♜';
  }
  else {
    this.unicodeChar = '♖';
  }
  this.validMoves = function (square) {
    var validMoves = [];
    // TODO compute the rook valid moves
    return validMoves;
  };
};

Chess.Rook.prototype = new Chess.BasePiece(this.color);
