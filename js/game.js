var rat, timeTextValue, gameTimeValue, ratAnim, level2Bckg;

var Game = {
  preload: function() {
    game.load.spritesheet('rat', './assets/images/rat.png', 64, 64, 2);
    game.load.image('leve2', './assets/images/bckg-level2.png');
  },

  create: function(){
    // level2 background
    this.add.image(0, 0, 'leve2');

    //rat animation
    rat = game.add.sprite(65, 440, 'rat', 2);
    rat.scale.set(1.5);
    ratAnim = rat.animations.add('walk');

    ratAnim.play(3, true);

    //time counter
    timeTextValue = game.add.text(80, 50, 'Time: ');
    timeTextValue.font = 'Sigmar One';
    timeTextValue.fontSize = 20;
  }
}
