/* globals Chess, Games */
Chess = {};

Chess.init = function() {
  // Start a new game of CHESS!
  var newGame = {};

  // TODO add user accounts and assign players
  newGame.player1 = 'Guest';
  newGame.player2 = 'Guest';
  newGame.board = new Chess.buildBoard();

  // As the last step of starting a new game log the game in the db and get the _id back so we know what game is which
  newGame._id = Games.insert(newGame, function(err, game) {
    return game._id;
  });
  return newGame;
};

// Get a specific square for the specified board
Chess.getSquare = function(boardId, squareNum) {
  var game = Games.findOne({
    _id: boardId
  });
  var square = game.board[squareNum | 0];
  return square;
};

// re-usable REinstantiacePIEce, needs more pieces in the switch but the prototypes don't exists yet.
Chess.rePie = function(type, color) {
  var p;
  switch (type) {
    case 'pawn':
      p = new Chess.Pawn(color);
      break;
    case 'rook':
      p = new Chess.Rook(color);
      break;
    case 'knight':
      p = new Chess.Knight(color);
      break;
    case 'bishop':
      p = new Chess.Bishop(color);
      break;
    case 'queen':
      p = new Chess.Queen(color);
      break;
    case 'king':
      p = new Chess.King(color);
      break;
  }
  return p;
};
