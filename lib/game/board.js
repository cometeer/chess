/* globals ChessGame */
ChessGame.buildBoard = function () {
    var grid = [];
    var y, x;
    for (y = 0; y <= 7; y++) {
        var rank = y + 1;
        for (x = 0; x <= 7; x++) {
            var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
            var file = letters[x];
            var square = {};
            square.rank = rank;
            square.file = file;
            if ((x + y) % 2) square.color = "white";
            else square.color = "black";
            grid.push(square);
        }
    }
    var i;
    for (i = 8; i <= 15; i++) {
        grid[i].piece = new ChessGame.Pawn("white");
    }
    for (i = 48; i <= 55; i++) {
        grid[i].piece = new ChessGame.Pawn("black");
    }
    return grid;
};