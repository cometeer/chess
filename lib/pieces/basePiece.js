/* globals Chess, Games */
Chess.BasePiece = function(color) {
  this.color = color;
};
Chess.BasePiece.prototype.move = function(boardId, piece, orig, dest) {
  //console.log(this.color, this.type, orig, 'to', dest);
  // orig square.piece = {};
  // dest square.piece = this;
  // square.piece.hasMoved = true;
  Meteor.call('setPiece', boardId, piece, dest);
  Meteor.call('clearPiece', boardId, orig);
};
