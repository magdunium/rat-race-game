var game;

game = new Phaser.Game(800, 600, Phaser.auto, 'game', '');

game.state.add('Menu', Menu);
game.state.add('Game', Game);
game.state.start('Menu');
