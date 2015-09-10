/* globals Chess, Games */
Chess = {};

Chess.init = function () {
    // Start a new game of CHESS!
    var newGame = {};

    // TODO add user accounts and assign players
    newGame.player1 = 'Guest';
    newGame.player2 = 'Guest';
    newGame.board = new Chess.buildBoard();

    // As the last step of starting a new game log the game in the db and get the _id back so we know what game is which
    newGame._id = Games.insert(newGame, function (err, game) {
        return game._id;
    });
    console.log(newGame);
    return newGame;
};

// Get a specific square for the specified board
Chess.getSquare = function (boardId, SquareNum) {
    return Games.findOne({
        _id: boardId
    }).board[SquareNum];
};

// re-usable REinstantiacePIEce, needs more pieces in the switch but the prototypes don't exists yet.
Chess.rePie = function (piece, square) {
    console.log(piece, square);
    var p;
    switch (piece) {
    case 'pawn':
        p = new Chess.Pawn(square);
        break;
    case 'rook':
        p = new Chess.Rook(square);
        break;
    case 'knight':
        p = new Chess.Knight(square);
        break;
    case 'bishop':
        p = new Chess.Bishop(square);
        break;
    }
    console.log(p);
    return p;
};