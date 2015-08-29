/* globals Games, ChessGame */
Template.game.helpers({
  game: function () {
    var id = Session.get('currentGame');
    var game = Games.findOne({
      _id: id
    });
    return game;
  },
  currentGame: function () {
    console.log(Session.get('currentGame'));
    return Session.get('currentGame');
  }
});

Template.game.events({
  'click .newGame': function (event) {
    var newGame = ChessGame.init();
    Session.set('currentGame', newGame._id);
    console.log(newGame);
  }
});

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
  debug: function () {
    console.log(this);
  }
});

Template.board.events({
  'click .cell': function (event) {
    console.log(event.currentTarget.children[0].id);
    // find the right square on the board
    var boardId = Session.get('currentGame');
    var squareNum = event.currentTarget.children[0].id;
    var square = ChessGame.getSquare(boardId, squareNum);
    // Instantiate the piece again cuz mongo ate it's methods
    if (square.piece && square.piece !== {}) {
      switch (square.piece.type) {
      case 'pawn':
        square.piece = new ChessGame.Pawn(square.piece.color);
        break;
      }
      console.log(square);
      // get the valid moves for this piece
      var moveOptions = square.piece.validMoves(square);
      console.log(moveOptions);
    }
  }
});
