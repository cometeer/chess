/* globals Games, Chess */
Template.game.helpers({
  game: function() {
    var id = Session.get('currentGame');
    var game = Games.findOne({
      _id: id
    });
    return game;
  },
  currentGame: function() {
    return Session.get('currentGame');
  }
});

Template.game.events({
  'click .newGame': function(event) {
    var newGame = Chess.init();
    Session.set('currentGame', newGame._id);
  }
});
