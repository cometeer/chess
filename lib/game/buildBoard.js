/* globals Chess */
Chess.buildBoard = function () {
    var grid = [];
    var y, x;
    var a = 0;
    for (y = 0; y <= 7; y++) {
        var rank = y + 1;
        for (x = 0; x <= 7; x++) {
            var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
            var file = letters[x];
            var square = {};
            square.rank = rank;
            square.file = file;
            if ((x + y) % 2) square.color = 'white';
            else square.color = 'black';
            square.arrayLoc = a;
            grid.push(square);
            a++;
        }
    }
    var i;
    // Set up the pawns
    for (i = 8; i <= 15; i++) {
        grid[i].piece = new Chess.Pawn('black');
    }
    for (i = 48; i <= 55; i++) {
        grid[i].piece = new Chess.Pawn('white');
    }
    // Set up the rooks (0,7,56,63)
    grid[0].piece = new Chess.Rook('black');
    grid[7].piece = new Chess.Rook('black');
    grid[56].piece = new Chess.Rook('white');
    grid[63].piece = new Chess.Rook('white');
    // Set up the knights
    grid[1].piece = new Chess.Knight('black');
    grid[6].piece = new Chess.Knight('black');
    grid[57].piece = new Chess.Knight('white');
    grid[62].piece = new Chess.Knight('white');
    // Set up the bishops
    grid[2].piece = new Chess.Bishop('black');
    grid[5].piece = new Chess.Bishop('black');
    grid[58].piece = new Chess.Bishop('white');
    grid[61].piece = new Chess.Bishop('white');
    // Set up the queens
    // set up the kings
    return grid;
};