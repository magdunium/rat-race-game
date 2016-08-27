var rat, sanwich, timeTextValue, gameTimeValue, ratAnim, level2Bckg, score, scoreTextVal, textStyle, cursors, tilesprite;

var Game = {
  preload: function() {
    game.load.spritesheet('rat', './assets/images/rat.png', 64, 64, 2);
    game.load.spritesheet('sandwich', './assets/images/sandwich.png', 360, 360, 2);
    game.load.image('level2', './assets/images/bckg-level2.png');
  },

  create: function(){
    // level2 background
    tilesprite = game.add.tileSprite(0, 0, 800, 600, 'level2');

    cursors = game.input.keyboard.createCursorKeys();

    //text style
    textStyle = { font: "20px sans-serif", align: "center" };

    //rat animation
    rat = game.add.sprite(65, 440, 'rat', 2);
    rat.scale.set(1.5);
    ratAnim = rat.animations.add('walk');
    ratAnim.play(4, true);

    //round timer
    gameTimeValue = 0;
    game.add.text(60, 30, 'Time: ', textStyle);
    timeTextValue = game.add.text(150, 30, gameTimeValue.toString(), textStyle);

    //score
    score = 0;
    game.add.text(60, 60, 'Score:', textStyle);
    scoreTextVal = game.add.text(150, 60, score.toString(), textStyle);
  },

  update: function() {

    if (cursors.left.isDown)
    {
        tilesprite.tilePosition.x += 8;
    }
    else if (cursors.right.isDown)
    {
        tilesprite.tilePosition.x -= 8;
    }

  }

}
