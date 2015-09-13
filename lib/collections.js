/* globals Games */
Games = new Mongo.Collection('games');

Meteor.methods({
  setPiece: function(boardId, piece, dest) {
    piece.hasMoved = true;
    Games.update({
      _id: boardId,
      'board.arrayLoc': dest | 0
    }, {
      $set: {
        'board.$.piece': piece
      }
    });
  },
  clearPiece: function(boardId, squareNum) {
    Games.update({
      _id: boardId,
      'board.arrayLoc': squareNum | 0
    }, {
      $set: {
        'board.$.piece': {}
      }
    });
  }
});
