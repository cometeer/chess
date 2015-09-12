/* globals Chess */
Chess.Bishop = function (square) {
  var id = Session.get('currentGame');
  var data = Chess.getSquare(id, square).piece;
  this.hasMoved = data.hasMoved;
  this.type = 'bishop';
  this.color = data.color;
  if (data.color === 'black') {
    this.unicodeChar = '♝';
  }
  else {
    this.unicodeChar = '♗';
  }
  this.validMoves = function (square) {
    var validMoves = [];
    // TODO compute the knight valid moves
    return validMoves;
  };
};

Chess.Bishop.prototype = new Chess.BasePiece(this.color);
