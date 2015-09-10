/* globals Chess */
Chess.Pawn = function (square) {
  var id = Session.get('currentGame');
  console.log(square, id);
  var data = Chess.getSquare(id, square);
  console.log(data);
  this.hasMoved = data.hasMoved;
  this.type = 'pawn';
  this.color = data.color;
  if (data.color === 'black') {
    this.unicodeChar = '♟';
  }
  else {
    this.unicodeChar = '♙';
  }
  this.validMoves = function (square) {
    var validMoves = [];
    // these numbers are the offsets for all pawn moves based on it's current location. For black pieces these are positive numbers because they move 'up' the board, for white pieces they are inverted ( 0 - offset) because they move the other direction. The numbers are, in order: basic move, double move , capture left, capture right.
    var offset = [8, 16, 7, 9];
    if (square.piece.color === 'white') {
      offset = offset.map(function (i) {
        return 0 - i;
      });
    }
    var boardId = Session.get('currentGame');

    function opt(squareNum) {
      var thisOption = Chess.getSquare(boardId, square.arrayLoc + squareNum);
      if (thisOption.piece && thisOption.piece !== {}) {
        thisOption.hasPiece = true;
      }
      else {
        thisOption.hasPiece = false;
      }
      return thisOption;
    }
    // Check if the pawn can do his double move, this requires the pawn to not have moved before and both squares in front of the pawn to be empty. Other checks such as destination can be skipped because the pawn that hasn't moved yet can't step of the board.
    if (!square.piece.hasMoved) {
      if (!opt(offset[1]).hasPiece) {
        if (!opt(offset[0]).hasPiece) {
          console.log('double move check ', square.piece);
          validMoves.push(square.arrayLoc + offset[1]);
        }
      }
    }
    // Check if the basic move of the pawn is valid. This requires the square in front of the pawn to be empty and for that square to lie on the board.
    if (square.arrayLoc - offset[0] >= 0) {
      if (!opt(offset[0]).hasPiece)
        validMoves.push(square.arrayLoc + offset[0]);
    }
    // Check if the pawn can capture on either side of him. This requires the square to be not emtpy and the piece that is to be captured to be of the opposing side(color).
    if (opt(offset[2]).hasPiece) {
      if (opt(offset[2]).piece.color !== square.piece.color) {
        validMoves.push(square.arrayLoc + offset[2]);
      }
    }
    if (opt(offset[3]).hasPiece) {
      if (opt(offset[3]).piece.color !== square.piece.color) {
        validMoves.push(square.arrayLoc + offset[3]);
      }
    }
    // TODO promotion: dest <= 8 || dest >= 57
    // TODO enpassant
    return validMoves;
  };
};
Chess.Pawn.prototype = new Chess.BasePiece(this.color);
