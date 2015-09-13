/* globals Chess, Games */
Chess.BasePiece = function(color) {
  this.color = color;
};
Chess.BasePiece.prototype.move = function(boardId, piece, orig, dest) {
  // orig square.piece = {};
  // dest square.piece = this;
  // square.piece.hasMoved = true;
  Meteor.call('setPiece', boardId, piece, dest);
  Meteor.call('clearPiece', boardId, orig);
};
