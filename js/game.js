var rat, sanwich, timeTextValue, gameTimeValue, ratAnim, bckg, score, scoreTextVal, textStyle, cursors, ground, tilemap, map, layer;
var jumpTimer = 0;

var Game = {
  preload: function() {
    game.load.spritesheet('rat', './assets/images/rat.png', 350, 350, 2);
    game.load.spritesheet('sandwich', './assets/images/sandwich.png', 360, 360, 2);
    game.load.image('level2', './assets/images/bckg-level2.png');
    //game.load.image('ground', './assets/images/ground.png');
    game.load.tilemap('map', './assets/images/map.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.image('tiles', './assets/images/bckg-level2.png');

  },

  create: function(){
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.world.setBounds(0, 0, 1200, 600);
    bckg = game.add.tileSprite(0, 0, 800, 600, 'level2');
    //ground = game.add.tileSprite(0, 0, 800, 600, 'ground');

    map = game.add.tilemap('map');
    map.addTilesetImage('bckg-level2', 'tiles');

    //map collision
    map.setCollision(1);

    layer = map.createLayer('World1');
    cursors = game.input.keyboard.createCursorKeys();

    //text style
    textStyle = { font: "20px sans-serif", align: "center" };

    //rat - player
    rat = game.add.sprite(65, 400, 'rat', 2);
    rat.scale.set(0.3);

    rat.animations.add('walk', [0, 1], 5, true);

    game.camera.follow(rat);

    game.physics.enable(rat);
    game.physics.arcade.gravity.y = 250;

    rat.body.bounce.y = 0.2;
    rat.body.collideWorldBounds = true;

    //round timer
    gameTimeValue = 0;
    var time = game.add.text(60, 30, 'Time: ', textStyle);
    timeTextValue = game.add.text(150, 30, gameTimeValue.toString(), textStyle);
    timeTextValue.fixedToCamera = true;
    time.fixedToCamera = true;

    //score
    score = 0;
    var t = game.add.text(60, 60, 'Score:', textStyle);
    scoreTextVal = game.add.text(150, 60, score.toString(), textStyle);
    scoreTextVal.fixedToCamera = true;
    t.fixedToCamera = true;
  },

  update: function() {
    game.physics.arcade.collide(rat, layer);
    rat.body.velocity.x = 0;

    if (cursors.right.isDown)
    {
        rat.animations.play('walk');
        rat.body.velocity.x = 250;
    }
    else if (cursors.left.isDown)
    {
        rat.animations.play('walk');
        rat.body.velocity.x = -250;
    }
    else if (cursors.up.isDown && rat.body.onFloor() && game.time.now > jumpTimer)
    {
        rat.body.velocity.y = -250;
        jumpTimer = game.time.now + 750;
    }
    else{
      rat.animations.stop();
    }
  },

  render: function() {

    game.debug.cameraInfo(game.camera, 500, 110);
    game.debug.spriteCoords(rat, 32, 110);
    game.debug.rectangle({x:400+game.camera.x,y:0+game.camera.y,width:1,height:600});
    game.debug.rectangle({x:0+game.camera.x,y:300+game.camera.y,width:800,height:1});
  }

}
