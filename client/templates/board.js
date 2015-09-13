/* globals Games, Chess */
Meteor.subscribe('games');

Template.board.helpers({
  rows: function() {
    var id = Session.get('currentGame');
    var game = Games.findOne({
      _id: id
    });
    var rows = [];
    var i;
    for (i = 0; i <= 7; i++) {
      rows.push(game.board.slice(0 + i * 8, 8 + i * 8));
    }
    return rows;
  },
  moveIndicator: function() {
    var squareNum = this.arrayLoc;
    var indicators = Session.get('moveIndicators');
    var i;
    if (indicators) {
      for (i = 0; i <= indicators.length; i++) {
        if (indicators[i] === squareNum) {
          return true;
        }
      }
    }
    return false;
  }
});

Template.board.events({
  'click .cell': function(event) {
    var squareNum = event.currentTarget.children[0].id | 0;
    var boardId = Session.get('currentGame');
    var square = Chess.getSquare(boardId, squareNum);
    // if it's already selected clear the selection and quit
    if (squareNum === Session.get('selectedPiece')) {
      Session.set('moveIndicators', undefined);
      Session.set('selectedPiece', undefined);
      return;
    }
    // If an indicated square is clicked we want to move the piece there
    var indicators = Session.get('moveIndicators');
    if (indicators) {
      var selected = Session.get('selectedPiece');
      for (var i = 0; i <= indicators.length; i++) {
        if (indicators[i] == squareNum) {
          var p = Chess.getSquare(boardId, selected).piece;
          var movingPiece = Chess.rePie(p.type, p.color);
          movingPiece.move(boardId, p, selected, squareNum);
          Session.set('moveIndicators', undefined);
          Session.set('selectedPiece', undefined);
          return;
        }
      }
    }
    // If a square that has a piece is clicked show the possible moves
    if (square.piece && square.piece !== {}) {
      square.piece = Chess.rePie(square.piece.type, square.piece.color);
      // get the valid moves for this piece
      var moveOptions = square.piece.validMoves(square);
      // For each valid move update the board to show it.
      Session.set('moveIndicators', moveOptions);
      Session.set('selectedPiece', squareNum);
    }
  }
});
