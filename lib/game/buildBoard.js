/* globals Chess */
Chess.buildBoard = function() {
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
      if ((x + y) % 2) square.color = "white";
      else square.color = "black";
      square.arrayLoc = a;
      grid.push(square);
      a++;
    }
  }
  var i;
  // Set up the pawns
  for (i = 8; i <= 15; i++) {
    grid[i].piece = new Chess.Pawn("black");
  }
  for (i = 48; i <= 55; i++) {
    grid[i].piece = new Chess.Pawn("white");
  }
  // Set up the rooks
  // Set up the knights
  // Set up the bishops
  // Set up the queens
  // set up the kings
  return grid;
};
