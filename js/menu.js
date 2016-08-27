
var Menu = {
  preload: function(){
    game.load.image('bckg', './assets/images/bckg.png');
    game.load.image('start-btn', './assets/images/start-btn.png');
  },

  create: function(){
    this.add.image(0, 0, 'bckg');
    var startBtn = game.add.button(game.world.centerX - 50, 270, 'start-btn', this.startGame, this, 2, 1, 0);
    startBtn.scale.set(0.4);

    var text = game.add.text(game.world.centerX, game.world.centerY - 100, 'RaT RacE\nPress button to start');
    text.anchor.setTo(0.5);
    text.font = 'Sigmar One';
    text.fontSize = 40;
    text.padding.set(10,10);
    text.align = 'center';
    text.addColor('#BEA57C', 8);
  },

  startGame: function(){
    this.state.start('Game');
  },

};
