/* globals ChessGame, Games */
ChessGame = {};

ChessGame.init = function () {
    // Start a new game of CHESS!
    var newGame = {};

    // TODO add user accounts and assign players
    newGame.player1 = 'Guest';
    newGame.player2 = 'Guest';
    newGame.board = new ChessGame.buildBoard();

    // As the last step of starting a new game log the game in the db and get the _id back so we know what game is which
    newGame._id = Games.insert(newGame, function (err, game) {
        return game._id;
    });
    console.log(newGame);
    return newGame;
};