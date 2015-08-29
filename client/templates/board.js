/* globals Games, Chess */
Template.board.helpers({
  rows: function () {
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
  moveIndicator: function () {
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
  },
  debug: function () {
    console.log(this);
  }
});

Template.board.events({
  'click .cell': function (event) {
    console.log(event.currentTarget.children[0].id);
    // find the right square on the board
    var squareNum = event.currentTarget.children[0].id;
    // if it's already selected clear the selection and quit
    if (squareNum === Session.get('selectedPiece')) {
      Session.set('moveIndicators', undefined);
      Session.set('selectedPiece', undefined);
      return;
    }
    console.log('not a double click');
    // If an indicated square is clicked we want to move the piece there
    var indicators = Session.get('moveIndicators');
    var i;
    var boardId = Session.get('currentGame');
    var selected = Session.get('selectedPiece');
    var square = Chess.getSquare(boardId, squareNum);
    if (indicators) {
      console.log('we\'ve got indicators');
      console.log(indicators, squareNum);
      for (i = 0; i <= indicators.length; i++) {
        if (indicators[i] == squareNum) {
          console.log('made it this far');
          var p = Chess.getSquare(boardId, selected).piece;
          console.log(p);
          var movingPiece = Chess.rePie(p.type, p.color);
          console.log(movingPiece);
          movingPiece.move(selected, squareNum);
        }
      }
    }
    console.log('not a move');
    if (square.piece && square.piece !== {}) {
      var p = square.piece;
      square.piece = Chess.rePie(p.type, p.color);
      console.log(square);
      // get the valid moves for this piece
      var moveOptions = square.piece.validMoves(square);
      console.log(moveOptions);
      // For each valid move update the board to show it.
      Session.set('moveIndicators', moveOptions);
      Session.set('selectedPiece', squareNum);
    }
  }

});

