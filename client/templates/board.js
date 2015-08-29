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
  deb: function () {
    console.log(this);
  },
  mark: function(){
    
  }
});
